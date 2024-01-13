import { Component } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartnum:number=0;
getcartdetails:any=[];
total:number=0;
  constructor(private cart: CartService) { }

  ngOnInit() {
this.cartdetails();
this.loadcart();
  }

  cartdetails(){
    if(localStorage.getItem('localcart')){
this.getcartdetails=
JSON.parse(localStorage.getItem('localcart')!);
console.log(this.getcartdetails)

    }

  }
  increseqnt(proId:any,Quantity:any){
// console.log(proId);
// console.log(Quantity)
for(let i=0;i<this.getcartdetails.length;i++){
  if(this.getcartdetails[i].proId===proId){
    if(Quantity!=5){
      this.getcartdetails[i].Quantity=parseInt (Quantity)+1;
    }
    // Quantity+1;

  }

}
localStorage.setItem('localcart',JSON.stringify(this.getcartdetails));
this.loadcart()
  }

  decreseqnt(proId:any,Quantity:any){
    // console.log(proId);
    // console.log(Quantity)
    for(let i=0;i<this.getcartdetails.length;i++){
      if(this.getcartdetails[i].proId===proId){
        if(Quantity!=1){
          this.getcartdetails[i].Quantity=parseInt (Quantity)-1;
        }
        // Quantity+1;

      }
    }
    localStorage.setItem('localcart',JSON.stringify(this.getcartdetails));
    this.loadcart()
      }

      loadcart(){
if(localStorage.getItem('localcart')){
  this.getcartdetails=JSON.parse(localStorage.getItem('localcart')!);
  this.total=this.getcartdetails.reduce(function(acc:any,valu:any){
    return acc+(valu.amount*valu.Quantity);
  },0)
}
      }
      remomeallitem(){
     localStorage.removeItem('localcart');
     this.getcartdetails=[]
this.total=0;
this.cartnum=0;
this.cart.cartsubject.next(this.cartnum)

      }

      ondelete(getcartd:any) {
    
       if(localStorage.getItem('localcart')){
        this.getcartdetails=JSON.parse(localStorage.getItem('localcart')!)
        ;
        for(let i=0;i<this.getcartdetails.length;i++){
          if(this.getcartdetails[i].proId===getcartd){
            this.getcartdetails.splice(i,1);
            localStorage.setItem('localcart',JSON.stringify(this.getcartdetails));
this.loadcart();
this.cartnumfunc();
          }
        }
       }
      }
      cartnumfunc(){
        var cartvalue=JSON.parse(localStorage.getItem('localcart')!);
        this.cartnum=cartvalue.length;
        this.cart.cartsubject.next(this.cartnum)
      // console.log(this.cartnum)
      }
}
