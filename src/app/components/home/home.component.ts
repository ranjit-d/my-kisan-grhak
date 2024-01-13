import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/service/cart.service';
import { MycartService } from 'src/app/service/mycart.service';


@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
   },
  ];


  dryfruits=[{
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

confectionary=[
  {proId:1,
    img:'https://rukminim2.flixcart.com/image/612/612/xif0q/candy-mouth-freshener/o/1/a/400-dried-amla-candy-indian-dry-gooseberry-avla-1-livyor-original-imagvbnnffgamnrm.jpeg?q=70',
    descri:'Amala Gulkand Candy',
    amount: 145,
    Quantity:1,},
  {proId:2,
  img:'https://rukminim2.flixcart.com/image/612/612/knt7zbk0/candy-mouth-freshener/i/x/g/400-sweet-amla-candy-400-gm-jar-pack-amla-candy-dry-amla-candy-original-imag2es7srvddzku.jpeg?q=70',
descri:'Amala Candy 125 Gm',
amount:65,
Quantity:1},
  {proId:3,
    img:'https://rukminim2.flixcart.com/image/612/612/ks6ef0w0/honey/r/0/u/500-pure-organic-amla-honey-500gm-grgr-original-imag5synuzhf7hdx.jpeg?q=70',
    descri:'Amala Jam 250 Gm',
    amount:70,
    Quantity:1
  },
];

organicproduct=[{
  proId:1,
  img:'https://rukminim2.flixcart.com/image/612/612/xif0q/liquid-detergent/k/o/b/-original-imagvyfdxxdy2x9t.jpeg?q=70',
  descri:'kids  Laundry Detergent -(Bazingaa) 500 ml',
  amount:237,
  Quantity:1
},
{  proId:2,
  img:'https://rukminim2.flixcart.com/image/612/612/xif0q/shampoo/c/t/e/100-intelligent-kids-mild-shampoo-100-ml-tuco-original-imagvz7kzucwesdq.jpeg?q=70',
  descri:'Kids Shampoo-Bazingaa 250 ml',
  amount:189,
  Quantity:1},

{  proId:3,
  img:'https://rukminim2.flixcart.com/image/612/612/xif0q/body-wash/5/z/h/300-schoolers-face-wash-body-wash-with-no-chemical-deeply-original-imagsqbn2bzggwxp.jpeg?q=70',
  descri:'Kids Body Wash - Bazingaa 300 ml',
  amount:237,
  Quantity:1}
]
  itemscart:any=[];
  cartnum:number=0;

  constructor(private route:Router,
    private cart:CartService

    ){}

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
