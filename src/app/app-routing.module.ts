import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Star1aComponent} from './stars/star1a/star1a.component';
import {Star1bComponent} from './stars/star1b/star1b.component';

const routes: Routes = [
  {
    path: 'star-1a',
    component: Star1aComponent,
  },
  {
    path: 'star-1b',
    component: Star1bComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
