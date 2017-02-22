import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // define supported languages for application English, French, German
  public LANGUAGES: any[] = ["en", "fr", "de"];

  constructor(private translate: TranslateService) {
      translate.addLangs(this.LANGUAGES);
      let browserLang = translate.getBrowserLang();
      let joinLangs = this.LANGUAGES.join("|");

      translate.use(browserLang.match(/joinLangs/) ? browserLang : 'en');
  }

}

