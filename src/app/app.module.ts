import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: 'BACKEND_API_URL', useValue: environment.backendApiUrl},
    {provide: 'DEFAULT_LANGUAGE', useValue: environment.defaultLanguage}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
