import {Component, OnInit} from '@angular/core';
import {input} from '../star2a/input';
import {IntComputer, CompStateInterface} from '../../classes/int-computer';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators';

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

@Component({
  selector: 'app-star2b',
  templateUrl: './star2b.component.html',
  styleUrls: ['./star2b.component.scss'],
})
export class Star2bComponent implements OnInit {
  readonly input = input;
  private comp: IntComputer;
  states: CompStateInterface[] = [];
  finalAnswer: number;

  verbs: number[] = [];
  nouns: number[] = [];
  answers: {[key: string]: number} = {};
  correctKey: string;

  progress = 0;
  total = 1;

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.verbs.push(i);
      this.nouns.push(i);
    }

    this.nouns.forEach(noun => {
      this.verbs.forEach(verb => {
        this.answers[`${noun}-${verb}`] = undefined;
      });
    });
  }

  ngOnInit() {
    this.comp = new IntComputer();

    const shuffledKeys = shuffle(Object.keys(this.answers));
    this.total = shuffledKeys.length;
    timer(0, 1000 / 60)
      .pipe(take(this.total))
      .subscribe(i => {
        this.progress = i;
        const key = shuffledKeys[i];
        const [nounString, verbString] = key.split('-');
        const noun = parseInt(nounString, 10);
        const verb = parseInt(verbString, 10);

        this.comp.setInput(this.input);
        this.comp.setPosition(1, noun).setPosition(2, verb);
        const result = this.comp.result();
        this.answers[key] = result;
        if (result === 19690720) {
          this.correctKey = key;
          this.finalAnswer = 100 * noun + verb;
        }
      });
  }
}
