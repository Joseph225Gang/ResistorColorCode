import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistor-gen',
  templateUrl: './resistor-gen.component.html',
  styleUrls: ['./resistor-gen.component.css']
})
export class ResistorGenComponent implements OnInit {

  color: string = 'white';
  backgroundColor: string = 'background-color';
  constructor() { }

  ngOnInit(): void {
  }

  selectColor()
  {
    this.color = document.querySelector('select')?.value ?? 'white';
  }

  setColorFirstBand()
  {
    document.getElementsByClassName('resistorColorBand')[0].setAttribute("style", `${this.backgroundColor}: ${this.color}`);
  }

  setColorSecondBand()
  {
    document.getElementsByClassName('resistorColorBand')[1].setAttribute("style", `${this.backgroundColor}: ${this.color}`);
  }

  setColorThirdBand()
  {
    document.getElementsByClassName('resistorColorBand')[2].setAttribute("style", `${this.backgroundColor}: ${this.color}`);
  }

  setColorFourthBand()
  {
    document.getElementsByClassName('resistorColorBand')[3].setAttribute("style", `${this.backgroundColor}: ${this.color}`);
  }
}
