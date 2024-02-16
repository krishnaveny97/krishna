import { Component,EventEmitter,Input,OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  ngOnInit():void {

  } 
 @Input() all:number=0;
 @Input() free:number=0;
 @Input() premium:number=0;
 
 data:string="books Details";
 @Output() message=new EventEmitter<string>;
 notify(){
  this.message.emit(this.data);
 }

}
