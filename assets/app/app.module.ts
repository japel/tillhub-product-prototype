import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {AppComponent}        from './app.component';
import {ProductDetailComponent} from './product-detail.component';
import {ProductsComponent}     from './products.component';
import {ProductService}         from './product.service';
import {AppRoutingModule}     from './app-routing.module';
import { HttpModule }    from '@angular/http';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		CustomFormsModule,
		HttpModule,
		//InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule,
		Ng2SearchPipeModule
	],
	declarations: [
		AppComponent,
		ProductDetailComponent,
		ProductsComponent
	],
	providers: [
		ProductService
	],
	bootstrap: [AppComponent]
})

export class AppModule {
}
