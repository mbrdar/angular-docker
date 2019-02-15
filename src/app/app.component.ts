import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-docker';
  language: string;

  constructor(@Inject('DEFAULT_LANGUAGE') private defaultLanguage: string) {
    this.language = defaultLanguage;
  }
}
