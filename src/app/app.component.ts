import { Component, OnInit } from '@angular/core';
import { SliderInterface } from './components/slider/slide.interface';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kisegra-web';
  cartitem:number=0;

constructor(private cart:CartService){
  this.cart.cartsubject.subscribe((d:any)=>{
    this.cartitem=d;
  })
}

ngOnInit(): void {
this.cartfun();
}
cartfun(){
  if(localStorage.getItem('localcart')!=null){
var count=JSON.parse(localStorage.getItem('localcart')!);
this.cartitem=count.length;
  }
}

}


