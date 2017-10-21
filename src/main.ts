import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, Component } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
