import { Injectable } from '@angular/core';
import { categories } from '../model/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoiesService {
  data:categories[];
  constructor() { 
    this.data = [

    {Id: 'THE CABIN', name: 'THE CABIN',type:1},
    {Id: 'THE HOMESTEAD', name: 'THE HOMESTEAD',type:1},
    {Id: 'THE LODGE', name: 'THE LODGE',type:1},
    {Id: 'THE RANCH', name: 'THE RANCH',type:1},
    {Id: 'WEEKENDER', name: 'WEEKENDER',type:1},
    {Id: 'SOLAR PANELS', name: 'SOLAR PANELS',type:2},
    {Id: 'BATTERIES', name: 'BATTERIES',type:2},
    {Id: 'INVERTERS', name: 'INVERTERS',type:2},
  
  
  ];
  }
   
}
