import { Component } from '@angular/core';
import { Tshirt } from './Tshirt';
import { TshirtCartService } from '../tshirt-cart.service';
import { TshirtDataService } from '../tshirt-data.service';

@Component({
  selector: 'app-t-shirt-list',
  templateUrl: './t-shirt-list.component.html',
  styleUrl: './t-shirt-list.component.scss'
})
export class TShirtListComponent {

  tshirts: Tshirt[] = [];

  constructor(
    private tshirtData: TshirtDataService,
    private cart: TshirtCartService
  ) {}

  ngOnInit(): void {
    this.tshirtData.getTshirts().subscribe(data => this.tshirts = data);
  }
  
  add(tshirt: Tshirt): void{
    this.cart.add(tshirt);
    tshirt.stock--;
  }
}
