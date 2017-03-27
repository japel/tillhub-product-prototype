import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';

import {ProductService} from './product.service';
import {Product} from './product';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'my-product-detail',
	templateUrl: 'app/product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
	@Input() product: Product;

	constructor(private productService: ProductService,
							private route: ActivatedRoute,
							private location: Location) {
	}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.productService.getProduct(+params['id']))
			.subscribe(product => this.product = product);
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		this.productService.update(this.product)
			.then(() => this.goBack());
	}


}