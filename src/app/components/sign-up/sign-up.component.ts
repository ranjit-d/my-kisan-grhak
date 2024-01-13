import { Component, Input, OnInit } from '@angular/core';
import { SliderInterface } from '../slider/slide.interface';

// interface caroselimg{
//   imgsrc:string;
//   imgalt:string;
// }
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
//  @Input() images:caroselimg[]=[];
@Input() slides:SliderInterface[]=[]
@Input() indicators=true;
selectedIndex=0;
// @Input() indicators=true
//  selectedIndex=0;

  signupform:any=[{
    mobileno:''
  }]
constructor (){

}

ngOnInit(): void {

}
onSubmit(){
  this.signupform.mobileno
}
selectImage(index:number){
  this.selectedIndex=index;
    }

    onsignup(t:any){
console.log(t)
    }
}
