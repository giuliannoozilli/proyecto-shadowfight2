import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  imageUrl: string;
  name: string;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'assets/armas-acto1/segadora-sangrante/segsan-postura.gif', name: 'Kusarigama Postura', weight: '-', symbol: 'comienzo de la pelea' },
  { imageUrl: 'assets/armas-acto1/segadora-sangrante/segsan-slash.gif', name: 'Kusarigama Slash', weight: 10, symbol: 'puño' },
  { imageUrl: 'assets/armas-acto1/segadora-sangrante/segsan-slash-doble.gif', name: 'Kusarigama Slash Doble', weight: '10, 12', symbol: 'puño, puño' },
  { imageUrl: 'assets/armas-acto1/segadora-sangrante/segsan-slash-fuerte.gif', name: 'Kusarigama Slash Fuerte', weight: 21, symbol: 'adelante + puño' },
  { imageUrl: 'assets/armas-acto1/segadora-sangrante/segsan-slash-super.gif', name: 'Kusarigama Super Slash', weight: '10, 8, 15', symbol: 'adelante + puño, puño' },
  // tslint:disable-next-line: max-line-length
  { imageUrl: 'assets/armas-acto1/segadora-sangrante/segsan-rotat.gif', name: 'Kusarigama Slash Rotativo', weight: 11, symbol: 'atras + puño' },
  { imageUrl: 'assets/armas-acto1/segadora-sangrante/segsan-upper.gif', name: 'Kusarigama Uppercut', weight: '11, 8', symbol: 'arriba + puño' },
  { imageUrl: 'assets/armas-acto1/segadora-sangrante/segsan-bajon.gif', name: 'Kusarigama Bajon Slash', weight: '12, 9', symbol: 'abajo + puño'}
];

@Component({
  selector: 'app-segadorasangrante',
  templateUrl: './segadorasangrante.component.html',
  styleUrls: ['./segadorasangrante.component.css']
})
export class SegadorasangranteComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
