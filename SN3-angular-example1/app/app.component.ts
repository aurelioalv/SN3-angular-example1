import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  comment: string;
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
  { id: 1, name: 'Daenerys Targaryen', comment: 'Madre de cabras',image: 'images/daenarys-512x512.jpg'},
  { id: 2, name: 'Sansa Stark', comment: 'Se hace mayor' },
  { id: 3, name: 'Tyrion Lannister', comment: 'El mas listo' },
  { id: 4, name: 'Cercei Lannister', comment: 'Muy mala' },
  { id: 5, name: 'Jon Nieve', comment: 'BlancaNieves' },
  { id: 6, name: 'Margaery Tyrell', comment: 'Tambien ta buenorra' },
  { id: 7, name: 'Jorah Mormont', comment: 'Pobre Hombre' },
  { id: 8, name: 'Missandei', comment: 'Morena Buenorra' },
  { id: 9, name: 'Melisandre' , comment: 'Mujer de rojo'},
  { id: 10, name: 'Jaime Lannister ', comment: 'Matarreyes' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Cast</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
		<img src="{{selectedHero.image}}" height="82" width="82">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
		<label>{{selectedHero.comment}}</label>
      </div>
    </div>
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
  title = 'Game of Thrones';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

