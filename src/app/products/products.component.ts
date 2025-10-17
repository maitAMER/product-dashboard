import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from "../shared/product-card/product-card.component";

interface Iproducts {
img: string;
name: string;
price: number;
}

@Component({
selector: 'app-products',
standalone: true,
imports: [CommonModule, RouterLink, ProductCardComponent],
templateUrl: './products.component.html',
styleUrls: ['./products.component.css']
})
export class ProductsComponent {
showProducts = false;
isAdmin = false;
products: Iproducts[] = [
{
img: '../../assets/Laptop-device-mock-up-on-transparent-background-PNG.png',
name: 'Laptop Pro',
price: 5000
},
{
img: '../../assets/Laptop-device-mock-up-on-transparent-background-PNG.png',
name: 'Laptop Air',
price: 4500
},
{
img: '../../assets/Laptop-device-mock-up-on-transparent-background-PNG.png',
name: 'Laptop Mini',
price: 4000
}
];

loadProducts() {
setTimeout(() => {
this.showProducts = true;
}, 2000);
}

makeAdmin() {
this.isAdmin = true;
}
}
