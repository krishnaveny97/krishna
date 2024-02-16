import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
 arr:any[]=[
  {
    imag:'../../assets/images/shopeeee.jpg',
    backgroundimg:'../../assets/images/shoppee.png',
    jobname:'UI/UX Designer',
    place:'amazone ',
    rightimage:'../../assets/images/archive-minus.png',
    typeofemployment:'Full-Time',
    experienclevel:'Mid-Level',
    rate:'3000-5000',
    location:'Indonesia',
    site:'OnSite',
    display:true,
    postedjobs:"Posted 6 Days ago.",
    appicants:"12 Applicants", Location:"Location",
    typeofemploymentper:"typeofemployment",
    locationper:"location",
    experienclevelper:"experienclevel",
    siteper:"Onsite/Remote ",
    rateper:"Salary Range",
    im:"../../assets/images/Group 1 (5).png"

  },
  {
    imag:'../../assets/images/OIP (2).jfif',
    backgroundimg:'../../assets/images/flip.png',
    jobname:'UX Designer',
    place:'amazone ',
    rightimage:'../../assets/images/archive-minus (2).png',
    typeofemployment:'ALL-Time',
    experienclevel:'Mid-Level',
    rate:'2000-5000',
    location:'Indonesia',
    site:'OnSite',
    display:true,
      postedjobs:"Posted 6 Days ago.",
      appicants:"12 Applicants",
      Location:"Location",
      typeofemploymentper:"typeofemployment",
      locationper:"location",
      experienclevelper:"experienclevel",
      siteper:"Onsite/Remote ",
      rateper:"Salary Range",
      im:"../../assets/images/Group 1 (5).png"

  },
  {
    imag:'../../assets/images/OIP.jfif',
    backgroundimg:'../../assets/images/google.png',
    jobname:'UIDesigner',
    place:'amazone ',
    rightimage:'../../assets/images/archive-minus.png',
    typeofemployment:'Full-Time',
    experienclevel:'Mid-Level',
    rate:'3000-6000',
    location:'Indonesia',
    site:'OnSite',
    display:true,
    postedjobs:"Posted 6 Days ago.",
    appicants:"12 Applicants",
    Location:"Location",
    typeofemploymentper:"typeofemployment",
    locationper:"location",
    experienclevelper:"experienclevel",
    siteper:"Onsite/Remote ",
    rateper:"Salary Range",
    im:"../../assets/images/Group 1 (5).png"


  }
]




  selectedOption: any;

  selectOption(option: any) {
    this.selectedOption = option;
  }

}
