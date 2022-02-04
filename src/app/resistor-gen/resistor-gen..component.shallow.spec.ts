
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ResistorGenComponent } from "./resistor-gen.component";
import { By } from "@angular/platform-browser";
import {ResistorColorBand} from "./resistor-gen.component";

describe('ResistorGenComponent (shallow tests)', () => {
  let fixture: ComponentFixture<ResistorGenComponent>;
  let whiteColor = 'white';
  let yellowColor = 'yellow';
  let brownColor = 'brown';
  let theBandClassName = '.resistorColorBand';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorGenComponent],
    });
    fixture = TestBed.createComponent(ResistorGenComponent);
  });

  it('the backgroundColor of the first band of the resistor shall be yellow if select yellow ', () => {
    fixture.detectChanges();
    fixture.componentInstance.color = yellowColor;
    fixture.componentInstance.setColorBand(ResistorColorBand.FirstBand);
    let bandColor = fixture.debugElement.queryAll(By.css(theBandClassName))[ResistorColorBand.FirstBand];
    expect(bandColor.nativeElement.style.backgroundColor).toEqual(fixture.componentInstance.color);
  })

  it('the backgroundColor of the second band of the resistor shall be brown if select brown and the others have different color', () => {
    fixture.detectChanges();
    fixture.componentInstance.color = brownColor;
    fixture.componentInstance.setColorBand(ResistorColorBand.SecondBand);
    let firstBandColor = fixture.debugElement.queryAll(By.css(theBandClassName))[ResistorColorBand.FirstBand];
    let secondBandColor = fixture.debugElement.queryAll(By.css(theBandClassName))[ResistorColorBand.SecondBand];
    let thirdBandColor = fixture.debugElement.queryAll(By.css(theBandClassName))[ResistorColorBand.ThirdBand];
    let fourthBandColor = fixture.debugElement.queryAll(By.css(theBandClassName))[ResistorColorBand.FourthBand];
    expect(secondBandColor.nativeElement.style.backgroundColor).toEqual(fixture.componentInstance.color);
    expect(firstBandColor.nativeElement.style.backgroundColor).toEqual('');
    expect(thirdBandColor.nativeElement.style.backgroundColor).toEqual('');
    expect(fourthBandColor.nativeElement.style.backgroundColor).toEqual('');
  })

  it('the backgroundColor of the third band of the resistor shall be yellow if select yellow ', () => {
    fixture.detectChanges();
    fixture.componentInstance.color = yellowColor;
    fixture.componentInstance.setColorBand(ResistorColorBand.ThirdBand);
    let bandColor = fixture.debugElement.queryAll(By.css(theBandClassName))[ResistorColorBand.ThirdBand];
    expect(bandColor.nativeElement.style.backgroundColor).toEqual(fixture.componentInstance.color);
  })

  it('the backgroundColor of the fourth band of the resistor shall be yellow if select yellow ', () => {
    fixture.detectChanges();
    fixture.componentInstance.color = yellowColor;
    fixture.componentInstance.setColorBand(ResistorColorBand.FourthBand);
    let bandColor = fixture.debugElement.queryAll(By.css(theBandClassName))[ResistorColorBand.FourthBand];
    expect(bandColor.nativeElement.style.backgroundColor).toEqual(fixture.componentInstance.color);
  })

  it('if you do not select the color, the default background color of the resistor band will be white', () => {
    fixture.detectChanges();
    fixture.componentInstance.setColorBand(ResistorColorBand.FirstBand);
    let bandColor = fixture.debugElement.query(By.css(theBandClassName));
    expect(bandColor.nativeElement.style.backgroundColor).toEqual(whiteColor);
  })
})


