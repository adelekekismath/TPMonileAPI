import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Result } from 'src/app/User';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit  {

  UserID: string;
  item : Result;
  
  constructor(private activatedRoute: ActivatedRoute , private results : DataService) {
  
    
   }
 
  ngOnInit() {
    
    this.UserID  = this.activatedRoute.snapshot.paramMap.get('item');
    console.log(this.UserID);
    this.results.getOneUser(this.UserID).subscribe(data => {
       this.item = data
       console.log(this.item); 
     });
  
  }

  

}
