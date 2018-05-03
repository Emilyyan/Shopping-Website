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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__stock_alert_stock_alert_component__ = __webpack_require__("./src/app/stock-alert/stock-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__order_detail_order_detail_component__ = __webpack_require__("./src/app/order-detail/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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
                __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__order_detail_order_detail_component__["a" /* OrderDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__stock_alert_stock_alert_component__["a" /* StockAlertComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["h" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["g" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["s" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_router__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["g" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["q" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["o" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["g" /* MatDividerModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_11__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_14__order_detail_order_detail_component__["a" /* OrderDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__stock_alert_stock_alert_component__["a" /* StockAlertComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_checkout_component__ = __webpack_require__("./src/app/checkout/checkout.component.ts");






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
            //{ path: 'signin', component: SignInComponent},
            { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_3__shoppingcart_shoppingcart_component__["a" /* ShoppingcartComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_5__checkout_checkout_component__["a" /* CheckoutComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ".content{\n    width: 90%;\n    margin: 6em auto;\n}\n.upper{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n\n  <h4>Checkout</h4>\n\n  <form [formGroup]=\"formGroup\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <mat-horizontal-stepper #stepper=\"matHorizontalStepper\" formArrayName=\"formArray\" linear>\n      <mat-step formGroupName=\"0\" [stepControl]=\"formArray.get([0])\">\n        <h5>Shipping</h5>\n        <p>(required fields *)</p>\n        <ng-template matStepLabel>Shipping Info</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"First name\" formControlName=\"fname\" [(ngModel)]=\"fname\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Last name\" formControlName=\"lname\" [(ngModel)]=\"lname\" required>\n        </mat-form-field>\n        <br/>\n        <mat-form-field>\n          <input matInput placeholder=\"Address 1\" formControlName=\"addr1\" [(ngModel)]=\"addr1\" required>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput placeholder=\"Address 2\" formControlName=\"addr2\" [(ngModel)]=\"addr2\">\n          </mat-form-field>\n        <br/>\n        <mat-form-field>\n          <mat-select placeholder=\"Choose your state\" formControlName=\"state\" [(ngModel)]=\"selectedState\" required>\n            <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"City\" formControlName=\"city\" [(ngModel)]=\"city\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput #zipcode placeholder=\"Zip Code\" formControlName=\"zip\" maxlength=\"5\" [(ngModel)]=\"zip\" required>\n          <mat-hint align=\"end\">{{zipcode.value.length}} / 5</mat-hint>\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"tel\" matInput placeholder=\"Phone Number\" formControlName=\"phone\" maxlength=\"10\" [(ngModel)]=\"phone\" required>\n        </mat-form-field>\n        <div>\n          <button mat-button (click)=\"fillAddress()\" type=\"button\">Use saved address</button>\n          <button mat-button matStepperNext type=\"button\">Next</button>\n        </div>\n      </mat-step>\n      <mat-step formGroupName=\"1\" [stepControl]=\"formArray.get([1])\">\n        <h5>Payment</h5>\n        <ng-template matStepLabel>Payment Info</ng-template>\n        <p>* Sorry! We only accept payment via Paypal by this point.</p>\n        <mat-radio-group formControlName=\"payment\" required>\n          <mat-radio-button value=\"credit\" disabled=\"true\">Credit Card</mat-radio-button>\n          <mat-radio-button value=\"paypal\">Paypal</mat-radio-button>\n        </mat-radio-group>\n        <br><br>\n        <div>\n          <button mat-button matStepperPrevious type=\"button\">Back</button>\n          <button mat-button matStepperNext type=\"button\">Next</button>\n        </div>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Place Order</ng-template>\n        <h5>Review Your Order</h5>\n        <div class=\"reviewbox\">\n          <div class=\"upper\">\n              <div class=\"left\">\n                <b>Shipping Address: </b><br>       \n                {{fname}} {{lname}}<br>\n                {{addr1}}<br>\n                {{addr2}}<br>\n                {{phone}}<br>\n                {{city}}, {{selectedState}}, {{zip}}<br>\n              </div>\n              <div class=\"right\">\n                <b>Payment method: </b> PayPal\n              </div>\n          </div>\n          <div class=\"lower\">\n            <mat-table #table [dataSource]=\"dataSource\">\n              <!-- Name Column -->\n              <ng-container matColumnDef=\"name\">\n                <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n                </ng-container>\n              <!-- Quantity Column -->\n              <ng-container matColumnDef=\"quantity\">\n                <mat-header-cell *matHeaderCellDef> Quantity </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\">{{element.quantity}}</mat-cell>\n              </ng-container>\n              <!-- Price Column -->\n              <ng-container matColumnDef=\"price\">\n                <mat-header-cell *matHeaderCellDef> Unit Price </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\"> ${{element.price}} </mat-cell>\n              </ng-container>\n            \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n            <br>\n            <h5>Subtotal: $ {{subTotal}}</h5>\n          </div>    \n          <br>\n        </div>\n        <div>\n          <button mat-button (click)=\"stepper.reset()\">Clear form</button>\n          <button mat-button>Place your order</button>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </form>\n  \n\n</div>\n\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
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
    function CheckoutComponent(_formBuilder, httpClient) {
        this._formBuilder = _formBuilder;
        this.httpClient = httpClient;
        this.email = "sp@gmail.com"; //logged in user email account (session)
        // Initialize the Order object to be sent to server
        this.order = { products: this.cart, shipping: null, status: "processing" };
        this.products = [];
        this.productArray = [];
        this.subTotal = 0;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material_table__["a" /* MatTableDataSource */]();
        this.addr2 = "";
        this.displayedColumns = ['name', 'quantity', 'price'];
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
    Object.defineProperty(CheckoutComponent.prototype, "formArray", {
        /* Returns a FormArray with the name 'formArray' */
        get: function () {
            return this.formGroup.get('formArray');
        },
        enumerable: true,
        configurable: true
    });
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([
                this._formBuilder.group({
                    fname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
                    lname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
                    state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
                    city: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
                    addr1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
                    addr2: [''],
                    zip: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
                    phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]
                }),
                this._formBuilder.group({
                    payment: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]
                })
            ])
        });
        /* Get saved address for a user email account */
        this.httpClient.get("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users?email=" + this.email)
            .subscribe(function (data) {
            if (data.length) {
                _this.profile = data[0];
            }
        }, function (error) { return console.log("Error: ", error); }, function () { });
        /* Get cart items for a user email account
        this.httpClient.get(`https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart?email=${this.email}`)
        .subscribe(
          (data: any[]) => {
            if(data.length) {
              // add cart items to the order
              this.order.products = data[0].items;
              this.cart = data[0].items;
            }
          }
        );*/
        this.getCart(this.email).then(function (_) {
            return _this.getProducts();
        }).then(function (_) {
            for (var _i = 0, _a = _this.cart; _i < _a.length; _i++) {
                var p = _a[_i];
                var obj = _this.getProductDetail(p.pid);
                var citem = { pid: p.pid, quantity: p.quantity, name: obj.name, price: obj.price };
                _this.productArray.push(citem);
                _this.subTotal += citem.quantity * citem.price;
            }
            _this.dataSource.data = _this.productArray;
        });
    };
    /*
      Make a GET request to retrieve all cart items of a user from server
      Given the user email, would return a promise.
    */
    CheckoutComponent.prototype.getCart = function (email) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = "https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart?email=" + email;
            _this.httpClient.get(apiURL)
                .toPromise()
                .then(function (data) {
                if (data.length) {
                    // add cart items to the order
                    _this.order.products = data[0].items;
                    _this.cart = data[0].items;
                }
                resolve();
            }, function (err) {
                reject();
            });
        });
        return promise;
    };
    /*
      Make a GET request to retrieve a list of products from server
      Would return a promise.
    */
    CheckoutComponent.prototype.getProducts = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = "https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products";
            _this.httpClient.get(apiURL)
                .toPromise()
                .then(function (data) {
                _this.products = data;
                resolve();
            }, function (err) {
                reject();
            });
        });
        return promise;
    };
    /**
     * Given the product id,
     * Would return an object containing all details for that product
     */
    CheckoutComponent.prototype.getProductDetail = function (pid) {
        var index = this.products.findIndex(function (x) { return x.id === pid; });
        return this.products[index];
    };
    CheckoutComponent.prototype.onSubmit = function (f) {
        // validate the form on submission
        if (f.invalid === false) {
            var formAddress = { addr_1: this.addr1, addr_2: this.addr2, state: this.selectedState, city: this.city, zip: this.zip, phone: this.phone };
            // generate an order
            this.order.shipping = formAddress;
            console.log(this.order);
            this.httpClient.post("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Orders", this.order)
                .subscribe(function (res) { }, function (error) { return console.log(error); }, function () { });
        }
    };
    CheckoutComponent.prototype.fillAddress = function () {
        this.fname = this.profile.firstName;
        this.lname = this.profile.lastName;
        this.addr1 = this.profile.address.addr_1;
        this.addr2 = this.profile.address.addr_2;
        this.selectedState = this.profile.address.state;
        this.city = this.profile.address.city;
        this.zip = this.profile.address.zip;
        this.phone = this.profile.address.phone;
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ".demo-tab-group {\n    border: 1px solid #e8e8e8;\n  }\n  \n.demo-tab-content {\n    padding: 16px;\n}\n  \n.outline{\n    width: 70%;\n    margin-left: auto; \n    margin-right: auto;\n}\n  \n.half-width{\n    width:60%;\n}\n  \n.row{\n    padding : 1em;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center;\">\n  <div class=\"content\">\n    <mat-card class=\"outline\">\n        <mat-card-content>\n          <h2 class=\"example-h2\">Hi</h2>\n          <mat-tab-group class=\"demo-tab-group\">\n            <mat-tab label=\"Account Information\">\n              <div class=\"demo-tab-content\"  style=\"width:80%\">          \n                <form [formGroup]=\"formGroup2\" #f=\"ngForm\" (ngSubmit)=\"update(f.value)\"> \n                  <mat-list>\n                    <mat-list-item class=\"row\">\n                          <mat-form-field class=\"half-width\">\n                            <input matInput formControlName=\"firstName\" placeholder=\"First Name\" [(ngModel)]=\"user.firstName\" required>\n                          </mat-form-field>\n                    </mat-list-item>\n                    <mat-list-item class=\"row\">\n                          <mat-form-field class=\"half-width\">\n                            <input matInput formControlName=\"lastName\" placeholder=\"Last Name\" [(ngModel)]=\"user.lastName\" required>\n                          </mat-form-field>\n                    </mat-list-item>\n                    <mat-list-item class=\"row\">\n                            <mat-form-field class=\"half-width\">\n                              <input matInput name=\"email\" placeholder=\"Email\" value={{user.email}} disabled>\n                            </mat-form-field>\n                    </mat-list-item>\n                  </mat-list>\n                  <div>\n                      <button mat-raised-button color=\"primary\" type=\"submit\">Update</button>\n                  </div>\n                </form>\n              </div>\n            </mat-tab>\n\n            <mat-tab label=\"Order History\">\n              <div class=\"demo-tab-content\">\n                  <div class=\"example-container mat-elevation-z8\">\n                      <mat-table #table [dataSource]=\"dataSource\">\n                        <ng-container matColumnDef=\"date\">\n                          <mat-header-cell *matHeaderCellDef> Order Date </mat-header-cell>\n                          <mat-cell *matCellDef=\"let element\"> {{element.date}} </mat-cell>\n                         </ng-container>\n                        <!-- Position Column -->\n                        <ng-container matColumnDef=\"number\">\n                          <mat-header-cell *matHeaderCellDef> Order Number </mat-header-cell>\n                          <mat-cell *matCellDef=\"let element\">{{element.orderNumber}}</mat-cell>\n                        </ng-container>\n                    \n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"status\">\n                          <mat-header-cell *matHeaderCellDef> Status </mat-header-cell>\n                          <mat-cell *matCellDef=\"let element\"> {{element.status}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Symbol Column -->\n                        <ng-container matColumnDef=\"detail\">\n                          <mat-header-cell *matHeaderCellDef> Detail </mat-header-cell>\n                          <mat-cell *matCellDef=\"let element\">\n                            <button mat-button color=\"primary\" (click)=\"viewDetail(element.orderNumber)\">View Details\n                            </button>\n                          </mat-cell>\n                        </ng-container>\n                    \n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                      </mat-table>\n                    \n                      <mat-paginator #paginator\n                                     [pageSize]=\"5\"\n                                     [pageSizeOptions]=\"[5, 10, 20]\"\n                                     [showFirstLastButtons]=\"true\">\n                      </mat-paginator>\n                    </div>\n              </div>  \n            </mat-tab>\n\n\n            <mat-tab label=\"Saved Address\">\n                <div class=\"demo-tab-content\"  style=\"width:80%\">          \n                    <form [formGroup]=\"formGroup1\" #f2=\"ngForm\" (ngSubmit)=\"updateAddress(f2.value)\"> \n                      <mat-list>\n                        <mat-list-item class=\"row\">\n                              <mat-form-field class=\"half-width\">\n                                <input matInput formControlName=\"address1\" placeholder=\"Address 1\" [(ngModel)] = \"localAddress.addr_1\" required>\n                              </mat-form-field>\n                        </mat-list-item>\n                        <mat-list-item class=\"row\">\n                                <mat-form-field class=\"half-width\">\n                                  <input matInput name=\"address2\" placeholder=\"Address 2\" value=\"{{localAddress.addr_2}}\">\n                                </mat-form-field>\n                        </mat-list-item>\n                        <mat-list-item class=\"row\">\n                            <mat-form-field>\n                                <mat-select placeholder=\"Choose your state\" formControlName=\"state\" [(ngModel)]=\"selectedState\" required>\n                                  <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n                                </mat-select>\n                              </mat-form-field>\n                        </mat-list-item>\n                        <mat-list-item class=\"row\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"City\" formControlName=\"city\" [(ngModel)]=\"localAddress.city\" required>\n                          </mat-form-field>\n                        </mat-list-item>\n                        <mat-list-item class=\"row\">\n                          <mat-form-field>\n                            <input matInput #zipcode placeholder=\"Zip Code\" formControlName=\"zip\" [(ngModel)]=\"localAddress.zip\" maxlength=\"5\" required>\n                            <mat-hint align=\"end\">{{zipcode.value.length}} / 5</mat-hint>\n                          </mat-form-field>\n                        </mat-list-item>\n                        <mat-list-item class=\"row\">\n                          <mat-form-field>\n                            <input type=\"tel\" matInput placeholder=\"Phone Number\" formControlName=\"phone\" [(ngModel)]=\"localAddress.phone\" maxlength=\"10\" required>\n                          </mat-form-field>\n                        </mat-list-item>\n                      </mat-list>\n                      <div>\n                          <button mat-raised-button color=\"primary\" type=\"submit\">Update</button>\n                      </div>\n                    </form>\n                  </div>\n            </mat-tab>\n          </mat-tab-group>\n        </mat-card-content>\n      </mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_detail_order_detail_component__ = __webpack_require__("./src/app/order-detail/order-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(httpClient, _formBuilder, dialog) {
        this.httpClient = httpClient;
        this._formBuilder = _formBuilder;
        this.dialog = dialog;
        this.user = [];
        this.selectedState = "";
        this.localAddress = [];
        this.displayedColumns = ['date', 'number', 'status', 'detail'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material_table__["a" /* MatTableDataSource */]();
        //update user info tab
        this.update = function (userinfo) {
            if (this.formGroup2.valid) {
                //below link if only for testing front end logic
                this.httpClient.post("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users", { email: userinfo.email, first_name: userinfo.firstName, last_name: userinfo.lastName })
                    .subscribe(function (res) { return console.log(res); });
            }
        };
        //update saved address info tab
        this.updateAddress = function (changedAddress) {
            //below link if only for testing front end logic
            if (this.formGroup1.valid) {
                this.httpClient.post("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users", { changedAddress: changedAddress })
                    .subscribe(function (res) { return console.log(res); });
            }
        };
        this.viewDetail = function (order_number) {
            console.log(order_number);
            var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__order_detail_order_detail_component__["a" /* OrderDetailComponent */], {
                width: '60%',
                data: {
                    order_number: order_number
                }
            });
        };
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
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup1 = this._formBuilder.group({
            state: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required],
            address1: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required],
            zip: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required],
            phone: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]
        });
        this.formGroup2 = this._formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]
        });
        //id should be replaced by the return value from server side
        //get user info for info and address tabs
        this.httpClient.get("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users?id=1")
            .subscribe(function (data) {
            if (data.length) {
                console.log(data[0]);
                _this.user = data[0];
                _this.localAddress = data[0].address;
                _this.selectedState = data[0].address.state;
            }
        }, function (error) { return console.log("Error", error); });
        //order history should be returned from server side after authentication
        //get order info for order history tab
        this.httpClient.get("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Orders")
            .subscribe(function (data) {
            if (data.length) {
                _this.dataSource.data = data;
                //console.log(this.dataSource.data);
            }
        }, function (error) { return console.log("Error", error); });
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatPaginator */])
    ], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".parent-container{\n    max-width: 90%;\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n.example-card {\n    max-width: 250px;\n    min-width: 200px;\n    -ms-flex-preferred-size: 30%;\n        flex-basis: 30%;\n    margin-bottom: 2em;\n}\n.in-stock{\n    color: #2e7b32;\n}\n.out-of-stock{\n    color: #d32f2f;\n}\n.game-img{\n    width: 60%;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--the Homepage component template, written in HTML.-->\n<div style=\"text-align:center\">\n  <div class=\"content\">\n    <span class=\"spacer\"></span>\n    <mat-form-field>\n      <input matInput placeholder=\"Search Items here ...\">\n    </mat-form-field>\n    <button mat-icon-button color=\"primary\"><mat-icon>search</mat-icon></button>\n\n    <div class=\"parent-container\">\n      <mat-card class=\"example-card\" *ngFor=\"let p of products\">\n        <img mat-card-image src={{p.img}} class=\"game-img\" alt=\"Product Image\">\n        <mat-card-content>\n          <mat-card-title>{{p.name}}</mat-card-title>\n          <mat-card-subtitle>\n            ${{p.price}} &nbsp;&nbsp;&nbsp;&nbsp;\n            <span *ngIf=\"p.stock > 0\" class=\"in-stock\">In Stock</span>\n            <span *ngIf=\"p.stock == 0\" class=\"out-of-stock\">Out of Stock</span>\n          </mat-card-subtitle>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button color=\"primary\" (click)=\"openDetail(p.id)\">Details\n            <mat-icon>open_in_new</mat-icon>\n          </button>\n          <button mat-button color=\"accent\" (click)=\"addToCart(p.id)\">Add to Cart\n            <mat-icon>add_shopping_cart</mat-icon>\n          </button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_detail_product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stock_alert_stock_alert_component__ = __webpack_require__("./src/app/stock-alert/stock-alert.component.ts");
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
        this.email = "sp@gmail.com"; //user email (session)
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products")
            .subscribe(function (data) {
            if (data.length) {
                //console.log(data);
                _this.products = data;
            }
        });
        this.httpClient.get("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart?email=" + this.email, { observe: 'response' })
            .subscribe(function (data) {
            console.log(data.status);
            //if(data.body[0].length) {
            _this.cart = data.body[0].items;
            //console.log(data.body[0]);
            //console.log(this.cart);
            //}
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
    /**
     * Get stock of a product with pid
     * return true if the quantity doesn't exceed stock
     */
    HomeComponent.prototype.validQuantity = function (PID, quantity) {
        var s = this.products.find(function (x) { return x.id === PID; }).stock;
        if (s < quantity) {
            this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__stock_alert_stock_alert_component__["a" /* StockAlertComponent */], { width: '40%' });
            return false;
        }
        return true;
    };
    /**
     * Add product to cart and send POST request
     */
    HomeComponent.prototype.addToCart = function (PID) {
        //find quantity of product with pid
        //console.log(this.cart);
        var idx = this.cart.findIndex(function (x) { return x.pid === PID; });
        //if that item wasn't in cart => check stock, then add to cart with quantity 1  
        if (idx >= 0) {
            if (!this.validQuantity(PID, this.cart[idx].quantity + 1))
                return;
            this.cart[idx].quantity += 1;
        } //else => check stock, then increase quantity by 1
        else {
            if (!this.validQuantity(PID, 1))
                return;
            this.cart.push({ pid: PID, quantity: 1 });
        }
        this.httpClient.post("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart", { email: this.email, items: this.cart })
            .subscribe(function (data) { return console.log(data); });
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



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".fixed-header{\n    /*overflow: auto;*/\n    top: 0;\n    left: 0;\n    position: fixed;\n    z-index: 999;\n}\n.spacer {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n}\n.mdl-badge[data-badge]::after{\n  font-size: .3em;\n  width: 2em;\n  height: 2em;\n}\n.mdl-badge[data-badge]::after {\n  top: -1em;\n  right: -1em;\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <mat-toolbar class=\"fixed-header\" color=\"primary\">\n        <mat-toolbar-row>\n            <a mat-button routerLink=\"/\"><mat-icon>home</mat-icon></a>\n            <span class=\"spacer\"></span>\n            <a mat-icon-button routerLink=\"/cart\"><mat-icon>shopping_cart</mat-icon></a>\n            <!-- *ngIf=\"statusCode != 200\" -->\n            <span >\n                <button mat-button (click)=\"openSignin()\">Sign In</button>\n                <button mat-button (click)=\"openSignup()\">Sign Up</button>\n            </span>\n            <span *ngIf=\"statusCode === 200\">\n                <a mat-icon-button routerLink=\"/dashboard\"><mat-icon>account_box</mat-icon></a>\n            </span> \n        </mat-toolbar-row> \n    </mat-toolbar>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up_component__ = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
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
    function NavbarComponent(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.email = "sp@gmail.com";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //retrieve status code to decide if the user has logged in
        this.httpClient.get("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Users?email=" + this.email, { observe: 'response' })
            .subscribe(function (data) {
            //console.log(data.status);
            _this.statusCode = data.status;
        });
    };
    NavbarComponent.prototype.openSignin = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in_component__["a" /* SignInComponent */], {
            height: '45%',
            width: '40%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    NavbarComponent.prototype.openSignup = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up_component__["a" /* SignUpComponent */], {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order-detail/order-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\n    padding-top: 1em;\n}\n\n.thick{\n    font-weight: bold;\n}\n\n.page-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.left-container{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n\n.right-container{\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h5>ORDER DETAILS</h5>\n<mat-divider></mat-divider>\n\n<div class=\"page-container\">\n  <div class=\"left-container\">\n    <div class=\"row\">\n      <span class=\"thick\" >Order Number:</span>\n      <span >{{data?.order_number}}</span>\n    </div>\n\n    <div class=\"row\">\n      <span class=\"thick\" >Status:</span>\n      <span >{{order?.status}}</span>\n    </div>\n  </div>\n\n  <div class=\"right-container\">\n    <div class=\"row\">\n      <span class=\"thick\" >Shipping Address:</span>\n    </div>\n    <div>\n      {{order?.shipping.addr_1}}<br>\n      {{order?.shipping.addr_2}}<br>\n      {{order?.shipping.city}}, {{order?.shipping.state}}, {{order?.shipping.zip}}<br>\n      {{order?.shipping.phone}}<br>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <span class=\"thick\" >Purchased Items:</span>\n</div>\n\n<mat-table #table [dataSource]=\"dataSource\">\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n  <!-- Quantity Column -->\n  <ng-container matColumnDef=\"quantity\">\n    <mat-header-cell *matHeaderCellDef> Quantity </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.quantity}}</mat-cell>\n  </ng-container>\n  <!-- Price Column -->\n  <ng-container matColumnDef=\"price\">\n    <mat-header-cell *matHeaderCellDef> Unit Price </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> ${{element.price}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n<br>\n<b>Subtotal: </b>$ {{subTotal}}\n"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
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




var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(httpClient, data) {
        this.httpClient = httpClient;
        this.data = data;
        this.products = [];
        this.productArray = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material_table__["a" /* MatTableDataSource */]();
        this.subTotal = 0;
        this.displayedColumns = ['name', 'quantity', 'price'];
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getOrder(this.data.order_number)
            .then(function (data) {
            _this.order = data[0];
            return _this.getProducts();
        })
            .then(function (_) {
            for (var _i = 0, _a = _this.order.products; _i < _a.length; _i++) {
                var p = _a[_i];
                var obj = _this.getProductDetail(p.pid);
                var orderitem = { pid: p.pid, quantity: p.quantity, name: obj.name, price: obj.price };
                _this.productArray.push(orderitem);
                _this.subTotal += orderitem.quantity * orderitem.price;
            }
            _this.dataSource.data = _this.productArray;
        });
    };
    /*
      Make a GET request to retrieve an order from server
      Given the order number, would return a promise.
    */
    OrderDetailComponent.prototype.getOrder = function (orderNumber) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = "https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Orders?orderNumber=" + orderNumber;
            _this.httpClient.get(apiURL)
                .toPromise()
                .then(function (data) {
                resolve(data);
            }, function (err) {
                reject();
            });
        });
        return promise;
    };
    /*
      Make a GET request to retrieve a list of products from server
      Would return a promise.
    */
    OrderDetailComponent.prototype.getProducts = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = "https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products";
            _this.httpClient.get(apiURL)
                .toPromise()
                .then(function (data) {
                _this.products = data;
                resolve();
            }, function (err) {
                reject();
            });
        });
        return promise;
    };
    /**
     * Given the product id,
     * Would return an object containing all details for that product
     */
    OrderDetailComponent.prototype.getProductDetail = function (pid) {
        var index = this.products.findIndex(function (x) { return x.id === pid; });
        return this.products[index];
    };
    OrderDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-order-detail',
            template: __webpack_require__("./src/app/order-detail/order-detail.component.html"),
            styles: [__webpack_require__("./src/app/order-detail/order-detail.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], Object])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n    background: lightblue;\n  }\n\n\n.page-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n\n.left-container{\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n}\n\n\n.right-container{\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n}\n\n\n.product-img {\n    max-width: 400px;\n}\n\n\n.in-stock{\n    color: #2e7b32;\n}\n\n\n.out-of-stock{\n    color: #d32f2f;\n}\n\n\n.descriptions{\n    text-align: start;\n}"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  \n      <div class=\"page-container\">\n          <div class=\"left-container\">\n              <img class=\"product-img\" src={{product?.img}} alt=\"Product Image\">\n          </div>\n\n          <div class=\"right-container\">\n              <mat-card-title>{{product?.name}}</mat-card-title>\n              ${{product?.price}} &nbsp;&nbsp;&nbsp;\n              <span *ngIf=\"product?.stock > 0\" class=\"in-stock\">In Stock</span>\n              <span *ngIf=\"product?.stock == 0\" class=\"out-of-stock\">Out of Stock</span>\n              <br><br>\n              <p class=\"descriptions\">{{product?.desc}}</p>\n          </div>\n      </div>\n  </div>\n"

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
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClient.get("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products/?id=" + this.data.PID)
            .subscribe(function (productInfo) {
            if (productInfo.length) {
                _this.product = productInfo[0];
                console.log(_this.product.name);
            }
        }),
            function (error) { return console.log("Error", error); };
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

module.exports = "<div class=\"content\">\n  \n  <div class=\"page-container\">\n    <div class=\"left-container\">\n      <h4>Shopping Cart</h4>\n\n      <mat-table #table [dataSource]=\"cartitems\">\n\n        <!-- Product Column -->\n        <ng-container matColumnDef=\"product\">\n          <mat-header-cell  *matHeaderCellDef>Product</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> \n            {{element.name}} \n          </mat-cell>\n\n        </ng-container>\n    \n        <!-- Quantity Column -->\n        <ng-container matColumnDef=\"quantity\">\n          <mat-header-cell *matHeaderCellDef>Quantity</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\" > \n            <button mat-icon-button color=\"primary\" (click)=\"element.quantity = element.quantity - 1\">\n              <mat-icon>remove</mat-icon>\n            </button>\n            {{element.quantity}} \n            <button mat-icon-button color=\"primary\" (click)=\"element.quantity = element.quantity + 1\">\n              <mat-icon>add</mat-icon>\n            </button>\n            ({{element.stock}} left)\n          </mat-cell>\n        </ng-container>\n    \n        <!-- Price Column -->\n        <ng-container matColumnDef=\"price\">\n          <mat-header-cell *matHeaderCellDef> Price </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> ${{element.price}} </mat-cell>\n        </ng-container>\n    \n        <!-- Total Price Column -->\n        <ng-container matColumnDef=\"total_price\">\n          <mat-header-cell *matHeaderCellDef> Total Price</mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> ${{element.quantity * element.price | number: '1.2-2'}} </mat-cell>\n        </ng-container>\n    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div class=\"right-container\">\n      <h5>\n        Subtotal ({{itemsCnt}} item<span *ngIf=\"itemsCnt>1\">s</span>): ${{subTotal | number: '1.2-2'}}\n      </h5>\n      <button mat-raised-button (click)=\"updateCart()\">\n        Update Cart\n      </button>\n      <button mat-raised-button color=\"accent\" routerLink=\"/checkout\">\n        Proceed to Checkout\n        <mat-icon>navigate_next</mat-icon>\n      </button>\n      \n    </div>\n  </div>\n\n</div>\n\n  \n"

/***/ }),

