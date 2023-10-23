import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent {
  onAddFormClicked = false;

  // TODO ? Get the form to pop up when the button is clicked but then close when the form is submitted
  // @Input({transform: booleanAttribute}) onAddFormClicked: boolean;
}
