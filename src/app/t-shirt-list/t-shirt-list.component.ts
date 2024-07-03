import { Component } from '@angular/core';
import { Tshirt } from './Tshirt';
import { TshirtCartService } from '../tshirt-cart.service';

@Component({
  selector: 'app-t-shirt-list',
  templateUrl: './t-shirt-list.component.html',
  styleUrl: './t-shirt-list.component.scss'
})
export class TShirtListComponent {
  tshirts: Tshirt[] =[
    {
      id: 1,
      jugador: "Ronaldinho",
      numero: 80,
      equipo: "Milan",
      retro: true,
      stock: 5,
    }, 
    {
      id: 2,
      jugador: "Lionel Messi",
      numero: 10,
      equipo: "Inter Miami",
      retro: false,
      stock: 3,
    },
    {
      id: 3,
      jugador: "Alessandro Del Piero",
      numero: 10,
      equipo: "Juventus",
      retro: true,
      stock: 8,
    },
    {
      id: 4,
      jugador: "Thierry Henry",
      numero: 14,
      equipo: "Arsenal",
      retro: true,
      stock: 0,
    },
    {
      id: 5,
      jugador: "Paulo Dybala",
      numero: 21,
      equipo: "Roma",
      retro: false,
      stock: 0,
    },
    
  ];

  constructor(private cart: TshirtCartService) {}

  add(tshirt: Tshirt): void{
    this.cart.add(tshirt);
    tshirt.stock--;
  }
}
