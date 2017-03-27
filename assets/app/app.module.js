"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var product_detail_component_1 = require("./product-detail.component");
var products_component_1 = require("./products.component");
var product_service_1 = require("./product.service");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var ng2_search_filter_1 = require("ng2-search-filter");
var ng2_validation_1 = require("ng2-validation");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ng2_validation_1.CustomFormsModule,
            http_1.HttpModule,
            //InMemoryWebApiModule.forRoot(InMemoryDataService),
            app_routing_module_1.AppRoutingModule,
            ng2_search_filter_1.Ng2SearchPipeModule
        ],
        declarations: [
            app_component_1.AppComponent,
            product_detail_component_1.ProductDetailComponent,
            products_component_1.ProductsComponent
        ],
        providers: [
            product_service_1.ProductService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map