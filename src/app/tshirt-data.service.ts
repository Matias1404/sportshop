import { Injectable } from '@angular/core';
import { Tshirt } from './t-shirt-list/Tshirt';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TshirtDataService {

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

  getTshirts(): Observable<Tshirt[]>{
    return of(this.tshirts);
  }
}