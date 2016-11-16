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
var core_1 = require("@angular/core");
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
    { id: 1, name: 'Daenerys Targaryen', comment: 'Rompedora de cadenas', image: 'images/daenarys-512x512.jpg' },
    { id: 2, name: 'Sansa Stark', comment: 'De niña a mujer', image: 'images/sansa-stark-160.jpg' },
    { id: 3, name: 'Tyrion Lannister', comment: 'El mas listo', image: 'images/tyrion-lannister-512x512.jpg' },
    { id: 4, name: 'Cercei Lannister', comment: 'Muy mala', image: 'images/cersei-lannister-512x512.jpg' },
    { id: 5, name: 'Jon Nieve', comment: 'BlancaNieves', image: 'images/john-snow-512x512.jpg' },
    { id: 6, name: 'Margaery Tyrell', comment: 'Tambien ta buenorra', image: 'images/margarey-tyrell-512x512.jpg' },
    { id: 7, name: 'Jorah Mormont', comment: 'Pobre Hombre', image: 'images/jorah-mormont-512x512.jpg' },
    { id: 8, name: 'Missandei', comment: 'Muy sumisa', image: 'images/missandei-512x512.jpg' },
    { id: 9, name: 'Melisandre', comment: 'Mujer de rojo', image: '' },
    { id: 10, name: 'Jaime Lannister ', comment: 'Matarreyes', image: '' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Game of Thrones';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.onButton = function (hero) {
        alert(hero.name + " / " + hero.comment);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <table>\n  <tr>\n  <td>\n    <h2>{{title}}</h2>\n    <h3>Cast</h3>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\t</td>\n\t<td>\n    <div *ngIf=\"selectedHero\">\n\t\t<img src=\"{{selectedHero.image}}\" height=\"150\" width=\"150\">\n      <h2>{{selectedHero.name}} details!</h2>\n      <div><label>id: </label>{{selectedHero.id}}</div>\n      <div>\n\n    \t\t<form name=\"myForm\" ng-controller=\"Ctrl\">\n        <label>name: </label>\n            <input id=\"name\" class=\"form-control\" [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"\n    \t\t(ngModelChange)=\"selectedHero.name = $event\" name=\"name\" required #name=\"ngModel\" #spy/>\n    \t\t\t<div [hidden]=\"name.valid || name.pristine\"\n                 class=\"alert alert-danger\">\n    \t\t\tName is required\n  \t\t\t  </div>\n\t\t</form>\n\t\t<label>{{selectedHero.comment}}</label>\n\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"onButton(selectedHero)\">Info famous character</button>\n\t\t<br><p >Escribe para cambiar el nombre<br><br> {{spy.className}}</p>\n\n      </div>\n    </div>\n\n\n\t</td>\n\t<tr>\n\t</table>\n\t<ul class=\"nav navbar-nav\">\n  <li>\n    <a router-link=\"home\">Home</a>\n  </li>\n  <li>\n    <a router-link=\"add\">Add</a>\n  </li>\n</ul>\n  ",
        styles: ["\n\timg {height=42 width=42}\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 25em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n\t.ng-valid[required], .ng-valid.required  {\n\tborder-left: 5px solid #42A948; /* green */\n\t}\n\n\t.ng-invalid:not(form)  {\n\tborder-left: 5px solid #a94442; /* red */\n\t}\n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map