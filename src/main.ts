import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { injectMocks } from 'data-mocks';

let interval;

const getScenarios = () => ({
  default: [
    {
      url: /currencyInfo/,
      method: 'GET',
      response: [ 
        {currency: 'EUR', exchangeRate: 0.5 + Math.random()*1.2},
        {currency: 'USD', exchangeRate: 1},
        {currency: 'GBP', exchangeRate: 0.6 + Math.random() * 1.5 }
      ],
      responseCode: 200,
    }
  ]
});


platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;
  clearInterval(interval);
  interval = setInterval(() => injectMocks(getScenarios()), 2000);

  // Otherwise, log the boot error
}).catch(err => console.error(err));