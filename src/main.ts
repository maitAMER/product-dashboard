import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { NotFoundComponent } from './app/not-found/not-found.component';

bootstrapApplication(AppComponent, {
providers: [
provideRouter([
{ path: '', component: HomeComponent, pathMatch: 'full', title: 'Home' },
{ path: 'home', component: HomeComponent, title: 'Home' },

{
path: 'products',
title: 'Products',
loadComponent: () =>
  import('./app/products/products.component').then(
    (m) => m.ProductsComponent
  ),
},

{
path: 'product-list',
title: 'Product List',
loadComponent: () =>
  import('./app/pages/product-list/product-list.component').then(
    (m) => m.ProductListComponent
  ),
},
{
path: 'product-card',
title: 'Product card',
loadComponent: () =>
  import('./app/shared/product-card/product-card.component').then(
    (m) => m.ProductCardComponent
  ),
},


{ path: '**', component: NotFoundComponent, title: 'Not Found' },
]),
],
}).catch((err) => console.error(err));
