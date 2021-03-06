"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 5298);
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layout.component */ 2140);
/* harmony import */ var _extrapages_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extrapages/page404/page404.component */ 5132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






const routes = [
    { path: 'account', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 7942)).then(m => m.AccountModule) },
    // tslint:disable-next-line: max-line-length
    { path: '', component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 2302)).then(m => m.PagesModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'pages', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./extrapages/extrapages.module */ 7358)).then(m => m.ExtrapagesModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: '**', component: _extrapages_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _strategy_strategy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strategy/strategy.component */ 9833);


class AppComponent {
    ngOnInit() {
        // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-strategy");
    } }, directives: [_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_0__.StrategyComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 8260);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4070);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7034);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 8974);
/* harmony import */ var _extrapages_extrapages_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extrapages/extrapages.module */ 7358);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/layouts.module */ 1472);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authUtils */ 2004);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8017);
/* harmony import */ var _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/helpers/error.interceptor */ 331);
/* harmony import */ var _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/helpers/jwt.interceptor */ 5189);
/* harmony import */ var _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/helpers/fake-backend */ 4095);
/* harmony import */ var _strategy_strategy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./strategy/strategy.component */ 9833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);





















if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
    (0,_authUtils__WEBPACK_IMPORTED_MODULE_5__.initFirebaseBackend)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig);
}
else {
    // tslint:disable-next-line: no-unused-expression
    _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_8__.FakeBackendInterceptor;
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS, useClass: _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS, useClass: _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_6__.ErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS, useClass: _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_8__.FakeBackendInterceptor, multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
                }
            }),
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _extrapages_extrapages_module__WEBPACK_IMPORTED_MODULE_1__.ExtrapagesModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTooltipModule,
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_18__.ScrollToModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        _strategy_strategy_component__WEBPACK_IMPORTED_MODULE_9__.StrategyComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _extrapages_extrapages_module__WEBPACK_IMPORTED_MODULE_1__.ExtrapagesModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTooltipModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_18__.ScrollToModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModule] }); })();


/***/ }),

/***/ 2004:
/*!******************************!*\
  !*** ./src/app/authUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFirebaseBackend": () => (/* binding */ initFirebaseBackend),
/* harmony export */   "getFirebaseBackend": () => (/* binding */ getFirebaseBackend)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 6559);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 9095);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 4401);

// Add the Firebase products that you want to use


class FirebaseAuthBackend {
    constructor(firebaseConfig) {
        /**
         * Registers the user with given details
         */
        this.registerUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then((user) => {
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Login user with given details
         */
        this.loginUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, password).then((user) => {
                    // eslint-disable-next-line no-redeclare
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * forget Password user with given details
         */
        this.forgetPassword = (email) => {
            return new Promise((resolve, reject) => {
                // tslint:disable-next-line: max-line-length
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().sendPasswordResetEmail(email, { url: window.location.protocol + '//' + window.location.host + '/login' }).then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Logout the user
         */
        this.logout = () => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signOut().then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        this.setLoggeedInUser = (user) => {
            sessionStorage.setItem('authUser', JSON.stringify(user));
        };
        /**
         * Returns the authenticated user
         */
        this.getAuthenticatedUser = () => {
            if (!sessionStorage.getItem('authUser')) {
                return null;
            }
            return JSON.parse(sessionStorage.getItem('authUser'));
        };
        if (firebaseConfig) {
            // Initialize Firebase
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged((user) => {
                if (user) {
                    sessionStorage.setItem('authUser', JSON.stringify(user));
                }
                else {
                    sessionStorage.removeItem('authUser');
                }
            });
        }
    }
    /**
     * Handle the error
     * @param {*} error
     */
    _handleError(error) {
        // tslint:disable-next-line: prefer-const
        var errorMessage = error.message;
        return errorMessage;
    }
}
// tslint:disable-next-line: variable-name
let _fireBaseBackend = null;
/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config) => {
    if (!_fireBaseBackend) {
        _fireBaseBackend = new FirebaseAuthBackend(config);
    }
    return _fireBaseBackend;
};
/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
    return _fireBaseBackend;
};



/***/ }),

/***/ 5298:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7686);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authfake.service */ 2464);





class AuthGuard {
    constructor(router, authenticationService, authFackservice) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authFackservice = authFackservice;
    }
    canActivate(route, state) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser) {
                // logged in so return true
                return true;
            }
        }
        else {
            const currentUser = this.authFackservice.currentUserValue;
            if (currentUser) {
                // logged in so return true
                return true;
            }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService)); };
AuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ 331:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7686);




class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.??fac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
ErrorInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.??fac });


/***/ }),

/***/ 4095:
/*!**********************************************!*\
  !*** ./src/app/core/helpers/fake-backend.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": () => (/* binding */ FakeBackendInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 758);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8068);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);




class FakeBackendInterceptor {
    constructor() { }
    intercept(request, next) {
        // array in local storage for registered users
        // tslint:disable-next-line: max-line-length
        const users = JSON.parse(localStorage.getItem('users')) || [{ username: 'admin', email: 'admin@themesbrand.com', password: '123456' }];
        // wrap in delayed observable to simulate server api call
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                const filteredUsers = users.filter(user => {
                    return user.email === request.body.email && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const user = filteredUsers[0];
                    const body = {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body }));
                }
                else {
                    // else return 400 bad request
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    // tslint:disable-next-line: no-shadowed-variable
                    const matchedUsers = users.filter(user => user.id === id);
                    const user = matchedUsers.length ? matchedUsers[0] : null;
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                const newUser = request.body;
                // validation
                const duplicateUser = users.filter(user => user.username === newUser.username).length;
                if (duplicateUser) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }
                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // tslint:disable-next-line: max-line-length
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.materialize)())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(500))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.dematerialize)());
    }
}
FakeBackendInterceptor.??fac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.??fac });


/***/ }),

/***/ 5189:
/*!*************************************************!*\
  !*** ./src/app/core/helpers/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7686);
/* harmony import */ var _services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authfake.service */ 2464);




