import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '',component:HomeComponent},
  { path: 'about',component:AboutComponent},
  { path: 'contact',component:ContactComponent},
  { path: 'careers',component:CareerComponent},
  { path: 'services',component:ServicesComponent},
  { path: 'products',component:ProductsComponent},
  { path: 'test',component:TestComponent}

  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
