import { Injectable } from '@angular/core';
import { Tshirt } from '../interfaces/Tshirt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TshirtCartService {
  
  private _cartList: Tshirt[] = [];

  cartList: BehaviorSubject<Tshirt[]> = new BehaviorSubject(this._cartList);
  
  constructor() {}
  
  add(tshirt: Tshirt) {
    this._cartList.push({ ... tshirt});
    this.cartList.next(this._cartList);
    
  }
   
  

}
