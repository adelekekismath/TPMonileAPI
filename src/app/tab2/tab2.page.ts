import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
