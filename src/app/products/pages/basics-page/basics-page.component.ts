import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower: string = 'cristian';
  public nameUpper: string = 'CRISTIAN';
  public fullName: string = 'crIsTiaN PeREz';
  public customDate: Date = new Date();

}
