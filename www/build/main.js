webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pag5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Pag5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Pag5Page = /** @class */ (function () {
    function Pag5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Pag5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Pag5Page');
    };
    Pag5Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pag5',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\pag5\pag5.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title><div align="center"><img src="https://www.unautreblog.com/wp-content/uploads/2017/08/CrashNSaneTrilogy_01.jpg" alt="ERROR"></div></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\pag5\pag5.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Pag5Page);
    return Pag5Page;
}());

//# sourceMappingURL=pag5.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/pag4/pag4.module": [
		273,
		1
	],
	"../pages/pag5/pag5.module": [
		274,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pag4_pag4__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pag5_pag5__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__pag4_pag4__["a" /* Pag4Page */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__pag5_pag5__["a" /* Pag5Page */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\tabs\tabs.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Dota 2" tabIcon="md-barcode"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="FNAF" tabIcon="md-analytics"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Slenderman" tabIcon="md-bonfire"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Fortnite" tabIcon="md-flash"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Crash" tabIcon="ios-game-controller-a"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div align="center"><img class="primero" src="https://pm1.narvii.com/6726/6c6e692e07381c146a7fe26d4f21a06e56554245v2_hq.jpg" alt="ERROR"></div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n\n  <ion-slide style="background-color: white">\n    <a href="https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/?l=spanish"><img src="http://www.freddyjuego.com/images/games/fnaf-1.jpg" alt=""></a>\n    <h2>Five Nights At Freddy\'s</h2>\n  </ion-slide>\n\n  <ion-slide style="background-color: white">\n    <a href="https://store.steampowered.com/app/332800/Five_Nights_at_Freddys_2/"><img src="https://s3.amazonaws.com/img3.pregunta2.com/2016-11/05/test-5102-cov-800-300.jpg"></a>\n    <h2>Five Nights At Freddy\'s 2</h2>\n  </ion-slide>\n\n  <ion-slide style="background-color: white">\n    <a href="https://store.steampowered.com/app/354140/Five_Nights_at_Freddys_3/"><img src="https://vignette.wikia.nocookie.net/five-nights-at-freddys-espanol/images/c/c6/FNaF_3.png/revision/latest?cb=20150126222157&path-prefix=es" alt=""></a>\n    <h2>Five Nights At Freddy\'s 3</h2>\n  </ion-slide>\n\n  <ion-slide style="background-color: white">\n    <a href="https://store.steampowered.com/app/388090/Five_Nights_at_Freddys_4/"><img src="https://pre00.deviantart.net/a18f/th/pre/f/2017/091/3/5/fnaf_4_generations__speedart__by_witheredfnaf-db4ahgx.png" alt=""></a>\n    <h2>Five Nights At Freddy\'s 4</h2>\n  </ion-slide>\n\n  <ion-slide style="background-color: white">\n    <a href="https://store.steampowered.com/app/506610/Five_Nights_at_Freddys_Sister_Location/"><img src="https://uvejuegos.com/img/noticias/38380/cabecera/FNaF_SL_-_Box_Art_(Grande)-2.jpg" alt=""></a>\n    <h2>Five Nights At Freddy\'s 5: Sister Location</h2>\n  </ion-slide>\n</ion-slides>\n\n<ion-card>\n  <ion-card-header>\n    <div align="center">Personajes</div>\n  </ion-card-header>\n\n  <ion-list>\n      <div style="height:22%; width:22%; margin-left:40%; font-size:3.5vh"><img src="https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/5/53/FNaF_-_Freddy_Icono.png/revision/latest?cb=20160403174510&path-prefix=es" alt="Freddy">\n      Freddy</div>\n      <br>\n      <div style="height:22%; width:22%; margin-left:40%; font-size:3.5vh"><img src="https://pre00.deviantart.net/22a1/th/pre/f/2017/327/0/a/fnaf_1_bonnie_icon_by_bandz68-dbumbns.jpg" alt="Bonnie">\n      Bonnie</div>\n      <br>\n      <div style="height:23.5%; width:23.5%; margin-left:39%; font-size:3.5vh"><img src="https://pre00.deviantart.net/8c3c/th/pre/f/2017/264/f/2/_sfm__fnaf_1_chica_by_williamwee-dbo53v9.jpg" alt="Chica">\n      Chica</div>\n      <br>\n      <div style="height:23.5%; width:23.5%; margin-left:39%; font-size:3.5vh"><img src="https://vignette.wikia.nocookie.net/freddy-fazbears-pizza/images/7/76/FNaF_-_Foxy_Icono.png/revision/latest?cb=20141119133019&path-prefix=es" alt="Foxy">\n      Foxy</div>\n      <br>\n  </ion-list>\n</ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title><div align="center">Scott Cawthon</div></ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <div align="center"><img src="https://www.eldiario.es/juegoreviews/noticias/slender-manjpg_EDIIMA20140604_0669_5.jpg" alt="ERRORSITO"></div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @slendyman\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title><img class="primero" src="https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg?t=1525818062"></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div padding>\n  <ion-segment [(ngModel)]="pet">\n    <ion-segment-button value="fuerza">\n      <ion-icon name="logo-foursquare"></ion-icon>  Fuerza\n    </ion-segment-button>\n    <ion-segment-button value="agilidad">\n      <ion-icon name="leaf"></ion-icon>  Agilidad\n    </ion-segment-button>\n    <ion-segment-button value="inteligencia">\n      <ion-icon name="ios-bulb-outline"></ion-icon>  Inteligencia\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<div [ngSwitch]="pet">\n  <ion-list *ngSwitchCase="\'fuerza\'">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/2/23/Axe_icon.png">\n      </ion-thumbnail>\n      <h2>Axe</h2>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/8/8d/Io_icon.png">\n      </ion-thumbnail>\n      <h2>Io</h2>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/4/4d/Bristleback_icon.png">\n      </ion-thumbnail>\n      <h2>Bristleback</h2>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'agilidad\'">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/7/7d/Luna_icon.png">\n      </ion-thumbnail>\n      <h2>Luna</h2>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/8/80/Drow_Ranger_icon.png">\n      </ion-thumbnail>\n      <h2>Drown Ranger</h2>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/9/9c/Templar_Assassin_icon.png">\n      </ion-thumbnail>\n      <h2>Templar Assassin</h2>\n    </ion-item>\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'inteligencia\'">\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/2/27/Crystal_Maiden_icon.png">\n      </ion-thumbnail>\n      <h2>Crystal Maiden</h2>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/3/35/Lina_icon.png">\n      </ion-thumbnail>\n      <h2>Lina</h2>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/6/67/Ancient_Apparition_icon.png">\n      </ion-thumbnail>\n      <h2>Ancient Apparition</h2>\n    </ion-item>\n  </ion-list>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-title><div align="center">IceFrog</div></ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pag4_pag4__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pag5_pag5__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pag4_pag4__["a" /* Pag4Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pag5_pag5__["a" /* Pag5Page */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/pag4/pag4.module#Pag4PageModule', name: 'Pag4Page', segment: 'pag4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pag5/pag5.module#Pag5PageModule', name: 'Pag5Page', segment: 'pag5', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_pag4_pag4__["a" /* Pag4Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pag5_pag5__["a" /* Pag5Page */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pag4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Pag4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Pag4Page = /** @class */ (function () {
    function Pag4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Pag4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Pag4Page');
    };
    Pag4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pag4',template:/*ion-inline-start:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\pag4\pag4.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title><div align="center"><img src="http://virtualgamers.net/wp-content/uploads/2018/04/fortnite___2018_victory_royale___youtube___by_knkl-dbylohy-800x445.jpg" alt="ERROR"></div></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrador\Desktop\Cursillo\Ionic\holiwis\src\pages\pag4\pag4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Pag4Page);
    return Pag4Page;
}());

//# sourceMappingURL=pag4.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map