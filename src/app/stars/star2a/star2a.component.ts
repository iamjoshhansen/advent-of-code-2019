import {Component, OnInit} from '@angular/core';
import {timer, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {input} from './input';
import {IntComputer, CompStateInterface} from '../../classes/int-computer';

@Component({
  selector: 'app-star2a',
  templateUrl: './star2a.component.html',
  styleUrls: ['./star2a.component.scss'],
})
export class Star2aComponent implements OnInit {
  readonly input = input;
  private comp: IntComputer;
  states: CompStateInterface[] = [];
  finalAnswer: number;

  constructor() {}

  ngOnInit() {
    this.comp = new IntComputer();
    this.comp.setInput(this.input);
    this.comp.setPosition(1, 12).setPosition(2, 2);
    this.states = [this.comp.state];

    const done = new Subject();

    timer(0, 1000 / 60)
      .pipe(takeUntil(done))
      .subscribe(i => {
        const hasNext = this.comp.step();
        if (hasNext) {
          this.states.push(this.comp.state);
        } else {
          done.next();
          this.finalAnswer = this.comp.state.data[0];
        }
      });
  }
}