class JwtInterceptor {
    constructor(authenticationService, authfackservice) {
        this.authenticationService = authenticationService;
        this.authfackservice = authfackservice;
    }
    intercept(request, next) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
            const currentUser = this.authenticationService.currentUser();
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        }
        else {
            // add authorization header with jwt token if available
            const currentUser = this.authfackservice.currentUserValue;
            if (currentUser && currentUser.token) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.token}`
                    }
                });
            }
        }
        return next.handle(request);
    }
}
JwtInterceptor.??fac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService)); };
JwtInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.??fac });


/***/ }),

/***/ 7686:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authUtils */ 2004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class AuthenticationService {
    constructor() {
    }
    /**
     * Returns the current user
     */
    currentUser() {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().getAuthenticatedUser();
    }
    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().loginUser(email, password).then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().registerUser(email, password).then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Reset password
     * @param email email
     */
    resetPassword(email) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().forgetPassword(email).then((response) => {
            const message = response.data;
            return message;
        });
    }
    /**
     * Logout the user
     */
    logout() {
        // logout the user
        (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().logout();
    }
}
AuthenticationService.??fac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(); };
AuthenticationService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.??fac, providedIn: 'root' });


/***/ }),

/***/ 2464:
/*!***************************************************!*\
  !*** ./src/app/core/services/authfake.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthfakeauthenticationService": () => (/* binding */ AuthfakeauthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class AuthfakeauthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(email, password) {
        return this.http.post(`/users/authenticate`, { email, password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
AuthfakeauthenticationService.??fac = function AuthfakeauthenticationService_Factory(t) { return new (t || AuthfakeauthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthfakeauthenticationService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: AuthfakeauthenticationService, factory: AuthfakeauthenticationService.??fac, providedIn: 'root' });


/***/ }),

/***/ 3997:
/*!************************************************!*\
  !*** ./src/app/core/services/event.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);



class EventService {
    constructor() {
        this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    /**
     * Broadcast the event
     * @param type type of event
     * @param payload payload
     */
    broadcast(type, payload = {}) {
        this.handler.next({ type, payload });
    }
    /**
     * Subscribe to event
     * @param type type of event
     * @param callback call back function
     */
    subscribe(type, callback) {
        return this.handler.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event.type === type)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(event => event.payload))
            .subscribe(callback);
    }
}
EventService.??fac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({ token: EventService, factory: EventService.??fac, providedIn: 'root' });


/***/ }),

/***/ 8463:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 2071);



class LanguageService {
    constructor(translate, cookieService) {
        this.translate = translate;
        this.cookieService = cookieService;
        this.languages = ['en', 'es', 'de', 'it', 'ru'];
        let browserLang;
        this.translate.addLangs(this.languages);
        if (this.cookieService.check('lang')) {
            browserLang = this.cookieService.get('lang');
        }
        else {
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
    }
    setLanguage(lang) {
        this.translate.use(lang);
        this.cookieService.set('lang', lang);
    }
}
LanguageService.??fac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService)); };
LanguageService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LanguageService, factory: LanguageService.??fac, providedIn: 'root' });


/***/ }),

/***/ 5661:
/*!*********************************************************!*\
  !*** ./src/app/extrapages/extrapages-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrapagesRoutingModule": () => (/* binding */ ExtrapagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page404/page404.component */ 5132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);




const routes = [
    {
        path: '404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component
    },
];
class ExtrapagesRoutingModule {
}
ExtrapagesRoutingModule.??fac = function ExtrapagesRoutingModule_Factory(t) { return new (t || ExtrapagesRoutingModule)(); };
ExtrapagesRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: ExtrapagesRoutingModule });
ExtrapagesRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ExtrapagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7358:
/*!*************************************************!*\
  !*** ./src/app/extrapages/extrapages.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrapagesModule": () => (/* binding */ ExtrapagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7034);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-otp-input */ 9708);
/* harmony import */ var _extrapages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extrapages-routing.module */ 5661);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404/page404.component */ 5132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);






class ExtrapagesModule {
}
ExtrapagesModule.??fac = function ExtrapagesModule_Factory(t) { return new (t || ExtrapagesModule)(); };
ExtrapagesModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: ExtrapagesModule });
ExtrapagesModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselModule,
            _extrapages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtrapagesRoutingModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_5__.NgOtpInputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](ExtrapagesModule, { declarations: [_page404_page404_component__WEBPACK_IMPORTED_MODULE_1__.Page404Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselModule,
        _extrapages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtrapagesRoutingModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_5__.NgOtpInputModule] }); })();


/***/ }),

/***/ 5132:
/*!*********************************************************!*\
  !*** ./src/app/extrapages/page404/page404.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


/**
 * PAges-404 component
 */
class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.??fac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 18, vars: 0, consts: [[1, "account-pages", "my-5", "pt-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], [1, "text-uppercase"], [1, "mt-5", "text-center"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/images/error-img.png", "alt", "", 1, "img-fluid"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Sorry, page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Back to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2234:
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

/**
 * Footer component
 */
class FooterComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 1, consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-sm-6"], [1, "text-sm-end", "d-none", "d-sm-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Design & Develop by Themesbrand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.year, " \u00A9 Skote. ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6010:
/*!************************************************************!*\
  !*** ./src/app/layouts/horizontal/horizontal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalComponent": () => (/* binding */ HorizontalComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 2908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 3997);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../horizontaltopbar/horizontaltopbar.component */ 6602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 2234);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 3161);







/**
 * Horizontal-layout component
 */
class HorizontalComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
        this.eventService.subscribe('changeTopbar', (topbar) => {
            this.topbar = topbar;
            this.changeTopbar(this.topbar);
        });
        document.body.setAttribute('data-layout', 'horizontal');
        document.body.removeAttribute('data-sidebar');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.removeAttribute('data-sidebar-small');
        this.changeTopbar(this.topbar);
    }
    ngAfterViewInit() {
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    changeTopbar(topbar) {
        switch (topbar) {
            case "light":
                document.body.setAttribute("data-topbar", "light");
                break;
            case "dark":
                document.body.setAttribute("data-topbar", "dark");
                break;
            case "colored":
                document.body.setAttribute("data-topbar", "colored");
                break;
            default:
                document.body.setAttribute("data-topbar", "dark");
                break;
        }
    }
}
HorizontalComponent.??fac = function HorizontalComponent_Factory(t) { return new (t || HorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
HorizontalComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: HorizontalComponent, selectors: [["app-horizontal"]], decls: 7, vars: 0, consts: [["id", "layout-wrapper"], [1, "main-content"], [1, "page-content"]], template: function HorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "app-horizontaltopbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](6, "app-rightsidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } }, directives: [_horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_2__.HorizontaltopbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_4__.RightsidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6602:
/*!************************************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/horizontaltopbar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontaltopbarComponent": () => (/* binding */ HorizontaltopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 936);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 3997);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ 7686);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/authfake.service */ 2464);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/language.service */ 8463);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ 2071);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4070);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 9686);















function HorizontaltopbarComponent_img_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "img", 114);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("src", ctx_r0.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????sanitizeUrl"]);
} }
function HorizontaltopbarComponent_img_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "img", 114);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("src", ctx_r1.valueset, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????sanitizeUrl"]);
} }
function HorizontaltopbarComponent_span_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HorizontaltopbarComponent_a_183_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HorizontaltopbarComponent_a_183_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r7); const item_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](); return ctx_r6.setLanguage(item_r5.text, item_r5.lang, item_r5.flag); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](3, _c0, ctx_r3.cookieValue === item_r5.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("src", item_r5.flag, _angular_core__WEBPACK_IMPORTED_MODULE_6__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](item_r5.text);
} }
function HorizontaltopbarComponent_ng_container_348_a_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](0, "div", 124);
} }
function HorizontaltopbarComponent_ng_container_348_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, HorizontaltopbarComponent_ng_container_348_a_2_div_4_Template, 1, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", item_r8.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????classMapInterpolate1"]("bx ", item_r8.icon, " me-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](3, 6, item_r8.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r9.hasItems(item_r8));
} }
function HorizontaltopbarComponent_ng_container_348_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HorizontaltopbarComponent_ng_container_348_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2); return ctx_r14.onMenuClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????classMapInterpolate1"]("bx ", item_r8.icon, " me-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](3, 4, item_r8.label), " ");
} }
const _c1 = function () { return { exact: true }; };
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const subitem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", subitem_r19.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 3, subitem_r19.label), " ");
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](6, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2);
    const subitem_r19 = ctx_r25.$implicit;
    const i_r18 = ctx_r25.index;
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", subitem_r19.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](4, 6, item_r8.subItems[i_r18].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", item_r8.subItems[i_r18 + 1] == null ? null : item_r8.subItems[i_r18 + 1].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](8, 8, item_r8.subItems[i_r18 + 1] == null ? null : item_r8.subItems[i_r18 + 1].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", item_r8.subItems[i_r18 + 2] == null ? null : item_r8.subItems[i_r18 + 2].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](12, 10, item_r8.subItems[i_r18 + 2] == null ? null : item_r8.subItems[i_r18 + 2].label));
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_1_div_1_Template, 13, 12, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", i_r18 % 3 == 0);
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const subSubitem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", subSubitem_r29.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 2, subSubitem_r29.label));
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const subSubSubitem_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("routerLink", subSubSubitem_r34.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](2, 2, subSubSubitem_r34.label));
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](6); return ctx_r35.onMenuClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_ng_template_6_Template, 3, 4, "ng-template", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const subSubitem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](3, 2, subSubitem_r29.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", subSubitem_r29.subItems);
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](0, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_a_0_Template, 3, 4, "a", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_Template, 7, 4, "div", 130);
} if (rf & 2) {
    const subSubitem_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !ctx_r28.hasItems(subSubitem_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r28.hasItems(subSubitem_r29));
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["????restoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](4); return ctx_r38.onMenuClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](6, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_Template, 2, 2, "ng-template", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const subitem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](3, 2, subitem_r19.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", subitem_r19.subItems);
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](0, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_a_0_Template, 3, 6, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_1_Template, 2, 1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](2, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_Template, 7, 4, "div", 130);
} if (rf & 2) {
    const subitem_r19 = ctx.$implicit;
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", item_r8.subItems.length < 11 && !ctx_r17.hasItems(subitem_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", item_r8.subItems.length > 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r17.hasItems(subitem_r19));
} }
const _c2 = function (a0) { return { "dropdown-mega-menu-xl px-2": a0 }; };
function HorizontaltopbarComponent_ng_container_348_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](1, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_Template, 3, 3, "ng-template", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pureFunction1"](2, _c2, item_r8.subItems.length > 11));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", item_r8.subItems);
} }
function HorizontaltopbarComponent_ng_container_348_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](2, HorizontaltopbarComponent_ng_container_348_a_2_Template, 5, 8, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](3, HorizontaltopbarComponent_ng_container_348_a_3_Template, 5, 6, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](4, HorizontaltopbarComponent_ng_container_348_div_4_Template, 2, 4, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", !item_r8.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", item_r8.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx_r4.hasItems(item_r8));
} }
/**
 * Horizontal Topbar and navbar specified
 */
class HorizontaltopbarComponent {
    // tslint:disable-next-line: max-line-length
    constructor(document, router, eventService, authService, authFackservice, languageService, 
    // tslint:disable-next-line: variable-name
    _cookiesService) {
        this.document = document;
        this.router = router;
        this.eventService = eventService;
        this.authService = authService;
        this.authFackservice = authFackservice;
        this.languageService = languageService;
        this._cookiesService = _cookiesService;
        this.menuItems = [];
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
            { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
            { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
        ];
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
                this.activateMenu();
            }
        });
    }
    ngOnInit() {
        this.element = document.documentElement;
        this.initialize();
        this.cookieValue = this._cookiesService.get('lang');
        const val = this.listLang.filter(x => x.lang === this.cookieValue);
        this.countryName = val.map(element => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.valueset = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map(element => element.flag);
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.cookieValue = lang;
        this.languageService.setLanguage(lang);
    }
    /**
     * Logout the user
     */
    logout() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultauth === 'firebase') {
            this.authService.logout();
        }
        else {
            this.authFackservice.logout();
        }
        this.router.navigate(['/account/login']);
    }
    /**
     * On menu click
     */
    onMenuClick(event) {
        const nextEl = event.target.nextElementSibling;
        if (nextEl) {
            const parentEl = event.target.parentNode;
            if (parentEl) {
                parentEl.classList.remove("show");
            }
            nextEl.classList.toggle("show");
        }
        return false;
    }
    ngAfterViewInit() {
        this.activateMenu();
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    /**
     * Togglemenu bar
     */
    toggleMenubar() {
        const element = document.getElementById('topnav-menu-content');
        element.classList.toggle('show');
    }
    /**
     * Activates the menu
     */
    activateMenu() {
        const resetParent = (el) => {
            const parent = el.parentElement;
            if (parent) {
                parent.classList.remove('active');
                const parent2 = parent.parentElement;
                this._removeAllClass('mm-active');
                this._removeAllClass('mm-show');
                if (parent2) {
                    parent2.classList.remove('active');
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.remove('active');
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            parent4.classList.remove('active');
                            const parent5 = parent4.parentElement;
                            if (parent5) {
                                parent5.classList.remove('active');
                                const menuelement = document.getElementById("topnav-menu-content");
                                if (menuelement !== null) {
                                    if (menuelement.classList.contains('show'))
                                        document
                                            .getElementById("topnav-menu-content")
                                            .classList.remove("show");
                                }
                            }
                        }
                    }
                }
            }
        };
        // activate menu item based on location
        const links = document.getElementsByClassName('side-nav-link-ref');
        let matchingMenuItem = null;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // reset menu
            resetParent(links[i]);
        }
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (location.pathname === links[i]['pathname']) {
                matchingMenuItem = links[i];
                break;
            }
        }
        if (matchingMenuItem) {
            const parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.add('active');
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add('active');
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.add('active');
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            parent4.classList.add('active');
                            const parent5 = parent4.parentElement;
                            if (parent5) {
                                parent5.classList.add('active');
                                const parent6 = parent5.parentElement;
                                if (parent6) {
                                    parent6.classList.add('active');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
    /**
     * Initialize
     */
    initialize() {
        this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_0__.MENU;
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
}
HorizontaltopbarComponent.??fac = function HorizontaltopbarComponent_Factory(t) { return new (t || HorizontaltopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService)); };
HorizontaltopbarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineComponent"]({ type: HorizontaltopbarComponent, selectors: [["app-horizontaltopbar"]], decls: 349, vars: 165, consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo.svg", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "17"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.svg", "alt", "", "height", "22"], ["src", "assets/images/logo-light.png", "alt", "", "height", "19"], ["type", "button", 1, "btn", "btn-sm", "px-3", "font-size-16", "d-lg-none", "header-item", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], [1, "app-search", "d-none", "d-xl-block"], [1, "position-relative"], ["type", "text", 1, "form-control", 3, "placeholder"], [1, "bx", "bx-search-alt"], ["ngbDropdown", "", 1, "dropdown", "dropdown-mega", "d-none", "d-lg-block", "me-2"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "header-item"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-megamenu"], [1, "row"], [1, "col-sm-8"], [1, "col-md-4"], [1, "font-size-14", "mt-0"], [1, "list-unstyled", "megamenu-list"], ["href", "javascript:void(0);"], [1, "col-sm-4"], [1, "col-sm-6"], [1, "col-sm-5"], ["src", "assets/images/megamenu-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "me-2"], ["type", "button", "id", "page-header-search-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "mdi", "mdi-magnify"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "id", "page-header-user-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item"], ["alt", "Header Language", "height", "16", 3, "src", 4, "ngIf"], [1, "ms-1"], ["class", "ms-1", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "class", "dropdown-item notify-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "dropdown", "d-none", "d-lg-inline-block", "me-1"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-customize"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end"], [1, "px-lg-2"], [1, "row", "no-gutters"], [1, "col"], ["href", "javascript: void(0);", 1, "dropdown-icon-item"], ["src", "assets/images/brands/github.png", "alt", "Github"], ["src", "assets/images/brands/bitbucket.png", "alt", "bitbucket"], ["src", "assets/images/brands/dribbble.png", "alt", "dribbble"], ["src", "assets/images/brands/dropbox.png", "alt", "dropbox"], ["src", "assets/images/brands/mail_chimp.png", "alt", "mail_chimp"], ["src", "assets/images/brands/slack.png", "alt", "slack"], [1, "dropdown", "d-none", "d-lg-inline-block", "me-1"], ["type", "button", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", 3, "click"], [1, "bx", "bx-fullscreen"], ["type", "button", "id", "page-header-notifications-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "bg-danger", "rounded-pill"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-notifications-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "row", "align-items-center"], [1, "col-auto"], ["href", "javascript: void(0);", 1, "small"], [2, "position", "relative", "height", "230px"], ["href", "javascript: void(0);", 1, "text-reset", "notification-item"], [1, "media"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-1"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top", "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-link", "font-size-14", "text-center"], [1, "mdi", "mdi-arrow-right-circle", "me-1"], ["src", "assets/images/users/avatar-1.jpg", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user"], [1, "d-none", "d-xl-inline-block", "ms-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "bx", "bx-user", "font-size-16", "align-middle", "me-1"], [1, "bx", "bx-wallet", "font-size-16", "align-middle", "me-1"], ["href", "javascript: void(0);", 1, "dropdown-item", "d-block"], [1, "badge", "bg-success", "float-end"], [1, "bx", "bx-wrench", "font-size-16", "align-middle", "me-1"], [1, "bx", "bx-lock-open", "font-size-16", "align-middle", "me-1"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "me-1", "text-danger"], [1, "dropdown", "d-inline-block"], ["type", "button", 1, "btn", "header-item", "noti-icon", "right-bar-toggle", 3, "click"], [1, "bx", "bx-cog", "bx-spin"], [1, "topnav"], [1, "container-fluid"], [1, "navbar", "navbar-light", "navbar-expand-lg", "topnav-menu", "active"], ["id", "topnav-menu-content", 1, "collapse", "navbar-collapse", "active"], [1, "navbar-nav"], [4, "ngFor", "ngForOf"], ["alt", "Header Language", "height", "16", 3, "src"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item", 3, "ngClass", "click"], ["alt", "user-image", "height", "12", 1, "ms-1", 3, "src"], [1, "align-middle"], [1, "nav-item", "dropdown"], ["class", "nav-link dropdown-toggle arrow-none", "href", "javascript: void(0);", "id", "topnav-components", "role", "button", 3, "routerLink", 4, "ngIf"], ["class", "nav-link dropdown-toggle arrow-none", "href", "javascript: void(0);", "id", "topnav-components", "role", "button", 3, "click", 4, "ngIf"], ["class", "dropdown-menu", "aria-labelledby", "topnav-dashboard", 3, "ngClass", 4, "ngIf"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "routerLink"], ["class", "arrow-down", 4, "ngIf"], [1, "arrow-down"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-dashboard", 1, "dropdown-menu", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "col dropdown-item side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], [4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["routerLinkActive", "active", 1, "col", "dropdown-item", "side-nav-link-ref", 3, "routerLink", "routerLinkActiveOptions"], ["class", "row", 4, "ngIf"], [1, "col-lg-4"], ["routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"], [1, "dropdown"], ["href", "javascript: void(0);", 1, "dropdown-item", "dropdown-toggle", 3, "click"], [1, "dropdown-menu"], ["class", "dropdown-item side-nav-link-ref", "href", "javascript: void(0);", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["href", "javascript: void(0);", "routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"]], template: function HorizontaltopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HorizontaltopbarComponent_Template_button_click_14_listener() { return ctx.toggleMenubar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](16, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](22, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](31, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](34, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](36, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](40, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](52, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](56, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](64, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](67, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](69, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](73, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](77, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](81, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](85, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](89, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](92, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](93, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](96, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](98, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](102, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](106, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](110, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](114, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](118, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](122, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](125, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](126, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](127, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](128, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](131, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](133, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](137, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](139, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](141, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](145, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](149, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](151, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](153, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](157, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](160, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](161, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](162, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](163, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](164, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](165, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](166, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](167, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](168, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](169, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](170, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](171, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](172, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](173, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](174, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](175, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](176, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](177, HorizontaltopbarComponent_img_177_Template, 1, 1, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](178, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](180, HorizontaltopbarComponent_img_180_Template, 1, 1, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](181, HorizontaltopbarComponent_span_181_Template, 2, 0, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](182, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](183, HorizontaltopbarComponent_a_183_Template, 4, 5, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](184, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](185, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](186, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](187, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](188, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](189, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](190, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](191, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](192, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](194, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](195, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](196, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](197, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](199, "Bitbucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](200, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](201, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](202, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](204, "Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](205, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](206, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](207, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](208, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](209, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](210, "Dropbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](211, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](212, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](213, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](214, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](215, "Mail Chimp");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](216, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](217, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](218, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](219, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](220, "Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](221, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](222, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HorizontaltopbarComponent_Template_button_click_222_listener() { return ctx.fullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](223, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](224, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](225, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](226, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](227, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](228, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](229, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](230, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](231, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](232, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](233, "h6", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](234);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](235, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](236, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](237, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](238);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](239, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](240, "ngx-simplebar", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](241, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](242, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](243, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](244, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](245, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](246, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](247, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](249, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](250, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](251, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](252);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](253, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](254, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](255, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](256);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](257, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](258, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](259, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](260, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](261, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](262, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](263);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](264, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](265, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](266, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](267);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](268, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](269, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](270, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](271);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](272, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](273, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](274, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](275, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](276, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](277, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](278, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](279, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](280);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](281, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](282, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](283, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](284);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](285, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](286, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](287, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](289, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](290, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](291, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](292, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](293, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](294, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](295);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](296, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](297, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](298, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](299);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](300, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](301, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](302, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](303);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](304, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](305, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](306, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](307, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](308);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](309, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](310, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](311, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](312, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](313, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](314, "Henry");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](315, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](316, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](317, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](318, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](319);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](320, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](321, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](322, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](323);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](324, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](325, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](326, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](327, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](328, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](329);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](330, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](331, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](332, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](333);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](334, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](335, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](336, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HorizontaltopbarComponent_Template_a_click_336_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](337, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????text"](338);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipe"](339, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](340, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](341, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????listener"]("click", function HorizontaltopbarComponent_Template_button_click_341_listener() { return ctx.onSettingsButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????element"](342, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](343, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](344, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](345, "nav", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](346, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementStart"](347, "ul", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????template"](348, HorizontaltopbarComponent_ng_container_348_Template, 5, 3, "ng-container", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](19, 59, "HEADER.SEARCH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](24, 61, "HEADER.MEGA_MENU"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](33, 63, "HEADER.UI.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](38, 65, "HEADER.UI.LIGHTBOX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](42, 67, "HEADER.UI.RANGE_SLIDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](46, 69, "HEADER.UI.SWEET_ALERT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](50, 71, "HEADER.UI.RATING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](54, 73, "HEADER.UI.FORMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](58, 75, "HEADER.UI.TABLES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](62, 77, "HEADER.UI.CHARTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](66, 79, "HEADER.APPLICATIONS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](71, 81, "HEADER.APPLICATIONS.ECOMMERCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](75, 83, "HEADER.APPLICATIONS.CALENDAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](79, 85, "HEADER.APPLICATIONS.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](83, 87, "HEADER.APPLICATIONS.PROJECTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](87, 89, "HEADER.APPLICATIONS.TASKS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](91, 91, "HEADER.APPLICATIONS.CONTACTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](95, 93, "HEADER.EXTRA_PAGES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](100, 95, "HEADER.EXTRA_PAGES.LIGHT_SIDEBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](104, 97, "HEADER.EXTRA_PAGES.COMPACT_SIDEBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](108, 99, "HEADER.EXTRA_PAGES.HORIZONTAL_LAYOUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](112, 101, "HEADER.EXTRA_PAGES.MAINTENANCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](116, 103, "HEADER.EXTRA_PAGES.COMING SOON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](120, 105, "HEADER.EXTRA_PAGES.TIMELINE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](124, 107, "HEADER.EXTRA_PAGES.FAQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](130, 109, "HEADER.UI.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](135, 111, "HEADER.UI.LIGHTBOX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](139, 113, "HEADER.UI.RANGE_SLIDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](143, 115, "HEADER.UI.SWEET_ALERT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](147, 117, "HEADER.UI.RATING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](151, 119, "HEADER.UI.FORMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](155, 121, "HEADER.UI.TABLES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](159, 123, "HEADER.UI.CHARTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.flagvalue !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](ctx.countryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.listLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](235, 125, "HEADER.NOTIFICATIONS.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](239, 127, "HEADER.NOTIFICATIONS.VIEW_ALL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](249, 129, "HEADER.NOTIFICATIONS.FIRST.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](253, 131, "HEADER.NOTIFICATIONS.FIRST.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](257, 133, "HEADER.NOTIFICATIONS.FIRST.TIME"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](264, 135, "HEADER.NOTIFICATIONS.SECOND.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](268, 137, "HEADER.NOTIFICATIONS.SECOND.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](272, 139, "HEADER.NOTIFICATIONS.SECOND.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](281, 141, "HEADER.NOTIFICATIONS.THIRD.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](285, 143, "HEADER.NOTIFICATIONS.THIRD.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](289, 145, "HEADER.NOTIFICATIONS.THIRD.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](296, 147, "HEADER.NOTIFICATIONS.FOUR.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](300, 149, "HEADER.NOTIFICATIONS.FOUR.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](304, 151, "HEADER.NOTIFICATIONS.FOUR.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](309, 153, "HEADER.NOTIFICATIONS.LOAD_MORE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](320, 155, "HEADER.LOGIN.PROFILE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](324, 157, "HEADER.LOGIN.MY_WALLET"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](330, 159, "HEADER.LOGIN.SETTINGS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](334, 161, "HEADER.LOGIN.LOCK_SCREEN"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["????pipeBind1"](339, 163, "HEADER.LOGIN.LOGOUT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["????property"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, simplebar_angular__WEBPACK_IMPORTED_MODULE_11__.SimplebarAngularComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsdG9wYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 936:
/*!**************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/menu.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 2,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 1
            },
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/',
                parentId: 1
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
                link: '/',
                parentId: 1
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
                link: '/',
                parentId: 1
            },
        ]
    },
    {
        id: 6,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        isUiElement: true,
        subItems: [
            {
                id: 7,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/',
                parentId: 6
            },
            {
                id: 8,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/',
                parentId: 6
            },
            {
                id: 9,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/',
                parentId: 6
            },
            {
                id: 10,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/',
                parentId: 6
            },
            {
                id: 11,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/',
                parentId: 6
            },
            {
                id: 12,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/',
                parentId: 6
            },
            {
                id: 13,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/',
                parentId: 6
            },
            {
                id: 14,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/',
                parentId: 6
            },
            {
                id: 15,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/',
                parentId: 6
            },
            {
                id: 16,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/',
                parentId: 6
            },
            {
                id: 16,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: '/',
                parentId: 6
            },
            {
                id: 17,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/',
                parentId: 6
            },
            {
                id: 18,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/',
                parentId: 6
            },
            {
                id: 19,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/',
                parentId: 6
            },
            {
                id: 20,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/',
                parentId: 6
            },
            {
                id: 21,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/',
                parentId: 6
            },
            {
                id: 22,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/',
                parentId: 6
            },
            {
                id: 23,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/',
                parentId: 6
            },
        ]
    },
    {
        id: 24,
        label: 'MENUITEMS.APPS.TEXT',
        icon: 'bx-customize',
        subItems: [
            {
                id: 25,
                label: 'MENUITEMS.CALENDAR.TEXT',
                link: '/',
                parentId: 24
            },
            {
                id: 26,
                label: 'MENUITEMS.CHAT.TEXT',
                link: '/',
                parentId: 24
            },
            {
                id: 27,
                label: 'MENUITEMS.FILEMANAGER.TEXT',
                link: '/',
                parentId: 24
            },
            {
                id: 28,
                label: 'MENUITEMS.EMAIL.TEXT',
                subItems: [
                    {
                        id: 29,
                        label: 'MENUITEMS.EMAIL.LIST.INBOX',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 30,
                        label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                        link: '/',
                        parentId: 28
                    },
                    {
                        id: 31,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
                        parentId: 28,
                        subItems: [
                            {
                                id: 32,
                                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
                                link: '/',
                                parentId: 31
                            },
                            {
                                id: 33,
                                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
                                link: '/',
                                parentId: 31
                            },
                            {
                                id: 34,
                                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
                                link: '/',
                                parentId: 31
                            }
                        ]
                    }
                ]
            },
            {
                id: 35,
                label: 'MENUITEMS.ECOMMERCE.TEXT',
                subItems: [
                    {
                        id: 36,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 37,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 38,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 39,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 41,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 42,
                        label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                        link: '/',
                        parentId: 35
                    },
                    {
                        id: 43,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                        link: '/',
                        parentId: 35
                    },
                ]
            },
            {
                id: 44,
                label: 'MENUITEMS.CRYPTO.TEXT',
                icon: 'bx-bitcoin',
                subItems: [
                    {
                        id: 45,
                        label: 'MENUITEMS.CRYPTO.LIST.WALLET',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 46,
                        label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 47,
                        label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 48,
                        label: 'MENUITEMS.CRYPTO.LIST.LENDING',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 49,
                        label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 50,
                        label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
                        link: '/',
                        parentId: 44
                    },
                    {
                        id: 51,
                        label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
                        link: '/',
                        parentId: 44
                    }
                ]
            },
            {
                id: 52,
                label: 'MENUITEMS.PROJECTS.TEXT',
                subItems: [
                    {
                        id: 53,
                        label: 'MENUITEMS.PROJECTS.LIST.GRID',
                        link: '/',
                        parentId: 52
                    },
                    {
                        id: 54,
                        label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                        link: '/',
                        parentId: 52
                    },
                    {
                        id: 55,
                        label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                        link: '/',
                        parentId: 52
                    },
                    {
                        id: 56,
                        label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                        link: '/',
                        parentId: 52
                    }
                ]
            },
            {
                id: 57,
                label: 'MENUITEMS.TASKS.TEXT',
                subItems: [
                    {
                        id: 58,
                        label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                        link: '/',
                        parentId: 57
                    },
                    {
                        id: 59,
                        label: 'MENUITEMS.TASKS.LIST.KANBAN',
                        link: '/',
                        parentId: 57
                    },
                    {
                        id: 60,
                        label: 'MENUITEMS.TASKS.LIST.CREATETASK',
                        link: '/',
                        parentId: 57
                    }
                ]
            },
            {
                id: 61,
                label: 'MENUITEMS.CONTACTS.TEXT',
                icon: 'bxs-user-detail',
                subItems: [
                    {
                        id: 62,
                        label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                        link: '/',
                        parentId: 61
                    },
                    {
                        id: 63,
                        label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                        link: '/',
                        parentId: 61
                    },
                    {
                        id: 64,
                        label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                        link: '/',
                        parentId: 61
                    }
                ]
            },
            {
                id: 65,
                label: 'MENUITEMS.BLOG.TEXT',
                subItems: [
                    {
                        id: 66,
                        label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
                        link: '/',
                        parentId: 65
                    },
                    {
                        id: 67,
                        label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
                        link: '/',
                        parentId: 65
                    },
                    {
                        id: 68,
                        label: 'MENUITEMS.BLOG.LIST.DETAIL',
                        link: '/',
                        parentId: 65
                    },
                ]
            },
        ]
    },
    {
        id: 69,
        icon: 'bx-collection',
        label: 'MENUITEMS.COMPONENTS.TEXT',
        subItems: [
            {
                id: 70,
                label: 'MENUITEMS.FORMS.TEXT',
                subItems: [
                    {
                        id: 71,
                        label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 72,
                        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 73,
                        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 74,
                        label: 'MENUITEMS.FORMS.LIST.EDITOR',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 75,
                        label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 76,
                        label: 'MENUITEMS.FORMS.LIST.REPEATER',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 77,
                        label: 'MENUITEMS.FORMS.LIST.WIZARD',
                        link: '/',
                        parentId: 70
                    },
                    {
                        id: 78,
                        label: 'MENUITEMS.FORMS.LIST.MASK',
                        link: '/',
                        parentId: 70
                    }
                ]
            },
            {
                id: 79,
                label: 'MENUITEMS.TABLES.TEXT',
                subItems: [
                    {
                        id: 80,
                        label: 'MENUITEMS.TABLES.LIST.BASIC',
                        link: '/',
                        parentId: 79
                    },
                    {
                        id: 81,
                        label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                        link: '/',
                        parentId: 79
                    }
                ]
            },
            {
                id: 82,
                label: 'MENUITEMS.CHARTS.TEXT',
                subItems: [
                    {
                        id: 83,
                        label: 'MENUITEMS.CHARTS.LIST.APEX',
                        link: '/',
                        parentId: 82
                    },
                    {
                        id: 84,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                        link: '/',
                        parentId: 82
                    },
                    {
                        id: 85,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                        link: '/',
                        parentId: 82
                    },
                    {
                        id: 86,
                        label: 'MENUITEMS.CHARTS.LIST.ECHART',
                        link: '/',
                        parentId: 82
                    }
                ]
            },
            {
                id: 87,
                label: 'MENUITEMS.ICONS.TEXT',
                subItems: [
                    {
                        id: 88,
                        label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                        link: '/',
                        parentId: 87
                    },
                    {
                        id: 89,
                        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                        link: '/',
                        parentId: 87
                    },
                    {
                        id: 90,
                        label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                        link: '/',
                        parentId: 87
                    },
                    {
                        id: 91,
                        label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                        link: '/',
                        parentId: 87
                    },
                ]
            },
            {
                id: 92,
                label: 'MENUITEMS.MAPS.TEXT',
                subItems: [
                    {
                        id: 93,
                        label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                        link: '/',
                        parentId: 92
                    }
                ]
            }
        ]
    },
    {
        id: 94,
        label: 'HEADER.EXTRA_PAGES.TITLE',
        icon: 'bx-file',
        subItems: [
            {
                id: 95,
                label: 'MENUITEMS.INVOICES.TEXT',
                subItems: [
                    {
                        id: 96,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                        link: '/',
                        parentId: 95
                    },
                    {
                        id: 97,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                        link: '/',
                        parentId: 95
                    },
                ]
            },
            {
                id: 98,
                label: 'MENUITEMS.AUTHENTICATION.TEXT',
                subItems: [
                    {
                        id: 99,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 100,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 101,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 102,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 103,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 104,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 105,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 106,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 107,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 108,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 109,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 110,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 111,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                        link: '/',
                        parentId: 98
                    },
                    {
                        id: 112,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                        link: '/',
                        parentId: 98
                    }
                ]
            },
            {
                id: 113,
                label: 'MENUITEMS.UTILITY.TEXT',
                icon: 'bx-file',
                subItems: [
                    {
                        id: 114,
                        label: 'MENUITEMS.UTILITY.LIST.STARTER',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 115,
                        label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 116,
                        label: 'Coming Soon',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 116,
                        label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 117,
                        label: 'MENUITEMS.UTILITY.LIST.FAQS',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 118,
                        label: 'MENUITEMS.UTILITY.LIST.PRICING',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 119,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                        link: '/',
                        parentId: 113
                    },
                    {
                        id: 120,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                        link: '/',
                        parentId: 113
                    },
                ]
            }
        ]
    }
];


/***/ }),

/***/ 2140:
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.model */ 2908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/event.service */ 3997);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical/vertical.component */ 125);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 6010);






function LayoutComponent_app_vertical_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "app-vertical");
} }
function LayoutComponent_app_horizontal_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "app-horizontal");
} }
class LayoutComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        // default settings
        this.layoutType = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
        this.layoutwidth = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_WIDTH;
        this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
        // listen to event and change the layout, theme, etc
        this.eventService.subscribe('changeLayout', (layout) => {
            this.layoutType = layout;
        });
        this.LayoutWidth(this.layoutwidth);
        this.eventService.subscribe('changeWidth', (width) => {
            this.layoutwidth = width;
            this.LayoutWidth(this.layoutwidth);
        });
    }
    ngAfterViewInit() {
    }
    LayoutWidth(width) {
        switch (width) {
            case "fluid":
                document.body.setAttribute("data-layout-size", "fluid");
                document.body.classList.remove("vertical-collpsed");
                document.body.removeAttribute("data-layout-scrollable");
                break;
            case "boxed":
                document.body.setAttribute("data-layout-size", "boxed");
                document.body.classList.add("vertical-collpsed");
                document.body.removeAttribute("data-layout-scrollable");
                break;
            case "scrollable":
                document.body.removeAttribute("data-layout-size");
                document.body.setAttribute("data-layout-scrollable", "true");
                document.body.setAttribute("data-layout-size", "fluid");
                document.body.classList.remove("right-bar-enabled", "vertical-collpsed");
            default:
                document.body.setAttribute("data-layout-size", "fluid");
                break;
        }
    }
    /**
     * Check if the vertical layout is requested
     */
    isVerticalLayoutRequested() {
        return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
    }
    /**
     * Check if the horizontal layout is requested
     */
    isHorizontalLayoutRequested() {
        return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_HORIZONTAL;
    }
}
LayoutComponent.??fac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
LayoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](0, LayoutComponent_app_vertical_0_Template, 1, 0, "app-vertical", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](1, LayoutComponent_app_horizontal_1_Template, 1, 0, "app-horizontal", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.isVerticalLayoutRequested());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.isHorizontalLayoutRequested());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__.VerticalComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2908:
/*!******************************************!*\
  !*** ./src/app/layouts/layouts.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_VERTICAL": () => (/* binding */ LAYOUT_VERTICAL),
/* harmony export */   "LAYOUT_HORIZONTAL": () => (/* binding */ LAYOUT_HORIZONTAL),
/* harmony export */   "LAYOUT_WIDTH": () => (/* binding */ LAYOUT_WIDTH),
/* harmony export */   "SIDEBAR_TYPE": () => (/* binding */ SIDEBAR_TYPE),
/* harmony export */   "TOPBAR": () => (/* binding */ TOPBAR)
/* harmony export */ });
// export layout related constants
const LAYOUT_VERTICAL = 'vertical';
const LAYOUT_HORIZONTAL = 'horizontal';
const LAYOUT_WIDTH = 'fluid';
const SIDEBAR_TYPE = 'dark';
const TOPBAR = 'dark';


/***/ }),

/***/ 1472:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4070);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-click-outside */ 216);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ui/ui.module */ 3091);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ 2140);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 8062);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar/topbar.component */ 9514);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 2234);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rightsidebar/rightsidebar.component */ 3161);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 6010);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vertical/vertical.component */ 125);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./horizontaltopbar/horizontaltopbar.component */ 6602);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/services/language.service */ 8463);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);

















class LayoutsModule {
}
LayoutsModule.??fac = function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); };
LayoutsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({ type: LayoutsModule });
LayoutsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({ providers: [_core_services_language_service__WEBPACK_IMPORTED_MODULE_10__.LanguageService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_16__.SimplebarAngularModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](LayoutsModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__.TopbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__.RightsidebarComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_7__.HorizontalComponent, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_8__.VerticalComponent, _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_9__.HorizontaltopbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_16__.SimplebarAngularModule] }); })();


/***/ }),

/***/ 3161:
/*!****************************************************************!*\
  !*** ./src/app/layouts/rightsidebar/rightsidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightsidebarComponent": () => (/* binding */ RightsidebarComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 2908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 3997);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-click-outside */ 216);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);






function RightsidebarComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Sidebar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_div_29_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r2.changeSidebartype("light"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_div_29_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r4.changeSidebartype("dark"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_div_29_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r5.changeSidebartype("compact"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "Compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_div_29_Template_input_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r6.changeSidebartype("icon"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_div_29_Template_input_change_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r7.changeSidebartype("colored"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "Colored");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx_r0.sidebartype === "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx_r0.sidebartype === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx_r0.sidebartype === "compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx_r0.sidebartype === "icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx_r0.sidebartype === "colored");
} }
function RightsidebarComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Topbar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_div_30_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r8.changeTopbar("light"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_div_30_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r10.changeTopbar("dark"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_div_30_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r11.changeTopbar("colored"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "Colored");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx_r1.topbar === "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx_r1.topbar === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx_r1.topbar === "colored");
} }
/**
 * Rightsidebar component
 */
class RightsidebarComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        this.width = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_WIDTH;
        this.sidebartype = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_TYPE;
        this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
        /**
         * horizontal-vertical layput set
         */
        this.attribute = document.body.getAttribute('data-layout');
        const vertical = document.getElementById('is-layout');
        if (vertical != null) {
            vertical.setAttribute('checked', 'true');
        }
        if (this.attribute == 'horizontal') {
            vertical.removeAttribute('checked');
        }
    }
    /**
     * Hide the sidebar
     */
    hide() {
        document.body.classList.remove('right-bar-enabled');
    }
    /**
     * Change Topbar
     */
    changeTopbar(topbar) {
        this.topbar = topbar;
        this.eventService.broadcast('changeTopbar', topbar);
    }
    /**
     * Change the layout onclick
     * @param layout Change the layout
     */
    changeLayout(layout) {
        if (layout.target.checked == true)
            this.eventService.broadcast('changeLayout', 'vertical');
        else
            this.eventService.broadcast('changeLayout', 'horizontal');
    }
    changeWidth(width) {
        this.width = width;
        this.eventService.broadcast('changeWidth', width);
    }
    changeSidebartype(sidebar) {
        this.sidebartype = sidebar;
        this.eventService.broadcast('changeSidebartype', sidebar);
    }
}
RightsidebarComponent.??fac = function RightsidebarComponent_Factory(t) { return new (t || RightsidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
RightsidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: RightsidebarComponent, selectors: [["app-rightsidebar"]], decls: 44, vars: 7, consts: [[1, "right-bar", 3, "exclude", "clickOutside"], [1, "h-100"], [1, "rightbar-title", "px-3", "py-4"], ["href", "javascript:void(0);", 1, "right-bar-toggle", "float-end", 3, "click"], [1, "mdi", "mdi-close", "noti-icon"], [1, "m-0"], [1, "mt-4", "mb-3"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "is-layout", 1, "form-check-input", 3, "click"], ["for", "is-layout", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "layout-width", "id", "layout-width-fuild", "value", "fluid", 1, "form-check-input", 3, "checked", "change"], ["for", "layout-width-fuild", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "layout-width-boxed", "value", "boxed", 1, "form-check-input", 3, "checked", "change"], ["for", "layout-width-boxed", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "layout-width-scrollable", "value", "scrollable", 1, "form-check-input", 3, "checked", "change"], ["for", "layout-width-scrollable", 1, "form-check-label"], [4, "ngIf"], [1, "text-center", "mb-0", "mt-4"], [1, "p-4"], [1, "mb-2"], ["href", "//skote-v-light.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-1.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-dark.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-2.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-rtl.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-3.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], [1, "rightbar-overlay"], [1, "form-check", "sidebar-setting"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-light", "value", "light", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-light", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-dark", "value", "dark", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-dark", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-brand", "value", "compact", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-brand", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-icon", "value", "icon", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-icon", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color", "value", "colored", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-light", "value", "light", 1, "form-check-input", 3, "checked", "change"], ["for", "topbar-color-light", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-dark", "value", "dark", 1, "form-check-input", 3, "checked", "change"], ["for", "topbar-color-dark", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-colored", "value", "colored", 1, "form-check-input", 3, "checked", "change"], ["for", "topbar-color-colored", 1, "form-check-label"]], template: function RightsidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("clickOutside", function RightsidebarComponent_Template_div_clickOutside_0_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "ngx-simplebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function RightsidebarComponent_Template_a_click_3_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function RightsidebarComponent_Template_input_click_11_listener($event) { return ctx.changeLayout($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_Template_input_change_18_listener() { return ctx.changeWidth("fluid"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "Fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_Template_input_change_22_listener() { return ctx.changeWidth("boxed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, "Boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function RightsidebarComponent_Template_input_change_26_listener() { return ctx.changeWidth("scrollable"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "Scrolable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](29, RightsidebarComponent_div_29_Template, 24, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](30, RightsidebarComponent_div_30_Template, 16, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, "Choose Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](36, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](39, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](42, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](43, "div", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("exclude", ".right-bar-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.attribute == "vertical" ? "vertical" : "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx.width === "fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx.width === "boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("checked", ctx.width === "scrollable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.attribute == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.attribute !== "vertical");
    } }, directives: [ng_click_outside__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideDirective, simplebar_angular__WEBPACK_IMPORTED_MODULE_4__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodHNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4242:
/*!*****************************************!*\
  !*** ./src/app/layouts/sidebar/menu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
                link: '/',
                parentId: 2
            },
            {
                id: 6,
                label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
                link: '/',
                parentId: 2
            },
        ]
    },
    {
        id: 7,
        isLayout: true
    },
    {
        id: 8,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 9,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'bx-calendar',
        link: '/',
    },
    {
        id: 10,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/',
    },
    {
        id: 11,
        label: 'MENUITEMS.FILEMANAGER.TEXT',
        icon: 'bx-file',
        link: '/',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.FILEMANAGER.BADGE',
        },
    },
    {
        id: 12,
        label: 'MENUITEMS.ECOMMERCE.TEXT',
        icon: 'bx-store',
        subItems: [
            {
                id: 13,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                link: '/',
                parentId: 12
            },
            {
                id: 14,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                link: '/',
                parentId: 12
            },
            {
                id: 15,
                label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                link: '/',
                parentId: 12
            },
            {
                id: 16,
                label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                link: '/',
                parentId: 12
            },
            {
                id: 17,
                label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                link: '/',
                parentId: 12
            },
            {
                id: 18,
                label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                link: '/',
                parentId: 12
            },
            {
                id: 19,
                label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                link: '/',
                parentId: 12
            },
            {
                id: 20,
                label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                link: '/',
                parentId: 12
            },
        ]
    },
    {
        id: 21,
        label: 'MENUITEMS.CRYPTO.TEXT',
        icon: 'bx-bitcoin',
        subItems: [
            {
                id: 22,
                label: 'MENUITEMS.CRYPTO.LIST.WALLET',
                link: '/',
                parentId: 21
            },
            {
                id: 23,
                label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
                link: '/',
                parentId: 21
            },
            {
                id: 24,
                label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
                link: '/',
                parentId: 21
            },
            {
                id: 25,
                label: 'MENUITEMS.CRYPTO.LIST.LENDING',
                link: '/',
                parentId: 21
            },
            {
                id: 26,
                label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
                link: '/',
                parentId: 21
            },
            {
                id: 27,
                label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
                link: '/',
                parentId: 21
            },
            {
                id: 28,
                label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
                link: '/',
                parentId: 21
            }
        ]
    },
    {
        id: 29,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'bx-envelope',
        subItems: [
            {
                id: 30,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: '/',
                parentId: 29
            },
            {
                id: 31,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: '/',
                parentId: 29
            },
            {
                id: 32,
                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
                badge: {
                    variant: 'success',
                    text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
                },
                parentId: 29,
                subItems: [
                    {
                        id: 33,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
                        link: '/',
                        parentId: 32
                    },
                    {
                        id: 34,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
                        link: '/',
                        parentId: 32
                    },
                    {
                        id: 35,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
                        link: '/',
                        parentId: 32
                    }
                ]
            }
        ]
    },
    {
        id: 36,
        label: 'MENUITEMS.INVOICES.TEXT',
        icon: 'bx-receipt',
        subItems: [
            {
                id: 37,
                label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                link: '/',
                parentId: 36
            },
            {
                id: 38,
                label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                link: '/',
                parentId: 36
            },
        ]
    },
    {
        id: 39,
        label: 'MENUITEMS.PROJECTS.TEXT',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 40,
                label: 'MENUITEMS.PROJECTS.LIST.GRID',
                link: '/',
                parentId: 38
            },
            {
                id: 41,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                link: '/',
                parentId: 38
            },
            {
                id: 42,
                label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                link: '/',
                parentId: 38
            },
            {
                id: 43,
                label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                link: '/',
                parentId: 38
            }
        ]
    },
    {
        id: 44,
        label: 'MENUITEMS.TASKS.TEXT',
        icon: 'bx-task',
        subItems: [
            {
                id: 45,
                label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                link: '/',
                parentId: 44
            },
            {
                id: 46,
                label: 'MENUITEMS.TASKS.LIST.KANBAN',
                link: '/',
                parentId: 44
            },
            {
                id: 47,
                label: 'MENUITEMS.TASKS.LIST.CREATETASK',
                link: '/',
                parentId: 44
            }
        ]
    },
    {
        id: 48,
        label: 'MENUITEMS.CONTACTS.TEXT',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 49,
                label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                link: '/',
                parentId: 48
            },
            {
                id: 50,
                label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                link: '/',
                parentId: 48
            },
            {
                id: 51,
                label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                link: '/',
                parentId: 48
            }
        ]
    },
    {
        id: 52,
        label: 'MENUITEMS.BLOG.TEXT',
        icon: 'bx-file',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
        },
        subItems: [
            {
                id: 53,
                label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
                link: '/',
                parentId: 52
            },
            {
                id: 54,
                label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
                link: '/',
                parentId: 52
            },
            {
                id: 55,
                label: 'MENUITEMS.BLOG.LIST.DETAIL',
                link: '/',
                parentId: 52
            },
        ]
    },
    {
        id: 56,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 57,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'bx-user-circle',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.AUTHENTICATION.BADGE',
        },
        subItems: [
            {
                id: 58,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/',
                parentId: 57
            },
            {
                id: 59,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                link: '/',
                parentId: 57
            },
            {
                id: 60,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/',
                parentId: 57
            },
            {
                id: 61,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                link: '/',
                parentId: 57
            },
            {
                id: 62,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/',
                parentId: 57
            },
            {
                id: 63,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                link: '/',
                parentId: 57
            },
            {
                id: 64,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/',
                parentId: 57
            },
            {
                id: 65,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                link: '/',
                parentId: 57
            },
            {
                id: 66,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                link: '/',
                parentId: 57
            },
            {
                id: 67,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                link: '/',
                parentId: 57
            },
            {
                id: 68,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                link: '/',
                parentId: 57
            },
            {
                id: 69,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                link: '/',
                parentId: 57
            },
            {
                id: 70,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                link: '/',
                parentId: 57
            },
            {
                id: 71,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                link: '/',
                parentId: 57
            }
        ]
    },
    {
        id: 72,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 73,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/',
                parentId: 72
            },
            {
                id: 74,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/',
                parentId: 72
            },
            {
                id: 74,
                label: 'Coming Soon',
                link: '/',
                parentId: 72
            },
            {
                id: 75,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: '/',
                parentId: 72
            },
            {
                id: 76,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/',
                parentId: 72
            },
            {
                id: 77,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: '/',
                parentId: 72
            },
            {
                id: 78,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/',
                parentId: 72
            },
            {
                id: 79,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/',
                parentId: 72
            },
        ]
    },
    {
        id: 80,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 81,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        subItems: [
            {
                id: 82,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/',
                parentId: 81
            },
            {
                id: 83,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/',
                parentId: 81
            },
            {
                id: 84,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/',
                parentId: 81
            },
            {
                id: 85,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/',
                parentId: 81
            },
            {
                id: 86,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/',
                parentId: 81
            },
            {
                id: 87,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/',
                parentId: 81
            },
            {
                id: 88,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/',
                parentId: 81
            },
            {
                id: 88,
                label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
                link: '/',
                parentId: 81
            },
            {
                id: 89,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/',
                parentId: 81
            },
            {
                id: 90,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/',
                parentId: 81
            },
            {
                id: 91,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/',
                parentId: 81
            },
            {
                id: 91,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: '/',
                parentId: 81
            },
            {
                id: 92,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/',
                parentId: 81
            },
            {
                id: 93,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/',
                parentId: 81
            },
            {
                id: 94,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/',
                parentId: 81
            },
            {
                id: 95,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/',
                parentId: 81
            },
            {
                id: 96,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/',
                parentId: 81
            },
            {
                id: 97,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/',
                parentId: 81
            },
            {
                id: 98,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/',
                parentId: 81
            },
        ]
    },
    {
        id: 99,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'bxs-eraser',
        badge: {
            variant: 'danger',
            text: 'MENUITEMS.FORMS.BADGE',
        },
        subItems: [
            {
                id: 100,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/',
                parentId: 99
            },
            {
                id: 101,
                label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
                link: '/',
                parentId: 99
            },
            {
                id: 102,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/',
                parentId: 99
            },
            {
                id: 103,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/',
                parentId: 99
            },
            {
                id: 104,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/',
                parentId: 99
            },
            {
                id: 105,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/',
                parentId: 99
            },
            {
                id: 106,
                label: 'MENUITEMS.FORMS.LIST.REPEATER',
                link: '/',
                parentId: 99
            },
            {
                id: 107,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/',
                parentId: 99
            },
            {
                id: 108,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/',
                parentId: 99
            }
        ]
    },
    {
        id: 109,
        icon: 'bx-list-ul',
        label: 'MENUITEMS.TABLES.TEXT',
        subItems: [
            {
                id: 110,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/',
                parentId: 109
            },
            {
                id: 111,
                label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                link: '/',
                parentId: 109
            }
        ]
    },
    {
        id: 112,
        icon: 'bxs-bar-chart-alt-2',
        label: 'MENUITEMS.CHARTS.TEXT',
        subItems: [
            {
                id: 113,
                label: 'MENUITEMS.CHARTS.LIST.APEX',
                link: '/',
                parentId: 112
            },
            {
                id: 114,
                label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                link: '/',
                parentId: 112
            },
            {
                id: 115,
                label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                link: '/',
                parentId: 112
            },
            {
                id: 116,
                label: 'MENUITEMS.CHARTS.LIST.ECHART',
                link: '/',
                parentId: 112
            }
        ]
    },
    {
        id: 117,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'bx-aperture',
        subItems: [
            {
                id: 118,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/',
                parentId: 117
            },
            {
                id: 119,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/',
                parentId: 117
            },
            {
                id: 120,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/',
                parentId: 117
            },
            {
                id: 121,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/',
                parentId: 117
            },
        ]
    },
    {
        id: 122,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'bx-map',
        subItems: [
            {
                id: 123,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/',
                parentId: 122
            }
        ]
    },
    {
        id: 124,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'bx-share-alt',
        subItems: [
            {
                id: 125,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                link: '#',
                parentId: 124
            },
            {
                id: 126,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 124,
                subItems: [
                    {
                        id: 127,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 126,
                    },
                    {
                        id: 128,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 126,
                    }
                ]
            },
        ]
    }
];


/***/ }),

/***/ 8062:
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metismenujs/dist/metismenujs */ 3592);
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ 4242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 3997);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);










const _c0 = ["componentRef"];
const _c1 = ["sideMenu"];
function SidebarComponent_ng_template_0_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 1, item_r7.label));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "i");
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMapInterpolate1"]("bx ", item_r7.icon, "");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMapInterpolate1"]("badge rounded-pill float-end bg-", item_r7.badge.variant, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 4, item_r7.badge.text));
} }
const _c2 = function (a0, a1) { return { "has-arrow": a0, "has-dropdown": a1 }; };
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_i_1_Template, 1, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_span_5_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](6, _c2, !item_r7.badge, item_r7.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 4, item_r7.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r7.badge);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "i");
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMapInterpolate1"]("bx ", item_r7.icon, "");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMapInterpolate1"]("badge rounded-pill bg-", item_r7.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 4, item_r7.badge.text));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_i_1_Template, 1, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_span_5_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", item_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 4, item_r7.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r7.badge);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", subitem_r25.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("data-parent", subitem_r25.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 3, subitem_r25.label), " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("data-parent", subitem_r25.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](2, 2, subitem_r25.label), " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const subSubitem_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("routerLink", subSubitem_r32.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????attribute"]("data-parent", subSubitem_r32.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](3, 3, subSubitem_r32.label), " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_li_1_Template, 4, 5, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", subitem_r25.subItems);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_Template, 3, 5, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_2_Template, 3, 4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_Template, 2, 1, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const subitem_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx_r24.hasItems(subitem_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r24.hasItems(subitem_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r24.hasItems(subitem_r25));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_Template, 4, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", item_r7.subItems);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_Template, 6, 9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_Template, 6, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_Template, 2, 1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.hasItems(item_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx_r9.hasItems(item_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r9.hasItems(item_r7));
} }
function SidebarComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_ng_template_0_ng_container_3_li_1_Template, 3, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_Template, 4, 3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", item_r7.isTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !item_r7.isTitle && !item_r7.isLayout);
} }
function SidebarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "ul", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, SidebarComponent_ng_template_0_ng_container_3_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r1.menuItems);
} }
function SidebarComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](0);
} }
function SidebarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_div_5_ng_container_1_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", _r0);
} }
function SidebarComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainer"](0);
} }
function SidebarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, SidebarComponent_div_6_ng_container_1_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngTemplateOutlet", _r0);
} }
/**
 * Sidebar component
 */
class SidebarComponent {
    constructor(eventService, router, translate, http) {
        this.eventService = eventService;
        this.router = router;
        this.translate = translate;
        this.http = http;
        this.isCondensed = false;
        this.menuItems = [];
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this._activateMenuDropdown();
                this._scrollElement();
            }
        });
    }
    ngOnInit() {
        this.initialize();
        this._scrollElement();
    }
    ngAfterViewInit() {
        this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
        this._activateMenuDropdown();
    }
    toggleMenu(event) {
        event.currentTarget.nextElementSibling.classList.toggle('mm-show');
    }
    ngOnChanges() {
        if (!this.isCondensed && this.sideMenu || this.isCondensed) {
            setTimeout(() => {
                this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
            });
        }
        else if (this.menu) {
            this.menu.dispose();
        }
    }
    _scrollElement() {
        setTimeout(() => {
            if (document.getElementsByClassName("mm-active").length > 0) {
                const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
                if (currentPosition > 500)
                    if (this.scrollRef.SimpleBar !== null)
                        this.scrollRef.SimpleBar.getScrollElement().scrollTop =
                            currentPosition + 300;
            }
        }, 300);
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    /**
     * Activate the parent dropdown
     */
    _activateMenuDropdown() {
        this._removeAllClass('mm-active');
        this._removeAllClass('mm-show');
        const links = document.getElementsByClassName('side-nav-link-ref');
        let menuItemEl = null;
        // tslint:disable-next-line: prefer-for-of
        const paths = [];
        for (let i = 0; i < links.length; i++) {
            paths.push(links[i]['pathname']);
        }
        var itemIndex = paths.indexOf(window.location.pathname);
        if (itemIndex === -1) {
            const strIndex = window.location.pathname.lastIndexOf('/');
            const item = window.location.pathname.substr(0, strIndex).toString();
            menuItemEl = links[paths.indexOf(item)];
        }
        else {
            menuItemEl = links[itemIndex];
        }
        if (menuItemEl) {
            menuItemEl.classList.add('active');
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.add('mm-active');
                const parent2El = parentEl.parentElement.closest('ul');
                if (parent2El && parent2El.id !== 'side-menu') {
                    parent2El.classList.add('mm-show');
                    const parent3El = parent2El.parentElement;
                    if (parent3El && parent3El.id !== 'side-menu') {
                        parent3El.classList.add('mm-active');
                        const childAnchor = parent3El.querySelector('.has-arrow');
                        const childDropdown = parent3El.querySelector('.has-dropdown');
                        if (childAnchor) {
                            childAnchor.classList.add('mm-active');
                        }
                        if (childDropdown) {
                            childDropdown.classList.add('mm-active');
                        }
                        const parent4El = parent3El.parentElement;
                        if (parent4El && parent4El.id !== 'side-menu') {
                            parent4El.classList.add('mm-show');
                            const parent5El = parent4El.parentElement;
                            if (parent5El && parent5El.id !== 'side-menu') {
                                parent5El.classList.add('mm-active');
                                const childanchor = parent5El.querySelector('.is-parent');
                                if (childanchor && parent5El.id !== 'side-menu') {
                                    childanchor.classList.add('mm-active');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Initialize
     */
    initialize() {
        this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU;
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
}
SidebarComponent.??fac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
SidebarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.scrollRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.sideMenu = _t.first);
    } }, inputs: { isCondensed: "isCondensed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????NgOnChangesFeature"]], decls: 7, vars: 2, consts: [["contentTemplate", ""], [1, "vertical-menu"], [1, "h-100"], ["componentRef", ""], [4, "ngIf"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu", "list-unstyled"], ["sideMenu", ""], [4, "ngFor", "ngForOf"], ["class", "menu-title", 4, "ngIf"], [1, "menu-title"], ["href", "javascript:void(0);", "class", "is-parent", 3, "ngClass", 4, "ngIf"], ["class", "side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "sub-menu", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "is-parent", 3, "ngClass"], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", 1, "side-nav-link-ref", 3, "routerLink"], ["aria-expanded", "false", 1, "sub-menu"], ["class", "side-nav-link-a-ref has-arrow", "href", "javascript:void(0);", 4, "ngIf"], ["class", "sub-menu mm-collapse", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "side-nav-link-a-ref", "has-arrow"], ["aria-expanded", "false", 1, "sub-menu", "mm-collapse"], [4, "ngTemplateOutlet"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, SidebarComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["????templateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "ngx-simplebar", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, SidebarComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, SidebarComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx.isCondensed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.isCondensed);
    } }, directives: [simplebar_angular__WEBPACK_IMPORTED_MODULE_7__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9514:
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarComponent": () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 8260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ 7686);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/authfake.service */ 2464);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/language.service */ 8463);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9686);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 2071);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4070);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! simplebar-angular */ 6878);













function TopbarComponent_img_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "img", 111);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("src", ctx_r0.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????sanitizeUrl"]);
} }
function TopbarComponent_img_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](0, "img", 111);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("src", ctx_r1.valueset, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????sanitizeUrl"]);
} }
function TopbarComponent_span_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function TopbarComponent_a_183_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function TopbarComponent_a_183_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r6); const item_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r5.setLanguage(item_r4.text, item_r4.lang, item_r4.flag); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pureFunction1"](3, _c0, ctx_r3.cookieValue === item_r4.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("src", item_r4.flag, _angular_core__WEBPACK_IMPORTED_MODULE_4__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](item_r4.text);
} }
/**
 * Topbar component
 */
class TopbarComponent {
    constructor(document, router, authService, authFackservice, languageService, translate, _cookiesService) {
        this.document = document;
        this.router = router;
        this.authService = authService;
        this.authFackservice = authFackservice;
        this.languageService = languageService;
        this.translate = translate;
        this._cookiesService = _cookiesService;
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
            { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
            { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
        ];
        this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.openMobileMenu = false;
        this.element = document.documentElement;
        this.cookieValue = this._cookiesService.get('lang');
        const val = this.listLang.filter(x => x.lang === this.cookieValue);
        this.countryName = val.map(element => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.valueset = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map(element => element.flag);
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.cookieValue = lang;
        this.languageService.setLanguage(lang);
    }
    /**
     * Toggles the right sidebar
     */
    toggleRightSidebar() {
        this.settingsButtonClicked.emit();
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        this.mobileMenuButtonClicked.emit();
    }
    /**
     * Logout the user
     */
    logout() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
            this.authService.logout();
        }
        else {
            this.authFackservice.logout();
        }
        this.router.navigate(['/account/login']);
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
}
TopbarComponent.??fac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService)); };
TopbarComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], outputs: { settingsButtonClicked: "settingsButtonClicked", mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 344, vars: 164, consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo.svg", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "17"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.svg", "alt", "", "height", "22"], ["src", "assets/images/logo-light.png", "alt", "", "height", "19"], ["type", "button", "id", "vertical-menu-btn", 1, "btn", "btn-sm", "px-3", "font-size-16", "header-item", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], [1, "app-search", "d-none", "d-xl-block"], [1, "position-relative"], ["type", "text", 1, "form-control", 3, "placeholder"], [1, "bx", "bx-search-alt"], ["ngbDropdown", "", 1, "dropdown-mega", "d-none", "d-lg-block", "ms-2"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", "aria-haspopup", "false", "aria-expanded", "false", 1, "btn", "header-item"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-megamenu"], [1, "row"], [1, "col-sm-8"], [1, "col-md-4"], [1, "font-size-14", "mt-0"], [1, "list-unstyled", "megamenu-list"], ["href", "javascript:void(0);"], [1, "col-sm-4"], [1, "col-sm-6"], [1, "col-sm-5"], ["src", "assets/images/megamenu-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "ms-2"], ["type", "button", "id", "page-header-search-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "ngbDropdownToggle", "", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon"], [1, "mdi", "mdi-magnify"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-search-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "id", "page-header-user-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item"], ["alt", "Header Language", "height", "16", 3, "src", 4, "ngIf"], [1, "ms-1"], ["class", "ms-1", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "class", "dropdown-item notify-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "dropdown", "d-none", "d-lg-inline-block", "ms-1"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-customize"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end"], [1, "px-lg-2"], [1, "row", "no-gutters"], [1, "col"], ["href", "javascript: void(0);", 1, "dropdown-icon-item"], ["src", "assets/images/brands/github.png", "alt", "Github"], ["src", "assets/images/brands/bitbucket.png", "alt", "bitbucket"], ["src", "assets/images/brands/dribbble.png", "alt", "dribbble"], ["src", "assets/images/brands/dropbox.png", "alt", "dropbox"], ["src", "assets/images/brands/mail_chimp.png", "alt", "mail_chimp"], ["src", "assets/images/brands/slack.png", "alt", "slack"], [1, "dropdown", "d-none", "d-lg-inline-block", "ms-1"], ["type", "button", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", 3, "click"], [1, "bx", "bx-fullscreen"], ["type", "button", "id", "page-header-notifications-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "bg-danger", "rounded-pill"], ["aria-labelledby", "page-header-notifications-dropdown", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "row", "align-items-center"], [1, "col-auto"], ["href", "javascript: void(0);", 1, "small"], [2, "position", "relative", "height", "230px"], ["href", "javascript: void(0);", 1, "text-reset", "notification-item"], [1, "media"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-1"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top", "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-link", "font-size-14", "text-center"], [1, "mdi", "mdi-arrow-right-circle", "me-1"], ["key", "t-view-more"], ["type", "button", "ngbDropdownToggle", "", "id", "page-header-user-dropdown", 1, "btn", "header-item"], ["src", "assets/images/users/avatar-1.jpg", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user"], [1, "d-none", "d-xl-inline-block", "ms-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], ["routerLink", "/contacts/profile", 1, "dropdown-item"], [1, "bx", "bx-user", "font-size-16", "align-middle", "me-1"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "bx", "bx-wallet", "font-size-16", "align-middle", "me-1"], ["href", "javascript: void(0);", 1, "dropdown-item", "d-block"], [1, "badge", "bg-success", "float-end"], [1, "bx", "bx-wrench", "font-size-16", "align-middle", "me-1"], [1, "bx", "bx-lock-open", "font-size-16", "align-middle", "me-1"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "me-1", "text-danger"], [1, "dropdown", "d-inline-block"], ["type", "button", 1, "btn", "header-item", "noti-icon", "right-bar-toggle", 3, "click"], [1, "bx", "bx-cog", "bx-spin"], ["alt", "Header Language", "height", "16", 3, "src"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item", 3, "ngClass", "click"], ["alt", "user-image", "height", "12", 1, "me-1", 3, "src"], [1, "align-middle"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function TopbarComponent_Template_button_click_14_listener($event) { return ctx.toggleMobileMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](31, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](34, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](36, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](40, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](52, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](56, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](64, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](67, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](69, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](73, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](77, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](81, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](85, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](89, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](92, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](93, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](96, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](98, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](102, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](106, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](110, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](114, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](118, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](122, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](125, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](126, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](127, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](128, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](131, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](133, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](137, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](139, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](141, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](145, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](149, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](151, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](153, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](157, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](160, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](161, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](162, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](163, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](164, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](165, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](166, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](167, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](168, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](169, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](170, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](171, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](172, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](173, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](174, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](175, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](176, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](177, TopbarComponent_img_177_Template, 1, 1, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](178, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](180, TopbarComponent_img_180_Template, 1, 1, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](181, TopbarComponent_span_181_Template, 2, 0, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](182, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](183, TopbarComponent_a_183_Template, 4, 5, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](184, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](185, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](186, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](187, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](188, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](189, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](190, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](191, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](192, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](194, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](195, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](196, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](197, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](199, "Bitbucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](200, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](201, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](202, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](204, "Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](205, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](206, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](207, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](208, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](209, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](210, "Dropbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](211, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](212, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](213, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](214, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](215, "Mail Chimp");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](216, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](217, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](218, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](219, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](220, "Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](221, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](222, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function TopbarComponent_Template_button_click_222_listener() { return ctx.fullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](223, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](224, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](225, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](226, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](227, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](228, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](229, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](230, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](231, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](232, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](233, "h6", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](234);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](235, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](236, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](237, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](238);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](239, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](240, "ngx-simplebar", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](241, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](242, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](243, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](244, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](245, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](246, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](247, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](249, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](250, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](251, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](252);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](253, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](254, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](255, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](256);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](257, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](258, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](259, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](260, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](261, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](262, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](263);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](264, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](265, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](266, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](267);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](268, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](269, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](270, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](271);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](272, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](273, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](274, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](275, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](276, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](277, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](278, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](279, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](280);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](281, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](282, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](283, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](284);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](285, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](286, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](287, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](289, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](290, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](291, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](292, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](293, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](294, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](295);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](296, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](297, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](298, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](299);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](300, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](301, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](302, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](303);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](304, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](305, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](306, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](307, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](308, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](309);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](310, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](311, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](312, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](313, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](314, "span", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](315, "Henry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](316, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](317, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](318, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](319, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](320);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](321, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](322, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](323, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](324);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](325, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](326, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](327, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](328, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](329, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](330);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](331, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](332, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](333, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](334);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](335, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](336, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](337, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function TopbarComponent_Template_a_click_337_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](338, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](339);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](340, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](341, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](342, "button", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function TopbarComponent_Template_button_click_342_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](343, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](19, 58, "HEADER.SEARCH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](24, 60, "HEADER.MEGA_MENU"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](33, 62, "HEADER.UI.TITLE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](38, 64, "HEADER.UI.LIGHTBOX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](42, 66, "HEADER.UI.RANGE_SLIDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](46, 68, "HEADER.UI.SWEET_ALERT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](50, 70, "HEADER.UI.RATING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](54, 72, "HEADER.UI.FORMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](58, 74, "HEADER.UI.TABLES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](62, 76, "HEADER.UI.CHARTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](66, 78, "HEADER.APPLICATIONS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](71, 80, "HEADER.APPLICATIONS.ECOMMERCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](75, 82, "HEADER.APPLICATIONS.CALENDAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](79, 84, "HEADER.APPLICATIONS.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](83, 86, "HEADER.APPLICATIONS.PROJECTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](87, 88, "HEADER.APPLICATIONS.TASKS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](91, 90, "HEADER.APPLICATIONS.CONTACTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](95, 92, "HEADER.EXTRA_PAGES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](100, 94, "HEADER.EXTRA_PAGES.LIGHT_SIDEBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](104, 96, "HEADER.EXTRA_PAGES.COMPACT_SIDEBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](108, 98, "HEADER.EXTRA_PAGES.HORIZONTAL_LAYOUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](112, 100, "HEADER.EXTRA_PAGES.MAINTENANCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](116, 102, "HEADER.EXTRA_PAGES.COMING SOON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](120, 104, "HEADER.EXTRA_PAGES.TIMELINE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](124, 106, "HEADER.EXTRA_PAGES.FAQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](130, 108, "HEADER.UI.TITLE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](135, 110, "HEADER.UI.LIGHTBOX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](139, 112, "HEADER.UI.RANGE_SLIDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](143, 114, "HEADER.UI.SWEET_ALERT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](147, 116, "HEADER.UI.RATING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](151, 118, "HEADER.UI.FORMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](155, 120, "HEADER.UI.TABLES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](159, 122, "HEADER.UI.CHARTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.flagvalue !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx.countryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.listLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](235, 124, "HEADER.NOTIFICATIONS.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](239, 126, "HEADER.NOTIFICATIONS.VIEW_ALL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](249, 128, "HEADER.NOTIFICATIONS.FIRST.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](253, 130, "HEADER.NOTIFICATIONS.FIRST.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](257, 132, "HEADER.NOTIFICATIONS.FIRST.TIME"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](264, 134, "HEADER.NOTIFICATIONS.SECOND.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](268, 136, "HEADER.NOTIFICATIONS.SECOND.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](272, 138, "HEADER.NOTIFICATIONS.SECOND.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](281, 140, "HEADER.NOTIFICATIONS.THIRD.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](285, 142, "HEADER.NOTIFICATIONS.THIRD.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](289, 144, "HEADER.NOTIFICATIONS.THIRD.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](296, 146, "HEADER.NOTIFICATIONS.FOUR.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](300, 148, "HEADER.NOTIFICATIONS.FOUR.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](304, 150, "HEADER.NOTIFICATIONS.FOUR.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](310, 152, "HEADER.NOTIFICATIONS.LOAD_MORE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](321, 154, "HEADER.LOGIN.PROFILE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](325, 156, "HEADER.LOGIN.MY_WALLET"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](331, 158, "HEADER.LOGIN.SETTINGS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](335, 160, "HEADER.LOGIN.LOCK_SCREEN"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](340, 162, "HEADER.LOGIN.LOGOUT"), "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, simplebar_angular__WEBPACK_IMPORTED_MODULE_10__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 125:
/*!********************************************************!*\
  !*** ./src/app/layouts/vertical/vertical.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalComponent": () => (/* binding */ VerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 2908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 3997);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topbar/topbar.component */ 9514);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 8062);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ 2234);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 3161);









/**
 * Vertical component
 */
class VerticalComponent {
    constructor(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isCondensed = false;
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
                document.body.classList.remove('sidebar-enable');
            }
        });
    }
    ngOnInit() {
        this.sidebartype = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_TYPE;
        // listen to event and change the layout, theme, etc
        this.eventService.subscribe('changeSidebartype', (layout) => {
            this.sidebartype = layout;
            this.changeSidebar(this.sidebartype);
        });
        this.changeSidebar(this.sidebartype);
        document.body.setAttribute('data-layout', 'vertical');
    }
    isMobile() {
        const ua = navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
    }
    ngAfterViewInit() {
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    changeSidebar(value) {
        switch (value) {
            case "light":
                document.body.setAttribute('data-sidebar', 'light');
                document.body.setAttribute('data-topbar', 'dark');
                document.body.removeAttribute('data-sidebar-size');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.classList.remove('vertical-collpsed');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "compact":
                document.body.setAttribute('data-sidebar-size', 'small');
                document.body.setAttribute('data-sidebar', 'dark');
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.classList.remove('sidebar-enable');
                document.body.classList.remove('vertical-collpsed');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "dark":
                document.body.setAttribute('data-sidebar', 'dark');
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.removeAttribute('data-sidebar-size');
                document.body.classList.remove('sidebar-enable');
                document.body.classList.remove('vertical-collpsed');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "icon":
                document.body.classList.add('vertical-collpsed');
                document.body.setAttribute('data-sidebar', 'dark');
                document.body.removeAttribute('data-layout-size');
                document.body.setAttribute('data-keep-enlarged', "true");
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "colored":
                document.body.classList.remove('sidebar-enable');
                document.body.classList.remove('vertical-collpsed');
                document.body.setAttribute('data-sidebar', 'colored');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-scrollable');
                document.body.removeAttribute('data-sidebar-size');
                break;
            default:
                document.body.setAttribute('data-sidebar', 'dark');
                break;
        }
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        this.isCondensed = !this.isCondensed;
        document.body.classList.toggle('sidebar-enable');
        document.body.classList.toggle('vertical-collpsed');
        if (window.screen.width <= 768) {
            document.body.classList.remove('vertical-collpsed');
        }
    }
}
VerticalComponent.??fac = function VerticalComponent_Factory(t) { return new (t || VerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
VerticalComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({ type: VerticalComponent, selectors: [["app-vertical"]], decls: 8, vars: 1, consts: [["id", "layout-wrapper"], [3, "settingsButtonClicked", "mobileMenuButtonClicked"], [3, "isCondensed"], [1, "main-content"], [1, "page-content"]], template: function VerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("settingsButtonClicked", function VerticalComponent_Template_app_topbar_settingsButtonClicked_1_listener() { return ctx.onSettingsButtonClicked(); })("mobileMenuButtonClicked", function VerticalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() { return ctx.onToggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](7, "app-rightsidebar");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("isCondensed", ctx.isCondensed);
    } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__.RightsidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1950:
/*!************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagetitleComponent": () => (/* binding */ PagetitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


function PagetitleComponent_ng_container_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.label);
} }
function PagetitleComponent_ng_container_7_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", item_r1.label, " ");
} }
function PagetitleComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, PagetitleComponent_ng_container_7_li_1_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, PagetitleComponent_ng_container_7_li_2_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r1.active);
} }
class PagetitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagetitleComponent.??fac = function PagetitleComponent_Factory(t) { return new (t || PagetitleComponent)(); };
PagetitleComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PagetitleComponent, selectors: [["app-page-title"]], inputs: { breadcrumbItems: "breadcrumbItems", title: "title" }, decls: 8, vars: 2, consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"]], template: function PagetitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, PagetitleComponent_ng_container_7_Template, 3, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.breadcrumbItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdldGl0bGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3091:
/*!****************************************!*\
  !*** ./src/app/shared/ui/ui.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIModule": () => (/* binding */ UIModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4070);
/* harmony import */ var _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagetitle/pagetitle.component */ 1950);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);





class UIModule {
}
UIModule.??fac = function UIModule_Factory(t) { return new (t || UIModule)(); };
UIModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: UIModule });
UIModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDatepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTimepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](UIModule, { declarations: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTimepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownModule], exports: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent] }); })();


/***/ }),

/***/ 9833:
/*!************************************************!*\
  !*** ./src/app/strategy/strategy.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyComponent": () => (/* binding */ StrategyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class StrategyComponent {
    constructor() { }
    ngOnInit() {
    }
}
StrategyComponent.??fac = function StrategyComponent_Factory(t) { return new (t || StrategyComponent)(); };
StrategyComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: StrategyComponent, selectors: [["app-strategy"]], decls: 120, vars: 0, consts: [[1, "outer"], [1, "fl"], [1, "label1", 2, "padding-left", "20px"], ["type", "text", "placeholder", "John Doe"], [1, "label2"], ["type", "text", "placeholder", "hh:mm(alp)m"], [1, "label2", 2, "padding-left", "20px"], [1, "label1"], [2, "width", "22.5%"]], template: function StrategyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add Strategy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Strategy Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Entry Time*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Exit Time*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "TimeFrame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Instrument(for analysis)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Symbol to Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Indicator 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Period 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Multiplier 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Candla param 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Indicator 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Period 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Multiplier 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Candle param 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Condition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Order Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Target unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "Stoploss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](109, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Stoploss unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".fl[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.label1[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  flex-basis: 0;\n}\n\n.label2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\nselect[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\nform[_ngcontent-%COMP%] {\n  background-color: #222736;\n}\n\n.outer[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmF0ZWd5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBTUoiLCJmaWxlIjoic3RyYXRlZ3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5sYWJlbDF7XHJcbiAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcbi5sYWJlbDJ7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcbnNlbGVjdHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuZm9ybXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI3MzY7XHJcbn1cclxuLm91dGVye1xyXG4gICAgcGFkZGluZzogMjBweDsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    defaultauth: 'fackbackend',
    firebaseConfig: {
        apiKey: '',
        authDomain: '',
        databaseURL: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
        measurementId: ''
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map