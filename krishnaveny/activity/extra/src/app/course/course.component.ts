import { Component } from '@angular/core';
import{courses} from '../course'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  course:courses[]=[{
    bimage:"../../assets/images/aa.jfif",
    Name:"Aadujeevitham",
    id:"101",
    Author:"Benyamin",
    type:"free"
    

  },
  {
    bimage:"../../assets/images/OIP (1).jfif",
    Name:"House of Names",
    id:"102",
    Author:"Colm",
    type:"free"
    

  },
  {
    bimage:"../../assets/images/download.jfif",
    Name:"The Thousand Names",
    id:"103",
    Author:"Diango",
    type:"free"
    

  },
  {
    bimage:"../../assets/images/download.jfif",
    Name:"The Thousand Names",
    id:"103",
    Author:"Diango",
    type:"premium"
    

  }

  
]
 
 getAllBooks(){
  return this.course.length;
  
 }
 getFreeBooks(){
  return this.course.filter(book =>(book.type==="free")).length;
 }
 getPremiumBooks(){
  return this.course.filter(book =>(book.type==="premium")).length;
 }
 messageFromChild: string| undefined;
  
 getData(dataFromChild:string){
  this.messageFromChild=dataFromChild;

 }


}
