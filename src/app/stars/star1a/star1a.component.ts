import {Component, OnInit} from '@angular/core';
import {input} from './input';

class RocketModule {
  constructor(readonly mass: number) {}

  get fuel() {
    return Math.floor(this.mass / 3) - 2;
  }
}

@Component({
  selector: 'app-star1a',
  templateUrl: './star1a.component.html',
  styleUrls: ['./star1a.component.scss'],
})
export class Star1aComponent implements OnInit {
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

    this.totalFuel = this.modules.reduce((p, c) => p + c.fuel, 0);
  }
}
