import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

  componentsX: any[] = [];

  ngOnInit() {}

  addComponentX() {
    this.componentsX.push({});
  }

  removeComponentX(index: number) {
    this.componentsX.splice(index, 1);
  }

  addComponentY(xIndex: number) {
    if (!this.componentsX[xIndex].componentsY) {
      this.componentsX[xIndex].componentsY = [];
    }
    this.componentsX[xIndex].componentsY.push({});
  }

}
