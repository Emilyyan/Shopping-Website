webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//The component class code, written in typescript

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Shopping Website';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_router__ = __webpack_require__("./src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shoppingcart_shoppingcart_component__ = __webpack_require__("./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shoppingcart_shoppingcart_component__["a" /* ShoppingcartComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_router__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shoppingcart_shoppingcart_component__ = __webpack_require__("./src/app/shoppingcart/shoppingcart.component.ts");





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_component__["a" /* NavbarComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
            { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_1__sign_in_sign_in_component__["a" /* SignInComponent */] }
        ]
    },
    {
        path: '',
        children: [
            { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_4__shoppingcart_shoppingcart_component__["a" /* ShoppingcartComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".content{\n    margin-top: 4em;\n}\n.example-card {\n    max-width: 250px;\n}\n.example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--the Homepage component template, written in HTML.-->\n<div style=\"text-align:center\">\n  <div class=\"content\">\n    <mat-form-field>\n      <input matInput placeholder=\"Search Items here ...\">\n    </mat-form-field>\n    <button mat-button color=\"primary\">Go</button>\n\n    <mat-grid-list cols=\"3\" rowHeight=\"1:1.1\">\n      <mat-grid-tile>\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Game 1</mat-card-title>\n            <mat-card-subtitle>Item Name</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n          <mat-card-content>\n            <p>\n              Item introduction goes here ...\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button>DETAILS</button>\n          </mat-card-actions>\n        </mat-card>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Game 2</mat-card-title>\n            <mat-card-subtitle>Item Name</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n          <mat-card-content>\n            <p>\n              Item introduction goes here ...\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button>DETAILS</button>\n          </mat-card-actions>\n        </mat-card>\n      </mat-grid-tile>\n      \n      <mat-grid-tile>\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Game 3</mat-card-title>\n            <mat-card-subtitle>Item Name</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n          <mat-card-content>\n            <p>\n              Item introduction goes here ...\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button>DETAILS</button>\n          </mat-card-actions>\n        </mat-card>\n      </mat-grid-tile>\n      \n      <mat-grid-tile>\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Game 4</mat-card-title>\n            <mat-card-subtitle>Item Name</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n          <mat-card-content>\n            <p>\n              Item introduction goes here ...\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button>DETAILS</button>\n          </mat-card-actions>\n        </mat-card>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Game 5</mat-card-title>\n            <mat-card-subtitle>Item Name</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n          <mat-card-content>\n            <p>\n              Item introduction goes here ...\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button>DETAILS</button>\n          </mat-card-actions>\n        </mat-card>\n      </mat-grid-tile>\n      \n      <mat-grid-tile>\n        <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Game 6</mat-card-title>\n            <mat-card-subtitle>Item Name</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n          <mat-card-content>\n            <p>\n              Item introduction goes here ...\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button>DETAILS</button>\n          </mat-card-actions>\n        </mat-card>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".fixed-header{\n    /*overflow: auto;*/\n    top: 0;\n    left: 0;\n    position: fixed;\n    z-index: 999;\n}\n.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-toolbar class=\"fixed-header\" color=\"primary\">\n        <mat-toolbar-row>\n            <a mat-button routerLink=\"/\"><mat-icon>home</mat-icon></a>\n            <button mat-button [matMenuTriggerFor]=\"menu\" >Menu</button>\n            <mat-menu #menu=\"matMenu\" yPosition=\"below\" xPosition=\"after\" overlapTrigger=\"false\">\n                <button mat-menu-item>Item 1</button>\n                <button mat-menu-item>Item 2</button>\n            </mat-menu>\n            \n            <span class=\"spacer\"></span>\n            <a mat-button routerLink=\"/cart\"><mat-icon>shopping_cart</mat-icon></a>\n            <a mat-button routerLink=\"/signin\">Sign In</a>\n            <a mat-button routerLink=\"/signup\">Sign Up</a>\n        </mat-toolbar-row> \n    </mat-toolbar>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  shoppingcart works!\n</p>\n"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShoppingcartComponent = /** @class */ (function () {
    function ShoppingcartComponent() {
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
    };
    ShoppingcartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shoppingcart',
            template: __webpack_require__("./src/app/shoppingcart/shoppingcart.component.html"),
            styles: [__webpack_require__("./src/app/shoppingcart/shoppingcart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingcartComponent);
    return ShoppingcartComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br><br><br><br><br><br><br><br>\n<p >\n  sign-in works!\n</p>\n\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map