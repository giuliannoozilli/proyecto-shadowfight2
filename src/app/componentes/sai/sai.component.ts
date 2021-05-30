import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  imageUrl: string;
  name: string;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imageUrl: 'assets/armas-acto1/sai/sai-postura.gif', name: 'Sai Postura', weight: '-', symbol: 'comienzo de la pelea' },
  { imageUrl: 'assets/armas-acto1/sai/sai-spit.gif', name: 'Sai Spit', weight: 6, symbol: 'puño' },
  { imageUrl: 'assets/armas-acto1/sai/sai-spit-doble.gif', name: 'Sai Spit Doble', weight: '6, 8', symbol: 'puño, puño' },
  { imageUrl: 'assets/armas-acto1/sai/sai-spit-fuerte.gif', name: 'Sai Spit Fuerte', weight: 10, symbol: 'adelante + puño' },
  { imageUrl: 'assets/armas-acto1/sai/sai-spit-super.gif', name: 'Sai Spit Doble Salto', weight: '6, 12', symbol: 'adelante + puño, puño' },
  { imageUrl: 'assets/armas-acto1/sai/sai-rotat.gif', name: 'Sai Spit Rotativa', weight: 10, symbol: 'atras + puño' },
  { imageUrl: 'assets/armas-acto1/sai/sai-upper.gif', name: 'Sai Uppercut', weight: 9, symbol: 'arriba + puño' },
  { imageUrl: 'assets/armas-acto1/sai/sai-bajon.gif', name: 'Sai Spit Bajon', weight: 8, symbol: 'abajo + puño'}
];
@Component({
  selector: 'app-sai',
  templateUrl: './sai.component.html',
  styleUrls: ['./sai.component.css']
})
export class SaiComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'name', 'weight', 'symbol',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
