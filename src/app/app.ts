/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {Alert, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {NgClass} from 'angular2/common';

import './app.scss'
import {Home} from './home/home';
import {Contact} from './contact/contact';
import {Services} from './services/services';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [Alert, NgClass],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', name: 'Home', component: Home, useAsDefault: true},
  {path: '/services', name: 'Services', component: Services},
  {path: '/contact', name: 'Contact', component: Contact},
])
export class App {
  name = 'Monica Wu';
  url = 'https://www.monicawulaw.com';
  showMenu = false;
  isHomePage : boolean;

  constructor(public router:Router) {
    router.subscribe((value:any) => {
      this.isHomePage = value == '';
    });
  }
}
