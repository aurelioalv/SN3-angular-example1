import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  comment: string;
  image: string;
}
/*
const HEROES: Hero[] = [
  { id: 11, name: 'Ironman' },
  { id: 12, name: 'Hulk' },
  { id: 13, name: 'Thor' },
  { id: 14, name: 'HawkEye' },
  { id: 15, name: 'Wolverine' },
  { id: 16, name: 'Antman' },
  { id: 17, name: 'Black Widow' },
  { id: 18, name: 'Captain America' },
  { id: 19, name: 'Scarlet Witch' },
  { id: 20, name: 'Quick Silver' }
];*/
const HEROES: Hero[] = [
  { id: 1, name: 'Daenerys Targaryen', comment: 'Rompedora de cadenas',image: 'images/daenarys-512x512.jpg'},
  { id: 2, name: 'Sansa Stark', comment: 'De niña a mujer', image: 'images/sansa-stark-160.jpg' },
  { id: 3, name: 'Tyrion Lannister', comment: 'El mas listo',image: 'images/tyrion-lannister-512x512.jpg' },
  { id: 4, name: 'Cercei Lannister', comment: 'Muy mala',image: 'images/cersei-lannister-512x512.jpg' },
  { id: 5, name: 'Jon Nieve', comment: 'BlancaNieves',image: 'images/john-snow-512x512.jpg' },
  { id: 6, name: 'Margaery Tyrell', comment: 'Tambien ta buenorra',image: 'images/margarey-tyrell-512x512.jpg' },
  { id: 7, name: 'Jorah Mormont', comment: 'Pobre Hombre',image: 'images/jorah-mormont-512x512.jpg' },
  { id: 8, name: 'Missandei', comment: 'Muy sumisa',image: 'images/missandei-512x512.jpg' },
  { id: 9, name: 'Melisandre' , comment: 'Mujer de rojo',image: ''},
  { id: 10, name: 'Jaime Lannister ', comment: 'Matarreyes',image: '' }
];

@Component({
  selector: 'my-app',
  template: `
  <table>
  <tr>
  <td>
    <h2>{{title}}</h2>
    <h3>Cast</h3>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
	</td>
	<td>
    <div *ngIf="selectedHero">
		<img src="{{selectedHero.image}}" height="150" width="150">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
		<label>{{selectedHero.comment}}</label>
      </div>
    </div>
	</td>
	<tr>
	</table>
  `,
  styles: [`
	img {height=42 width=42}
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 25em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Game of tronos';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

