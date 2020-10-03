import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CareerComponent,
    ServicesComponent,
    ProductsComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
  

    BrowserAnimationsModule,
    OwlModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent,CareerComponent]
})
export class AppModule { }
