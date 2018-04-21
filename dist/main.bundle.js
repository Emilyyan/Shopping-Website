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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sign_up_sign_up_component__ = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shoppingcart_shoppingcart_component__ = __webpack_require__("./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__checkout_checkout_component__ = __webpack_require__("./src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shoppingcart_shoppingcart_component__["a" /* ShoppingcartComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_10__checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["r" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["h" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["g" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_router__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["q" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["o" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["m" /* MatRadioModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail_component__["a" /* ProductDetailComponent */]
            ]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shoppingcart_shoppingcart_component__ = __webpack_require__("./src/app/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout_component__ = __webpack_require__("./src/app/checkout/checkout.component.ts");





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
            //{ path: 'signin', component: SignInComponent},
            { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_3__shoppingcart_shoppingcart_component__["a" /* ShoppingcartComponent */] },
            { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_4__checkout_checkout_component__["a" /* CheckoutComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <h4>Checkout</h4>\n\n  <mat-horizontal-stepper [linear]=\"true\" #stepper=\"matHorizontalStepper\">\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <h5>Shipping</h5>\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>Shipping Info</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"First name\" formControlName=\"fname\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Last name\" formControlName=\"lname\" required>\n        </mat-form-field>\n        <br/>\n        <mat-form-field>\n          <input matInput placeholder=\"Address 1\" formControlName=\"addr\" required>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput placeholder=\"Address 2\">\n          </mat-form-field>\n        <br/>\n        <mat-form-field>\n          <mat-select placeholder=\"Choose your state\" formControlName=\"state\" required>\n            <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"City\" formControlName=\"city\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput #zipcode placeholder=\"Zip Code\" formControlName=\"zip\" maxlength=\"5\" required>\n          <mat-hint align=\"end\">{{zipcode.value.length}} / 5</mat-hint>\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"tel\" matInput placeholder=\"Phone Number\" formControlName=\"phone\" maxlength=\"10\" required>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <h5>Payment</h5>\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>Payment Info</ng-template>\n        <p>* Sorry! We only accept payment via Paypal by this point.</p>\n        <mat-radio-group formControlName=\"secondCtrl\" required>\n          <mat-radio-button value=\"1\" disabled=\"true\">Credit Card</mat-radio-button>\n          <mat-radio-button value=\"2\">Paypal</mat-radio-button>\n        </mat-radio-group>\n        <br><br>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Place Order</ng-template>\n      <h5>Review Your Order</h5>\n      \n      <div>\n        <button mat-button (click)=\"onSubmit()\">Place your order</button>\n        <button mat-button (click)=\"stepper.reset()\">Clear form</button>\n      </div>\n    </mat-step>\n  </mat-horizontal-stepper>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            fname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            lname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            addr: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            zip: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]
        });
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".parent-container{\n    max-width: 90%;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.example-card {\n    max-width: 250px;\n    min-width: 200px;\n    -ms-flex-preferred-size: 30%;\n        flex-basis: 30%;\n    margin-bottom: 2em;\n}\n.in-stock{\n    color: #2e7b32;\n}\n.out-of-stock{\n    color: #d32f2f;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--the Homepage component template, written in HTML.-->\n<div style=\"text-align:center\">\n  <div class=\"content\">\n    <span class=\"spacer\"></span>\n    <mat-form-field>\n      <input matInput placeholder=\"Search Items here ...\">\n    </mat-form-field>\n    <button mat-icon-button color=\"primary\"><mat-icon>search</mat-icon></button>\n\n    <div class=\"parent-container\">\n      <mat-card class=\"example-card\" *ngFor=\"let p of products\">\n        <img mat-card-image src={{p.img}} alt=\"Product Image\">\n        <mat-card-content>\n          <mat-card-title>{{p.name}}</mat-card-title>\n          <mat-card-subtitle>\n            ${{p.price}} &nbsp;&nbsp;&nbsp;\n            <span *ngIf=\"p.stock > 0\" class=\"in-stock\">In Stock</span>\n            <span *ngIf=\"p.stock == 0\" class=\"out-of-stock\">Out of Stock</span>\n          </mat-card-subtitle>\n          <p>{{p.desc}}</p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"primary\" (click)=\"openDetail(p.id)\">Details\n            <mat-icon>open_in_new</mat-icon>\n          </button>\n          <button mat-button color=\"accent\">Add to Cart\n            <mat-icon>add_shopping_cart</mat-icon>\n          </button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
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
    function HomeComponent(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.products = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products")
            .subscribe(function (data) {
            if (data.length) {
                console.log(data);
                _this.products = data;
            }
        });
    };
    HomeComponent.prototype.openDetail = function (PID) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__["a" /* ProductDetailComponent */], {
            height: '60%',
            width: '60%',
            data: {
                PID: PID
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]])
    ], HomeComponent);
    return HomeComponent;
}());

