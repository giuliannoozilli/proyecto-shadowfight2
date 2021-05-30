import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  imageUrl: string;
  name: string;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'assets/armas-acto1/nudillos/nud-postura.gif', name: 'Nudillos Postura', weight: '-', symbol: 'comienzo de la pelea' },
  { imageUrl: 'assets/armas-acto1/nudillos/nud-punio.gif', name: 'Nudillos Puño Derecho', weight: 11, symbol: 'puño' },
  { imageUrl: 'assets/armas-acto1/nudillos/nud-punio-fuerte.gif', name: 'Nudillos Puño Fuerte', weight: 13, symbol: 'adelante + puño' },
  { imageUrl: 'assets/armas-acto1/nudillos/nud-punio-super.gif', name: 'Nudillos Super Puños', weight: '8, 12, 12', symbol: 'adelante + puño, puño' },
  // tslint:disable-next-line: max-line-length
  { imageUrl: 'assets/armas-acto1/nudillos/nud-punio-rotat.gif', name: 'Nudillos Puño Rotativa', weight: 18, symbol: 'atras + puño' },
  // tslint:disable-next-line: max-line-length
  { imageUrl: 'assets/armas-acto1/nudillos/nud-upper.gif', name: 'Nudillos Puño Hacia Arriba', weight: 20, symbol: 'arriba + puño' },
  { imageUrl: 'assets/armas-acto1/nudillos/nud-bajon.gif', name: 'Nudillos Puño Bajon', weight: 16, symbol: 'abajo + puño' },
];

@Component({
  selector: 'app-nudillos',
  templateUrl: './nudillos.component.html',
  styleUrls: ['./nudillos.component.css']
})
export class NudillosComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'name', 'weight', 'symbol',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
