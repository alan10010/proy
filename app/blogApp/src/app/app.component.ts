
import { Component } from '@angular/core';
import { ProductService } from './table/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title: String = 'Guero';
  body: String = 'Luis Gerardo es gay';
}
