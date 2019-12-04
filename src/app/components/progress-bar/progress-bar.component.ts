import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() completed: number = 0;
  @Input() count: number = 1;

  get width() {
    return `${(100 * this.completed) / this.count}%`;
  }

  constructor() {}

  ngOnInit() {}
}
