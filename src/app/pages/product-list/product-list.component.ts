import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Laptop Pro', price: 5000 },
    { name: 'Laptop Air', price: 4500 },
    { name: 'Laptop Mini', price: 4000 },
  ];

  @ViewChild(ProductCardComponent) firstCard!: ProductCardComponent;

  onAdded(productName: string) {
    alert(`${productName} added to cart!`);
  }

  highlightFirst() {
    console.log('Accessing child:', this.firstCard);
  }
}
