import { Component, Input } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.scss']
})
export class ComponentYComponent  {

  constructor(private httpClient:HttpClient){

  }
  @Input() panelName: string = '';

  textInput: string = '';

  saveData() {
    // Here, you need to implement the logic to save the data to the backend (Node.js).
    // You can use Angular's HttpClient to send data to the server.
    // For this example, we'll just log the data to the console.
    const data = { [this.panelName]: this.textInput };
   
const url="http://localhost:5000/"
try{
  // this.httpClient.post(url,data).subscribe((data_response)=>{
  //   console.log(data_response);
  // })
}
catch{
  console.log("error while fetching data")
}

console.log(data);

  }
}
