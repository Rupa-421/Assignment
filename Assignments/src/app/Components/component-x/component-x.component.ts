import { EventEmitter,Input,Output,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.scss']
})
export class ComponentXComponent  {

  @Input() panelName: string = '';
  @Output() removeComponentX = new EventEmitter<void>();

  componentsY: any[] = [];

  addComponentY() {
    this.componentsY.push({});
  }
}
