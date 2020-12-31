
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { ResistorGenComponent } from "./resistor-gen.component";
import { By } from "@angular/platform-browser";

describe('ResistorGenComponent (shallow tests)', () => {
  let fixture: ComponentFixture<ResistorGenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResistorGenComponent],
    });
    fixture = TestBed.createComponent(ResistorGenComponent);
  });

  it('the backgroundColor of the first band of the resistor shall be yellow if select yellow ', () => {
    fixture.detectChanges();
    fixture.componentInstance.color = 'yellow';
    fixture.componentInstance.setColorBand(0);
    let bandColor = fixture.debugElement.queryAll(By.css('.resistorColorBand'))[0];
    expect(bandColor.nativeElement.style.backgroundColor).toEqual(fixture.componentInstance.color);
  })

  it('the backgroundColor of the second band of the resistor shall be brown if select brown and the others have different color', () => {
    fixture.detectChanges();
    let brownColor = fixture.componentInstance.color = 'brown';
    fixture.componentInstance.setColorBand(1);
    let secondBandColor = fixture.debugElement.queryAll(By.css('.resistorColorBand'))[1];
    let firstBandColor = fixture.debugElement.queryAll(By.css('.resistorColorBand'))[0];
    let thirdBandColor = fixture.debugElement.queryAll(By.css('.resistorColorBand'))[2];
    let fourthBandColor = fixture.debugElement.queryAll(By.css('.resistorColorBand'))[3];
    expect(secondBandColor.nativeElement.style.backgroundColor).toEqual(brownColor);
    expect(firstBandColor.nativeElement.style.backgroundColor).toEqual('');
    expect(thirdBandColor.nativeElement.style.backgroundColor).toEqual('');
    expect(fourthBandColor.nativeElement.style.backgroundColor).toEqual('');
  })

  it('the backgroundColor of the third band of the resistor shall be yellow if select yellow ', () => {
    fixture.detectChanges();
    fixture.componentInstance.color = 'yellow';
    fixture.componentInstance.setColorBand(2);
    let bandColor = fixture.debugElement.queryAll(By.css('.resistorColorBand'))[2];
    expect(bandColor.nativeElement.style.backgroundColor).toEqual(fixture.componentInstance.color);
  })

  it('the backgroundColor of the fourth band of the resistor shall be yellow if select yellow ', () => {
    fixture.detectChanges();
    fixture.componentInstance.color = 'yellow';
    fixture.componentInstance.setColorBand(3);
    let bandColor = fixture.debugElement.queryAll(By.css('.resistorColorBand'))[3];
    expect(bandColor.nativeElement.style.backgroundColor).toEqual(fixture.componentInstance.color);
  })

  it('if you do not select the color, the default background color of the resistor band will be white', () => {
    fixture.detectChanges();
    fixture.componentInstance.setColorBand(0);
    let bandColor = fixture.debugElement.query(By.css('.resistorColorBand'));
    expect(bandColor.nativeElement.style.backgroundColor).toEqual('white');
  })
})


