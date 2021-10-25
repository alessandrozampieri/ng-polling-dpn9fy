import { Component } from '@angular/core';
import { CurrencyService, CurrencyInfo } from './currency.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  currencyInfo$: Observable<CurrencyInfo[]>;
 
   constructor(public currencyService: CurrencyService) {
     this.currencyInfo$ = currencyService.getAllCurrencies();
   }

}
