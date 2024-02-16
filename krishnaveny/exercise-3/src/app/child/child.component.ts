import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() selectedOption: any;

  displayButton: boolean = true;
  displayLink: boolean = true;

  descriptionMessage: any = "";

  onLinkClicked(description: string) {
    this.descriptionMessage = description;
  }
 
 

}
