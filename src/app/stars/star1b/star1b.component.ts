import {Component, OnInit} from '@angular/core';
import {input} from '../star1a/input';

class RocketModule {
  readonly recFuelModule: RocketModule;

  constructor(readonly mass: number) {
    const fuel = this.fuel;
    if (fuel > 0) {
      this.recFuelModule = new RocketModule(fuel);
    }
  }

  get fuel() {
    return Math.floor(this.mass / 3) - 2;
  }

  get subMap() {
    return this.fuelMap.slice(1);
  }

  get fuelMap(): number[] {
    if (this.recFuelModule) {
      return [this.fuel].concat(this.recFuelModule.fuelMap);
    }
    if (this.fuel > 0) {
      return [this.fuel];
    }
    return [];
  }

  get totalFuel() {
    return (this.fuel > 0 ? this.fuel : 0) + (this.recFuelModule ? this.recFuelModule.totalFuel : 0);
  }
}

@Component({
  selector: 'app-star1b',
  templateUrl: './star1b.component.html',
  styleUrls: ['./star1b.component.scss'],
})
export class Star1bComponent implements OnInit {
  readonly input = input;
  modules: RocketModule[];
  totalFuel: number;

  constructor() {}

  ngOnInit() {
    this.modules = this.input
      .split('\n')
      .filter(x => x.length > 0)
      .map(x => parseInt(x, 10))
      .map(n => new RocketModule(n));

    this.totalFuel = this.modules.reduce((p, c) => p + c.totalFuel, 0);
  }
}
