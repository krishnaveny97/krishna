import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detaildispaly',
  templateUrl: './detaildispaly.component.html',
  styleUrls: ['./detaildispaly.component.css']
})
export class DetaildispalyComponent {
 
  @Output() linkClicked = new EventEmitter<string>();

  onClick(description: string) {
    this.linkClicked.emit(description);
  }
  @Input() showButton!: boolean;
  @Input() showLink!:boolean;

 
}