/***/ "./src/app/shoppingcart/shoppingcart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingcartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stock_alert_stock_alert_component__ = __webpack_require__("./src/app/stock-alert/stock-alert.component.ts");
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
    function ShoppingcartComponent(httpClient, dialog) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.subTotal = 0;
        this.itemsCnt = 0;
        this.displayedColumns = ['product', 'quantity', 'price', 'total_price'];
    }
    ShoppingcartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // example user email: sp@gmail.com
        this.getCart("sp@gmail.com")
            .then(function (data) {
            var promises = []; //create a list of promises
            _this.cartitems = data[0].items;
            for (var _i = 0, _a = _this.cartitems; _i < _a.length; _i++) {
                var item = _a[_i];
                promises.push(_this.getProduct(item));
            }
            //do calculations only after all promises in the list are resolved
            Promise.all(promises).then(function (_) {
                _this.calcSubTotal(_this.cartitems);
                _this.countItems(_this.cartitems);
            });
        })
            .catch(function (err) { return console.log("Error: " + err); });
    };
    /*
      Make a GET request to retrieve cart items from server
      Given the user email, would return a promise.
    */
    ShoppingcartComponent.prototype.getCart = function (email) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = "https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart?email=" + email;
            _this.httpClient.get(apiURL)
                .toPromise()
                .then(function (data) {
                resolve(data);
            }, function (err) {
                reject();
            });
        });
        return promise;
    };
    /*
      Make a GET request to retrieve product information from server
      Given the pid, would return a promise.
    */
    ShoppingcartComponent.prototype.getProduct = function (item) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = "https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Products?id=" + item.pid;
            _this.httpClient.get(apiURL)
                .toPromise()
                .then(function (data) {
                item.name = data[0].name;
                item.price = data[0].price;
                item.stock = data[0].stock;
                resolve(data);
            }, function (err) {
                reject();
            });
        });
        return promise;
    };
    /*
      Make a POST request to send updated cart items to server
    */
    ShoppingcartComponent.prototype.updateCart = function () {
        var _this = this;
        if (this.isValid(this.cartitems)) {
            this.httpClient.post("https://my-json-server.typicode.com/Emilyyan/Shopping-Website/Cart", this.cartitems)
                .subscribe(function (res) { return console.log(res); }, function (error) { return console.log(error); }, function () {
                _this.calcSubTotal(_this.cartitems);
                _this.countItems(_this.cartitems);
            });
        }
    };
    /*
      Check if the quantity selected is below stock
     */
    ShoppingcartComponent.prototype.isValid = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.quantity > item.stock) {
                this.openAlert();
                return false;
            }
        }
        return true;
    };
    /**
     * Open dialog for stock alert
     */
    ShoppingcartComponent.prototype.openAlert = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__stock_alert_stock_alert_component__["a" /* StockAlertComponent */], {
            width: '40%'
        });
    };
    /*
      Calculate Subtotal in cart
     */
    ShoppingcartComponent.prototype.calcSubTotal = function (items) {
        var s = 0;
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            s += (item.price * item.quantity);
        }
        this.subTotal = s;
    };
    /*
      Count items in cart
     */
    ShoppingcartComponent.prototype.countItems = function (items) {
        var count = 0;
        for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
            var item = items_3[_i];
            count += item.quantity;
        }
        this.itemsCnt = count;
    };
    ShoppingcartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shoppingcart',
            template: __webpack_require__("./src/app/shoppingcart/shoppingcart.component.html"),
            styles: [__webpack_require__("./src/app/shoppingcart/shoppingcart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]])
    ], ShoppingcartComponent);
    return ShoppingcartComponent;
}());



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
            this.httpClient.post("/login-users", { email: this.email.value, password: user.password })
                .subscribe(function (data) {
                if (data.length) {
                    _this.firstName = data[0].first_name;
                    _this.lastName = data[0].last_name;
                    console.log(_this.first_name + " " + _this.last_name);
                }
                /*
                if(data.length) {
                  this.firstName = data[0].first_name;
                  this.lastName = data[0].last_name;
                  console.log(this.first_name + " " + this.last_name);
                }
                  console.log(user.password);
                  this.firstName = data[0].firstName;
                  this.lasttName = data[0].lastName;
                  console.log(this.firstName+this.lastName);
                }*/
                //this.firstName = data.body[0].firstName;
                //this.lasttName = data.body[0].lastName;
                //response code
                //console.log(data.status);
            }),
                function (error) { return console.log(error); };
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

