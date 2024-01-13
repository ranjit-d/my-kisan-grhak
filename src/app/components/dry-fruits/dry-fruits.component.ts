import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-dry-fruits',
  templateUrl: './dry-fruits.component.html',
  styleUrls: ['./dry-fruits.component.css']
})
export class DryFruitsComponent {

  dryfruits=[
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgLcCSiZUc3pvAohFZiwcJoQq0sOQ0-dxTYCxU0U3hCFlXqhbl8GR&usqp=CAE&s',
  descri:'Dry Fruits'}
  ];

  dryfruitss=[{
    proId:1,
    img:'https://rukminim2.flixcart.com/image/612/612/jxqfonk0/nut-dry-fruit/4/m/m/1-california-almonds-premium-quality-1-kg-pouch-shree-murli-original-imafhzjvtzj6ggu5.jpeg?q=70',
    descri:'Apricot 100 gm',
    amount: 195,
    Quantity:1,
  },
  {  proId:2,
  img:'https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/o/b/j/200-turkish-1-pouch-grocery-farm-original-imagh3vrthzzqnxn.jpeg?q=70',
  descri:'Yellow Raisins 100 gm',
  amount:60,
  Quantity:1,},

  {  proId:3,
    img:'https://rukminim2.flixcart.com/image/612/612/kp4difk0/nut-dry-fruit/p/g/v/100-yellow-kishmish-pilli-kismis-dried-grapes-pili-kismish-original-imag3fpgpmsmmuaz.jpeg?q=70',
    descri:'Almond California',
    amount:40,
    Quantity:1,},
]

  itemscart:any=[];
  cartnum:number=0;

  constructor(private route:Router,private cart:CartService){}

  // logouton(){
  //   this.route.navigate(['login'])
  // }


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

