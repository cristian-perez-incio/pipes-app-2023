import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Cristian';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  changeClient(): void {
    this.name = 'Andrea';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Luis', 'Cristian', 'Andrea', 'Heberth', 'Lupe', 'Norma', 'Duque'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  attendClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Cristian',
    age: 31,
    address: 'PIO XII 223 Maranga'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
    }, 3500);
  })

}
