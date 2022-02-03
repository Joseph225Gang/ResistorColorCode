import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistor-gen',
  templateUrl: './resistor-gen.component.html',
  styleUrls: ['./resistor-gen.component.css']
})
export class ResistorGenComponent implements OnInit {

  color: string = 'white';
  colorFourBand: string[] = [];
  backgroundColor: string = 'background-color';
  constructor() { }

  ngOnInit(): void {
  }

  selectColor()
  {
    this.color = document.querySelector('select')?.value ?? 'white';
  }

  setColorBand(bandNum:ResistorColorBand)
  {
    document.getElementsByClassName('resistorColorBand')[bandNum].setAttribute("style", `${this.backgroundColor}: ${this.color}`);
  }
}

export enum ResistorColorBand{
  FirstBand = 0,
  SecondBand,
  ThirdBand,
  FourthBand
}


