import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent{
  
  @Input() myInput:string | undefined;
  @Output() myOutput:EventEmitter <string> = new EventEmitter();

  outputstring="It is child component";
  constructor(){
   
  }

  ngOnInit(){
    console.log(this.myInput)
  }

  sendData(){
    this.myOutput.emit(this.outputstring);
  }

}