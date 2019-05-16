import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';

import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


registerLocaleData(localeZh, 'zh');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'monicawulaw-website' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]),
    TransferHttpCacheModule
  ],
  providers: [
    { provide: 'CURRENT_LANGUAGE', useFactory: getCurrentLanguage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getCurrentLanguage() {
  return (typeof window !== "undefined") ? window.location.pathname.replace(/^\/([^\/]*).*$/, '$1') : 'en';
}