/*
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  desc: string;
  img: string;
}

const PRODUCT_DATA: Product[] = [
  {id: 1, name: 'Game 1', price: 12.99, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 2, name: 'Game 2', price: 11.99, stock: 16, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 3, name: 'Game 3', price: 12.99, stock: 12, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 4, name: 'Game 4', price: 12.99, stock: 0, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 5, name: 'Game 5', price: 5.99, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 6, name: 'Game 6', price: 10.12, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 7, name: 'Game 7', price: 15.99, stock: 34, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 8, name: 'Game 8', price: 18.99, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 9, name: 'Game 9', price: 12.99, stock: 93, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 10, name: 'Game 10', price: 16.99, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 11, name: 'Game 11', price: 16.99, stock: 35, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
  {id: 12, name: 'Game 12', price: 10.88, stock: 15, desc: 'Item introduction goes here ...', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg'}
];*/


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".fixed-header{\n    /*overflow: auto;*/\n    top: 0;\n    left: 0;\n    position: fixed;\n    z-index: 999;\n}\n.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.mdl-badge[data-badge]::after{\n  font-size: .3em;\n  width: 2em;\n  height: 2em;\n}\n.mdl-badge[data-badge]::after {\n  top: -1em;\n  right: -1em;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-toolbar class=\"fixed-header\" color=\"primary\">\n        <mat-toolbar-row>\n            <a mat-button routerLink=\"/\"><mat-icon>home</mat-icon></a>\n            <button mat-button [matMenuTriggerFor]=\"menu\" >Menu</button>\n            <mat-menu #menu=\"matMenu\" yPosition=\"below\" xPosition=\"after\" overlapTrigger=\"false\">\n                <button mat-menu-item>Item 1</button>\n                <button mat-menu-item>Item 2</button>\n            </mat-menu>\n            \n            <span class=\"spacer\"></span>\n            <a mat-icon-button routerLink=\"/cart\"><mat-icon class=\"mdl-badge\" data-badge=\"6\">shopping_cart</mat-icon></a>\n            <!--<a mat-button routerLink=\"/signin\">Sign In</a>-->\n            <!--<a mat-button routerLink=\"/signup\">Sign Up</a>-->\n            <button mat-button (click)=\"openSignin()\">Sign In</button>\n            <button mat-button (click)=\"openSignup()\">Sign Up</button>\n            \n        </mat-toolbar-row> \n    </mat-toolbar>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__ = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
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
    function NavbarComponent(dialog) {
        this.dialog = dialog;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.openSignin = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__["a" /* SignInComponent */], {
            height: '45%',
            width: '40%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    NavbarComponent.prototype.openSignup = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__["a" /* SignUpComponent */], {
            height: '45%',
            width: '40%'
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n    background: lightblue;\n  }\n\n\n.page-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n\n.left-container{\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n}\n\n\n.right-container{\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n}\n\n\n.product-img {\n    max-width: 400px;\n}"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  \n      <div class=\"page-container\">\n          <div class=\"left-container\">\n              <img class=\"product-img\" src={{p.img}} alt=\"Product Image\">\n          </div>\n\n          <div class=\"right-container\">\n              <mat-card-title>{{p.name}}</mat-card-title>\n              ${{p.price}} &nbsp;&nbsp;&nbsp;\n              <span *ngIf=\"p.stock > 0\" class=\"in-stock\">In Stock</span>\n              <span *ngIf=\"p.stock == 0\" class=\"out-of-stock\">Out of Stock</span>\n              <p>{{p.desc}}</p>\n          </div>\n\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(httpClient, data) {
        this.httpClient = httpClient;
        this.data = data;
        this.p = {
            name: "",
            stock: 0,
            price: 0,
            img: "",
            desc: ""
        };
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        // will log the entire data object
        //console.log(this.data.PID);
        var _this = this;
        this.httpClient.get("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products/?id=" + this.data.PID)
            .subscribe(function (userInfo) {
            if (userInfo.length) {
                console.log(userInfo[0]);
                _this.p.name = userInfo[0].name;
                _this.p.stock = userInfo[0].stock;
                _this.p.price = userInfo[0].price;
                _this.p.img = userInfo[0].img;
                _this.p.desc = userInfo[0].desc;
            }
        });
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-detail',
            template: __webpack_require__("./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/product-detail/product-detail.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], Object])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.css":
/***/ (function(module, exports) {

module.exports = ".page-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.left-container{\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: 300px;\n    padding: 0 2em;\n}\n.left-header{\n    min-height: 64px;\n    padding: 8px 24px 0;\n}\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n}\n.right-container{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  \n  <div class=\"page-container\">\n    <div class=\"left-container\">\n      <h4>Shopping Cart</h4>\n\n      <div class=\"left-header\">\n        <mat-form-field>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n      </div>\n\n      <mat-table #table [dataSource]=\"ds\">\n\n        <!-- Product Column -->\n        <ng-container matColumnDef=\"product\">\n          <mat-header-cell  *matHeaderCellDef>Product</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> \n            {{element.product}} \n          </mat-cell>\n\n        </ng-container>\n    \n        <!-- Quantity Column -->\n        <ng-container matColumnDef=\"quantity\">\n          <mat-header-cell *matHeaderCellDef>Quantity</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" > \n            <button mat-icon-button color=\"primary\" (click)=\"reduceByOne(element.quantity)\">\n              <mat-icon>remove</mat-icon>\n            </button>\n            {{element.quantity}} \n            <button mat-icon-button color=\"primary\" (click)=\"increaseByOne(element.quantity)\">\n              <mat-icon>add</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n    \n        <!-- Price Column -->\n        <ng-container matColumnDef=\"price\">\n          <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> ${{element.price}} </mat-cell>\n        </ng-container>\n    \n        <!-- Total Price Column -->\n        <ng-container matColumnDef=\"total_price\">\n          <mat-header-cell *matHeaderCellDef> Total Price</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> ${{element.quantity * element.price}} </mat-cell>\n        </ng-container>\n    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div class=\"right-container\">\n      <h5>Subtotal ({{countItems()}} item<span *ngIf=\"countItems()>1\">s</span>):\n         ${{calcSubTotal()}}\n      </h5>\n      <button mat-raised-button color=\"accent\" routerLink=\"/checkout\">\n        Proceed to Checkout\n        <mat-icon>navigate_next</mat-icon>\n      </button>\n    </div>\n  </div>\n\n</div>\n\n  \n"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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
        this.displayedColumns = ['product', 'quantity', 'price', 'total_price'];
        this.ds = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatTableDataSource */](ELEMENT_DATA);
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
    };
    ShoppingcartComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.ds.filter = filterValue;
    };
    ShoppingcartComponent.prototype.reduceByOne = function (quantity) {
        //quantity--;
        console.log(quantity);
    };
    ShoppingcartComponent.prototype.increaseByOne = function (quantity) {
        //quantity++;
        console.log(quantity);
    };
    ShoppingcartComponent.prototype.calcSubTotal = function () {
        var subtotal = 0;
        for (var _i = 0, ELEMENT_DATA_1 = ELEMENT_DATA; _i < ELEMENT_DATA_1.length; _i++) {
            var e = ELEMENT_DATA_1[_i];
            subtotal += (e.price * e.quantity);
        }
        return subtotal;
    };
    ShoppingcartComponent.prototype.countItems = function () {
        var count = 0;
        for (var _i = 0, ELEMENT_DATA_2 = ELEMENT_DATA; _i < ELEMENT_DATA_2.length; _i++) {
            var e = ELEMENT_DATA_2[_i];
            count += e.quantity;
        }
        return count;
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

var ELEMENT_DATA = [
    { product: 'Game 2', quantity: 2, price: 12.99 },
    { product: 'Game 5', quantity: 1, price: 5.99 },
    { product: 'Game 6', quantity: 3, price: 10.12 }
];


/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n    \n.example-container > * {\n    width: 100%;\n}\n    \nmat-dialog-content{\n    display: inline\n}\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>  \n    <h2 mat-dialog-title>Please sign in</h2>\n    <form #signin=\"ngForm\" (ngSubmit)=\"onSubmit(signin.value)\">\n        <mat-form-field class=\"example-container\">\n            <input ngModel name=\"email\" matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n        <br>\n        <mat-form-field  class=\"example-container\">\n            <input matInput ngModel name=\"password\" placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required>\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        </mat-form-field>\n\n        <mat-dialog-actions>\n            <!--<button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\">Sign In</button>-->\n            <button mat-raised-button color=\"primary\" type=\"submit\">Sign In</button>\n            <button mat-button mat-dialog-close>Cancel</button>\n            <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n            \n        </mat-dialog-actions>\n    </form>\n</mat-dialog-content>\n\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
    function SignInComponent(httpClient) {
        this.httpClient = httpClient;
        this.hide = true;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.onSubmit = function (user) {
            var _this = this;
            this.httpClient.get("/get-users")
                .subscribe(function (data) {
                if (data.length) {
                    console.log(user.password);
                    _this.firstName = data[0].firstName;
                    _this.lasttName = data[0].lastName;
                    console.log(_this.firstName + _this.lastName);
                }
            });
        };
    }
    SignInComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports) {

module.exports = ".example-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n    \n.example-container > * {\n    width: 100%;\n}\n    \nmat-dialog-content{\n    display: inline\n}\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>  \n    <h2 mat-dialog-title>Register with us</h2>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n        <mat-form-field class=\"example-container\">\n            <input matInput ngModel name=\"email\" placeholder=\"Enter your email\" [formControl]=\"email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput ngModel name=\"firstName\" placeholder=\"FirstName\" required>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput ngModel name=\"lastName\" placeholder=\"LastName\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field  class=\"example-container\">\n            <input matInput ngModel name=\"password\" placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required>\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        </mat-form-field>\n\n        <mat-dialog-actions>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Register</button>\n            <button mat-button mat-dialog-close>Cancel</button>\n            <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n            \n        </mat-dialog-actions>\n    </form>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(httpClient) {
        this.httpClient = httpClient;
        this.hide = true;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
        //when click submit, do post
        this.onSubmit = function (user) {
            if (this.email.valid) {
                //hash logic may go here
                this.httpClient.post("/register-users", { email: "testing@gmail.com", first_name: "post", last_name: "hihi", password: "123456" })
                    .subscribe(function (res) { return console.log(res); });
            }
        };
    }
    //email validation function
    SignUpComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SignUpComponent);
    return SignUpComponent;
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