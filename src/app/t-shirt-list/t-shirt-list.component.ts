import { Component } from '@angular/core';
import { Tshirt } from './Tshirt';

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
    }, 
    {
      id: 2,
      jugador: "Lionel Messi",
      numero: 10,
      equipo: "Inter Miami",
      retro: false,
    },
    {
      id: 3,
      jugador: "Alessandro Del Piero",
      numero: 10,
      equipo: "Juventus",
      retro: true,
    },
    {
      id: 4,
      jugador: "Thierry Henry",
      numero: 14,
      equipo: "Arsenal",
      retro: true,
    },
    {
      id: 5,
      jugador: "Paulo Dybala",
      numero: 21,
      equipo: "Roma",
      retro: false,
    },
    
  ];

  add(tshirt: Tshirt): void{

  }
}
