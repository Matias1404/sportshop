import { Component } from '@angular/core';
import { TshirtCartService } from '../tshirt-cart.service';
import { Tshirt } from '../t-shirt-list/Tshirt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$: Observable<Tshirt[]>;
  

  constructor(private cart: TshirtCartService){
    this.cartList$ = cart.cartList.asObservable();
  }


}
 