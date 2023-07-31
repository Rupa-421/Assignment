import { Component, Input,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
  selector: 'app-input-tab',
  templateUrl: './input-tab.component.html',
  styleUrls: ['./input-tab.component.scss']
})
export class InputTabComponent {
  @Input() inputValue: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() removeTabClick = new EventEmitter<void>();

  updateTab() {
    this.valueChange.emit(this.inputValue);
  }

  removeTab() {
    this.removeTabClick.emit();
  }
}
