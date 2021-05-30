import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  imageUrl: string;
  name: string;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'assets/armas-acto1/batons-acero/bat-postura.gif', name: 'Batons Postura', weight: '-', symbol: 'comienzo de la pelea' },
  { imageUrl: 'assets/armas-acto1/batons-acero/bat-slash.gif', name: 'Batons Slash', weight: 8, symbol: 'puño' },
  { imageUrl: 'assets/armas-acto1/batons-acero/bat-doble-slash.gif', name: 'Batons Slash Doble', weight: '8, 10', symbol: 'puño, puño' },
  { imageUrl: 'assets/armas-acto1/batons-acero/bat-slash-fuerte.gif', name: 'Batons Slash Fuerte', weight: 10, symbol: 'adelante + puño' },
  // tslint:disable-next-line: max-line-length
  { imageUrl: 'assets/armas-acto1/batons-acero/bat-slash-super.gif', name: 'Batons Super Slash', weight: '10, 13', symbol: 'adelante + puño, puño' },
  { imageUrl: 'assets/armas-acto1/batons-acero/bat-rotat.gif', name: 'Batons Slash Rotativo', weight: 12, symbol: 'atras + puño' },
  { imageUrl: 'assets/armas-acto1/batons-acero/bat-upper.gif', name: 'Batons Uppercut', weight: 12, symbol: 'arriba + puño' },
  { imageUrl: 'assets/armas-acto1/batons-acero/bat-bajon.gif', name: 'Batons Bajon Slash', weight: 13, symbol: 'abajo + puño'}
];

@Component({
  selector: 'app-batonsacero',
  templateUrl: './batonsacero.component.html',
  styleUrls: ['./batonsacero.component.css']
})
export class BatonsaceroComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'name', 'weight', 'symbol',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
