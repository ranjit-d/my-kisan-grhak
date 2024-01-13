import { Component, Input } from '@angular/core';


interface carosalImages{
  imagesrc:string;
  imagealt:string;
}
@Component({
  selector: 'app-carosal',
  templateUrl: './carosal.component.html',
  styleUrls: ['./carosal.component.css']
})
export class CarosalComponent {

  @Input() images:carosalImages[]=[]
  @Input() indicators=true
  selectedIndex=0;

  selectImage(index:number){
this.selectedIndex=index;
  }
}
