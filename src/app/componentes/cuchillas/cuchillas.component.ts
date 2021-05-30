import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  imageUrl: string;
  name: string;
  weight;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'assets/armas-acto1/cuchillas/cuch-postura.gif', name: 'Cuchillas Postura', weight: '-', symbol: 'comienzo de la pelea' },
  { imageUrl: 'assets/armas-acto1/cuchillas/cuch-slash.gif', name: 'Cuchillas Slash', weight: 8, symbol: 'puño' },
  { imageUrl: 'assets/armas-acto1/cuchillas/cuch-doble-slash.gif', name: 'Cuchillas Slash Doble', weight: '8, 8', symbol: 'puño, puño' },
  { imageUrl: 'assets/armas-acto1/cuchillas/cuch-slash-fuerte.gif', name: 'Cuchillas Slash Fuerte', weight: 10, symbol: 'adelante + puño' },
  { imageUrl: 'assets/armas-acto1/cuchillas/cuch-slash-supper.gif', name: 'Cuchillas Slash Super', weight: '8, 15', symbol: 'adelante + puño, puño' },
  // tslint:disable-next-line: max-line-length
  { imageUrl: 'assets/armas-acto1/cuchillas/cuch-slash-rotat.gif', name: 'Cuchillas Slash Rotativa', weight: 12, symbol: 'atras + puño' },
  // tslint:disable-next-line: max-line-length
  { imageUrl: 'assets/armas-acto1/cuchillas/cuch-upper.gif', name: 'Cuchillas Slash Hacia Arriba', weight: 15, symbol: 'arriba + puño' },
  { imageUrl: 'assets/armas-acto1/cuchillas/cuch-slash-bajon.gif', name: 'Cuhcillas Slash Bajon', weight: 12, symbol: 'abajo + puño' },
];

@Component({
  selector: 'app-cuchillas',
  templateUrl: './cuchillas.component.html',
  styleUrls: ['./cuchillas.component.css']
})
export class CuchillasComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'name', 'weight', 'symbol',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
