import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  imageUrl: string;
  name: string;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'assets/armas-acto1/espada-ninja/esppostura.gif', name: 'Katana Postura', weight: '-', symbol: 'comienzo de la pelea' },
  { imageUrl: 'assets/armas-acto1/espada-ninja/espslash.gif', name: 'Katana Slash', weight: 8, symbol: 'puño' },
  { imageUrl: 'assets/armas-acto1/espada-ninja/espslashdoble.gif', name: 'Katana Slash Doble', weight: '8, 8', symbol: 'puño, puño' },
  { imageUrl: 'assets/armas-acto1/espada-ninja/espslashfuerte.gif', name: 'Katana Slash Fuerte', weight: 10, symbol: 'adelante + puño' },
  // tslint:disable-next-line: max-line-length
  { imageUrl: 'assets/armas-acto1/espada-ninja/espslashsuper.gif', name: 'Katana Super Slash', weight: '10, 14', symbol: 'adelante + puño, puño' },
  { imageUrl: 'assets/armas-acto1/espada-ninja/esprotat.gif', name: 'Katana Slash Rotativo', weight: 13, symbol: 'atras + puño' },
  { imageUrl: 'assets/armas-acto1/espada-ninja/espupper.gif', name: 'Katana Uppercut', weight: 11, symbol: 'arriba + puño' },
  { imageUrl: 'assets/armas-acto1/espada-ninja/espbajon.gif', name: 'Katana Bajon Slash', weight: 12, symbol: 'abajo + puño'}
];
@Component({
  selector: 'app-espadaninja',
  templateUrl: './espadaninja.component.html',
  styleUrls: ['./espadaninja.component.css']
})
export class EspadaninjaComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'name', 'weight', 'symbol',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
