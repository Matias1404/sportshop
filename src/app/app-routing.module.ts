import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportshopTshirtsComponent } from './components/sportshop-tshirts/sportshop-tshirts.component';
import { SportshopContactComponent } from './components/sportshop-contact/sportshop-contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tshirts',
    pathMatch: 'full' 
  },
  {
    path: 'tshirts',
    component: SportshopTshirtsComponent 
  },
  {
    path: 'contact',
    component: SportshopContactComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
