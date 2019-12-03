import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Star1aComponent} from './stars/star1a/star1a.component';

const routes: Routes = [
  {
    path: 'star-1a',
    component: Star1aComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
