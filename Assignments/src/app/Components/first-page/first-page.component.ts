import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
seriesNumber:number=1;
valueAtIndex:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  findNumber(){
if(this.seriesNumber%2==0){
  this.valueAtIndex=this.seriesNumber*this.seriesNumber-1;
}
else{
  this.valueAtIndex=this.seriesNumber*this.seriesNumber+1;
}
  }

}