import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Result } from 'src/app/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage  {

  public result = [];

  constructor( private results : DataService, public router: Router){
    this.Data();
   }
   clicker(item : Result){
    let  resultString = JSON.stringify(item);
    this.router.navigate(['detail', resultString] );
   }

  Data(){
   this.results.getData().subscribe(data => {
      this.result = data
      console.log(this.result); 
    });
    
  
} 
}
