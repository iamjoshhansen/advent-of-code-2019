import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Star1aComponent} from './stars/star1a/star1a.component';
import {Star1bComponent} from './stars/star1b/star1b.component';
import {Star2aComponent} from './stars/star2a/star2a.component';
import {Star2bComponent} from './stars/star2b/star2b.component';

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
  {
    path: 'star-2b',
    component: Star2bComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
