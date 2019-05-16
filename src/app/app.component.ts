import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  year = '2019';

  constructor(@Inject('CURRENT_LANGUAGE') public language: string) {}
}
