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
    for(let i = 0; i < 4; i++)
      this.colorFourBand.push('');
  }

  selectColor()
  {
    this.color = document.querySelector('select')?.value ?? 'white';
  }

  setColorBand(num:number)
  {
    document.getElementsByClassName('resistorColorBand')[num].setAttribute("style", `${this.backgroundColor}: ${this.color}`);
  }
}
