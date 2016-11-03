"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
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
var HEROES = [
    { id: 1, name: 'Daenerys Targaryen', comment: 'Madre de cabras', image: 'images/daenarys-512x512.jpg' },
    { id: 2, name: 'Sansa Stark', comment: 'Se hace mayor' },
    { id: 3, name: 'Tyrion Lannister', comment: 'El mas listo' },
    { id: 4, name: 'Cercei Lannister', comment: 'Muy mala' },
    { id: 5, name: 'Jon Nieve', comment: 'BlancaNieves' },
    { id: 6, name: 'Margaery Tyrell', comment: 'Tambien ta buenorra' },
    { id: 7, name: 'Jorah Mormont', comment: 'Pobre Hombre' },
    { id: 8, name: 'Missandei', comment: 'Morena Buenorra' },
    { id: 9, name: 'Melisandre', comment: 'Mujer de rojo' },
    { id: 10, name: 'Jaime Lannister ', comment: 'Matarreyes' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Game of Thrones';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Cast</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedHero\">\n\t\t<img src=\"{{selectedHero.image}}\" height=\"82\" width=\"82\">\n      <h2>{{selectedHero.name}} details!</h2>\n      <div><label>id: </label>{{selectedHero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n\t\t<label>{{selectedHero.comment}}</label>\n      </div>\n    </div>\n  ",
            styles: ["\n\timg {height=42 width=42}\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 25em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map