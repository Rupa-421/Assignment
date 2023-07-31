import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactStorageService {

  private contactNumbers: string[] = [];

  saveContactNumbers(numbers: string[]) {
    this.contactNumbers = numbers.slice(); // Create a copy of the array
  }

  getContactNumbers() {
    return this.contactNumbers.slice(); // Return a copy of the array to avoid direct manipulation
  }
}
