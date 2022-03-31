import { Component, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  show = false;
  shown = 'green';
  color = 'pink';
  data = ['anil', 'pravin', 'vaibhav', 'mohansign'];
  data1 = [
    { name: 'anil', roll: 34 },
    { name: 'pravin', roll: 33 },
    { name: 'vaibhav', roll: 32 },
    { name: 'mohansign', roll: 31 },
  ];
  className = 'one';
  className2 = 'two';
  tempBoolean = true;
  styleprop = 'blue';
  styleprop1 = 'yellow';

  subTitle = "It's fun to learn the interpolation";
  epNum = 17;
  user = {
    userId: 201,
    userName: 'ARC',
    status: 'active',
  };
  colorVal = 'violet';
  placeHolderVal = 'Enter your name';

  hrefVal = 'http://www.google.com';
  updateLink = 'http://www.oracle.com';
  firstName = '';

  readFirstName() {
    console.log(this.firstName);
  }

  getData(value:any){
      console.log(value);
  }

}
