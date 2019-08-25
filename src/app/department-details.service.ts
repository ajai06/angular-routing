import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentDetailsService {


  departments(){ 
    return [
    {"id":1, "name": "MongoDB"},
    {"id":2, "name": "Express"},
    {"id":3, "name": "Angular"},
    {"id":4, "name": "NodeJS"},
    {"id":5, "name": "ReactJS"}
  ]
}

  constructor() { }
}
