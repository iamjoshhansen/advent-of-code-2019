import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Star1aComponent} from './stars/star1a/star1a.component';
import {Star1bComponent} from './stars/star1b/star1b.component';
import {Star2aComponent} from './stars/star2a/star2a.component';

const routes: Routes = [
  {
    path: 'star-1a',
    component: Star1aComponent,
  },
  {
    path: 'star-1b',
    component: Star1bComponent,
  },
  {
    path: 'star-2a',
    component: Star2aComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
