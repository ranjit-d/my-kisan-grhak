import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {

groceryitem=[{
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTlm3aWdohKBwdK40UE9qEkKDge1daMnagc78V5iFNaNIjOEgGvcB&usqp=CAE&s',
  descri:'Grocery main'
},
{  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgzTYggHGePEGFMqwaqZ76QKpVmz93LA0njPZR5fThjQTbg372Ojp&usqp=CAE&s',
descri:'Confectionery'},
{  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Oxmiz-CYVqbMGnk_7GFWdxIpuU0wno_6XOvyLwZLqg2-HuX-9ttR&usqp=CAE&s',
descri:'Pickels'},
{  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VaI9n-DUy6UbBUCejDnczat7Dr8WWwcudWld6B84SzYEujCC4ky_&usqp=CAE&s',
descri:'Papad'},
{  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqvXpiWw4NAbUww0TXia3MftZlrZ3dWc6uf8Cf7LWuHCV0OvxYSKYE&usqp=CAE&s',
descri:'Home Care'},
{  img:'data:image/jpeg;base64,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',
descri:'Honey'}]


productarray=[
  {
    proId:1,
img:'https://m.media-amazon.com/images/I/81jMxSxkwNL._AC_UL320_.jpg',
descri:'Basmati rice primum',
amount:115,
Quantity:1,

  },
  {
    proId:2,
    img:'https://m.media-amazon.com/images/I/61QmImQTmZL._AC_UL320_.jpg',
    descri:'wheat Lokwan primum',
    amount:175,
    Quantity:1,

      },
      {
        proId:3,
 img:'https://m.media-amazon.com/images/I/811v1bYbF6L._AC_UL320_.jpg',
 descri:'rice bran oil',
 amount:450,
 Quantity:1,

 }
];
itemscart:any=[];
cartnum:number=0;
constructor(private cart:CartService){}

ngOnInit(): void {

}

incrse(prod:any){
  // console.log(prod.Quantity);
  // prod.Quantity=prod.Quantity+1;
  if(prod.Quantity!==5){
    prod.Quantity+=1;
  }
  // prod.Quantity+=1;


  }
  decrese(prod:any){
    // console.log(prod)
    if(prod.Quantity!==1){
      prod.Quantity-=1;
    }
  }
addtocart(category:any){
  // console.log(category);
  let cartdatanull=localStorage.getItem('localcart')
  if(cartdatanull==null ){
    let storedataget:any=[]
    storedataget.push(category);
    localStorage.setItem('localcart',JSON.stringify(storedataget))
  }

  else{
    var id=category.proId;
    let index:number=-1;
    // this.itemscart = JSON.parse(localStorage.getItem('localcart'));
    this.itemscart=JSON.parse(localStorage.getItem('localcart')!)
    for(let i=0;i<this.itemscart.length;i++){
      if( parseInt(id)=== parseInt( this.itemscart[i].proId)){
  this.itemscart[i].Quantity=category.Quantity;
  index=i;
  break;

      }
    }
    if(index==-1){
      this.itemscart.push(category);
      localStorage.setItem('localcart',JSON.stringify(this.itemscart))
    }
    else{
          localStorage.setItem('localcart',JSON.stringify(this.itemscart))
    }

  }
  // localStorage.setItem('localcart',JSON.stringify(category))

this.cartnumfunc();
}
cartnumfunc(){
  var cartvalue=JSON.parse(localStorage.getItem('localcart')!);
  this.cartnum=cartvalue.length;
  this.cart.cartsubject.next(this.cartnum)
// console.log(this.cartnum)
}
}
