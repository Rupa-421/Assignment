import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { Contact } from 'src/app/Contact.model';

import { ContactStorageService } from 'src/app/contact-storage.service';
interface InputTab {
  value: string;
}
@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.scss']
})
export class ThirdPageComponent  {

  constructor() { }

  
  contacts: Contact[] = [{ number: '' }];

  addContact() {
    this.contacts.push({ number: '' });
  }

  removeContact(index: number) {
    this.contacts.splice(index, 1);
  }

  onSubmit() {
    for(let i=0;i<this.contacts.length;i++){
      console.log("Phone number"+(i+1)+":"+this.contacts[i].number);
      
    }
    // You can send the data to a server or perform other actions here
  }
}
