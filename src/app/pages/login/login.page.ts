import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { Result } from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  public result :Result[];
  public Username : string;
  public password : string;
  public soumis = false;

  constructor( private results : DataService, public router : Router){
   // this.Data();
   }
   Verifier(){
    this.results.getEveryUser().subscribe(data => {
      this.result = data;
      console.log(this.result);
     for (const item in this.result) {
        if (this.Username === this.result[item].login.username && this.password === this.result[item].login.password) {
          console.log(this.result[item].login.username);
          this.soumis = true;
          this.router.navigate(['liste']);
          console.log("dcfvgbhnj,");
          break;
        } else {
          console.log("kis")
          
        } 
      }  
    
     
    });  
    this.soumis = true;

  }

  /* Data(){
   this.results.getData().subscribe(data => {
      this.result = data
      console.log(this.result); 
    });   
}  */
}