module.exports = "<mat-dialog-content>  \n    <h2 mat-dialog-title>Register with us</h2>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\">\n        <mat-form-field class=\"example-container\">\n            <input matInput ngModel name=\"email\" placeholder=\"Enter your email\" [formControl]=\"email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput ngModel name=\"firstName\" placeholder=\"FirstName\" required>\n        </mat-form-field>\n        <mat-form-field>\n            <input matInput ngModel name=\"lastName\" placeholder=\"LastName\" required>\n        </mat-form-field>\n        <br>\n        <mat-form-field  class=\"example-container\">\n            <input matInput ngModel name=\"password\" placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" required>\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        </mat-form-field>\n\n        <mat-dialog-actions>\n             <button mat-raised-button color=\"primary\" type=\"submit\">Register</button>\n             <button mat-button mat-dialog-close>Cancel</button>\n            <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n            \n        </mat-dialog-actions>\n    </form>\n</mat-dialog-content>\n"

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
            console.log(user);
            if (this.email.valid) {
                console.log(user.lastName);
                console.log(this.email.value);
                //hash logic may go here
                this.httpClient.post("/register-users", { email: this.email.value, first_name: user.firstName, last_name: user.lastName, password: user.password })
                    .subscribe(function (res) { return console.log(res); });
            }
            else
                console.log("fail");
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

/***/ "./src/app/stock-alert/stock-alert.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stock-alert/stock-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Failed to update cart</h2>\n<mat-dialog-content>\n  The selected product quantity exceeds stock! Please try again.\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Ok</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/stock-alert/stock-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockAlertComponent; });
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * Dialog component for stock alert
 * Dialog will show up if stock validation failed
 */
var StockAlertComponent = /** @class */ (function () {
    function StockAlertComponent(data) {
        this.data = data;
    }
    StockAlertComponent.prototype.ngOnInit = function () {
    };
    StockAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'stock-alert',
            template: __webpack_require__("./src/app/stock-alert/stock-alert.component.html"),
            styles: [__webpack_require__("./src/app/stock-alert/stock-alert.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], StockAlertComponent);
    return StockAlertComponent;
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