import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item: string;
  result = [];
  
  constructor(private activatedRoute: ActivatedRoute , private results : DataService) {
      this.Data();
   }
 
  ngOnInit() {
    // 
   let itemS = this.activatedRoute.snapshot.paramMap.get('item');
   this.item = JSON.parse(itemS);
    console.log(this.item); 
    
  }

  Data(){
    this.results.getData().subscribe(data => {
       this.result = data
       console.log(this.result); 
     });
     
   
 } 
 

}
