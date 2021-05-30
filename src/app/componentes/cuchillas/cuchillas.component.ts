import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  imageUrl: string;
  weight;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {imageUrl: 'https://github.com/SiddAjmera.png', name: 'Cuchillas Postura', weight: '-', symbol: 'comienzo de la pelea'},
  {imageUrl: 'https://static.wikia.nocookie.net/shadowfight/images/a/a5/KnivesStance.gif/revision/latest?cb=20180301130300', name: 'Cuchillas Slash', weight: 8, symbol: 'puño'},
  {imageUrl: '', name: 'Cuchillas Slash Doble', weight: 6.941, symbol: 'puño, puño'},
  {imageUrl: '', name: 'Cuchillas Slash Fuerte', weight: 9.0122, symbol: 'adelante + puño'},
  {imageUrl: '', name: 'Cuchillas Slash Super', weight: 10.811, symbol: 'adelante + puño, puño'},
  {imageUrl: '', name: 'Cuchillas Slash Rotativa', weight: 12.0107, symbol: 'atras + puño'},
  {imageUrl: '', name: 'Cuchillas Slash Hacia Arriba', weight: 12.0107, symbol: 'arriba + puño'},
  {imageUrl: '', name: 'Cuhcillas Slash Bajon', weight: 14.0067, symbol: 'abajo + puño'}
];

@Component({
  selector: 'app-cuchillas',
  templateUrl: './cuchillas.component.html',
  styleUrls: ['./cuchillas.component.css']
})
export class CuchillasComponent implements OnInit {
  displayedColumns: string[] = ['imageUrl', 'position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
