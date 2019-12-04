import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {Star1aComponent} from './stars/star1a/star1a.component';
import {Star1bComponent} from './stars/star1b/star1b.component';
import {Star2aComponent} from './stars/star2a/star2a.component';
import {Star2bComponent} from './stars/star2b/star2b.component';
import {ProgressBarComponent} from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Star1aComponent,
    Star1bComponent,
    Star2aComponent,
    Star2bComponent,
    ProgressBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
