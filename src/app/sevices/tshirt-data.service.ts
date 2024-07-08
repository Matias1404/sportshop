import { Injectable } from '@angular/core';
import { Tshirt } from '../interfaces/Tshirt';
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
          stock: 5,
          precio: 70,
        }, 
        {
          id: 2,
          jugador: "Lionel Messi",
          numero: 10,
          equipo: "Inter Miami",
          stock: 3,
          precio: 80,
        },
        {
          id: 3,
          jugador: "Alessandro Del Piero",
          numero: 10,
          equipo: "Juventus",
          stock: 8,
          precio: 40,
        },
        {
          id: 4,
          jugador: "Thierry Henry",
          numero: 14,
          equipo: "Arsenal",
          stock: 0,
          precio: 50,
        },
        {
          id: 5,
          jugador: "Paulo Dybala",
          numero: 21,
          equipo: "Roma",
          stock: 0,
          precio: 30,
        },
        {
          id: 6,
          jugador: "Diego Maradona",
          numero: 10,
          equipo: "Napoli",
          stock: 6,
          precio: 100,
        },
        {
          id: 7,
          jugador: "Gianluiggi Buffon",
          numero: 1,
          equipo: "Juventus",
          stock: 0,
          precio: 60,
        },
        {
          id: 8,
          jugador: "Cristiano Ronaldo",
          numero: 7,
          equipo: "Real Madrid",
          stock: 0,
          precio: 70,
        },
        {
          id: 9,
          jugador: "Edison Cavani",
          numero: 10,
          equipo: "Boca Juniors",
          stock: 3,
          precio: 50,
        },
        {
          id: 10,
          jugador: "Neymar Jr",
          numero: 10,
          equipo: "Santos",
          stock: 4,
          precio: 60,
        },
      ];

  getTshirts(): Observable<Tshirt[]>{
    return of(this.tshirts);
  }
}