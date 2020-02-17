import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  public result = [];
  public Username : string;
  public password : string;
  public soumis = false;

  constructor( private results : DataService){
    this.Data();
   }
   Veifier(){
      this.soumis = true;
  }

  Data(){
   this.results.getData().subscribe(data => {
      this.result = data
      console.log(this.result); 
    });
  
  
  
} 

}
