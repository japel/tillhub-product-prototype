import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {Router} from '@angular/router';

@Component({
	styleUrls: ['app/products.component.css'],
	selector: 'my-products',
	templateUrl: 'app/products.component.html'
})

export class ProductsComponent implements OnInit {
	//@Input() product: Product;
	products: Product[];
	selectedProduct: Product;

	constructor(private router: Router,
							private productService: ProductService) {
	}

	getProducts(): void {
		this.productService.getProducts().then(products => this.products = products);
	}

	ngOnInit(): void {
		this.getProducts();
	}

	onSelect(product: Product): void {
		this.selectedProduct = product;
	};

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedProduct.id]);
	}

	add(data: object): void {
		this.productService.create(data)
			.then(product => {
				this.products.push(product);
				this.selectedProduct = null;
			});
	}

	delete(product: Product): void {
		this.productService
			.delete(product.id)
			.then(() => {
				this.products = this.products.filter(h => h !== product);
				if (this.selectedProduct === product) { this.selectedProduct = null; }
			});
	}

}
