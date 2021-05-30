import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  imageUrl: string;
  name: string;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'assets/armas-acto1/dagas/dagas-postura.gif', name: 'Cuchillas Postura', weight: '-', symbol: 'comienzo de la pelea' },
  { imageUrl: 'assets/armas-acto1/dagas/dagas-slash.gif', name: 'Cuchillas Slash', weight: 8, symbol: 'puño' },
  { imageUrl: 'assets/armas-acto1/dagas/dagas-slash-doble.gif', name: 'Cuchillas Slash Doble', weight: '8, 8', symbol: 'puño, puño' },
  { imageUrl: 'assets/armas-acto1/dagas/dagas-slash-fuerte.gif', name: 'Cuchillas Slash Fuerte', weight: 10, symbol: 'adelante + puño' },
  // tslint:disable-next-line: max-line-length
  { imageUrl: 'assets/armas-acto1/dagas/dagas-slash-super.gif', name: 'Cuchillas Super Slash', weight: '8, 15', symbol: 'adelante + puño, puño' },
  { imageUrl: 'assets/armas-acto1/dagas/dagas-rotat.gif', name: 'Cuchillas Slash Rotativo', weight: 12, symbol: 'atras + puño' },
  { imageUrl: 'assets/armas-acto1/dagas/dagas-upper.gif', name: 'Cuchillas Uppercut', weight: 15, symbol: 'arriba + puño' },
  { imageUrl: 'assets/armas-acto1/dagas/dagas-bajon.gif', name: 'Cuchillas Bajon Slash', weight: 12, symbol: 'abajo + puño'}
];

@Component({
  selector: 'app-dagas',
  templateUrl: './dagas.component.html',
  styleUrls: ['./dagas.component.css']
})
export class DagasComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
