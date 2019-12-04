import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  navItems: {day: number; bonus: boolean; available: boolean}[] = [];
  private availableNavItems: string[] = ['1a', '1b', '2a'];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 50; i++) {
      const day = Math.floor(i / 2) + 1;
      const bonus = i % 2 === 1;
      const available = this.availableNavItems.includes(`${day}${bonus ? 'b' : 'a'}`);

      this.navItems.push({
        day,
        bonus,
        available,
      });
    }
  }
}
