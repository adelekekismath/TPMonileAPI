import { Component } from '@angular/core';
import { isNumber } from 'util';
import { DataService } from '../services/data.service';
import { Result } from '../User';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    public result = [];

    constructor( private results : DataService){
      this.Data();
     }

    Data(){
     this.results.getData().subscribe(data => {
        this.result = data
        console.log(this.result); 
      });
      
    
  } 
}