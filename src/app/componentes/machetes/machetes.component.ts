import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  imageUrl: string;
  name: string;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'assets/armas-acto1/machetes/machpostura.gif', name: 'Espadas Postura', weight: '-', symbol: 'comienzo de la pelea' },
  { imageUrl: 'assets/armas-acto1/machetes/machslash.gif', name: 'Espadas Slash', weight: 8, symbol: 'puño' },
  { imageUrl: 'assets/armas-acto1/machetes/machslashdoble.gif', name: 'Espadas Slash Doble', weight: '8, 8', symbol: 'puño, puño' },
  { imageUrl: 'assets/armas-acto1/machetes/machslashfuerte.gif', name: 'Espadas Slash Fuerte', weight: 8, symbol: 'adelante + puño' },
  // tslint:disable-next-line: max-line-length
  { imageUrl: 'assets/armas-acto1/machetes/machslashsuper.gif', name: 'Espadas Super Slash', weight: '8, 8, 6', symbol: 'adelante + puño, puño' },
  { imageUrl: 'assets/armas-acto1/machetes/machrotat.gif', name: 'Espadas Slash Rotativo', weight: 10, symbol: 'atras + puño' },
  { imageUrl: 'assets/armas-acto1/machetes/machupper.gif', name: 'Espadas Uppercut', weight: 10, symbol: 'arriba + puño' },
  { imageUrl: 'assets/armas-acto1/machetes/machbajon.gif', name: 'Espadas Bajon Slash', weight: 13, symbol: 'abajo + puño'}
];
@Component({
  selector: 'app-machetes',
  templateUrl: './machetes.component.html',
  styleUrls: ['./machetes.component.css']
})
export class MachetesComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
