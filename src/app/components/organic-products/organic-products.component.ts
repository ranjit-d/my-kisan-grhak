import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-organic-products',
  templateUrl: './organic-products.component.html',
  styleUrls: ['./organic-products.component.css']
})
export class OrganicProductsComponent implements OnInit{

  organicproducts=[{
img:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAABAMFBgIHAQj/xAA9EAACAQMDAgMEBQkJAQAAAAABAgMABBEFEiEGMRNBYRQiUYEycZGhsQczQlJyssHR8BYjJCVTYnOi8RX/xAAbAQABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADIRAAIBAgQEAwcEAwEAAAAAAAABAgMRBBIhMQVBUWETIqEyQnGBkbHRFBXB8Abh8SP/2gAMAwEAAhEDEQA/APR685NsKACgAoAKACgAoAKACgAoAKAGILOWePegG3OOTWlheGVsTT8SNrENSvGDsxes4mCkAKACgAoAKACgAoAKACgAoAt9ODeyL6k4+2u14OrYON+/3Zn17eIymd0QZdlUepxXFpN7F+6ErjW9Kts+PqdnGR5NOoP41PDC15+zBv5MZKtTjvJFdcdbdN2/09Whb/iVpP3QasR4XjJbU36L7kLxlBe8IS/lH6eQf3UlzMfLZbkZ+3FWFwTFvdJfMY8fR5Cq/lKspWHgaXqDR7wrSuFCpk4ySCcVJ+x1IrzTV+moz9wi/Zizc1hmgFABQAUAFAEtvA9xJtXsPpH4VcweDqYqpljtzfT+8iOrUUFcvo0WNAi9gMCu5p0404KEdkZjk27s/McltBaWttPqyT3ZnnljIE20xrGQpIznLZJ78cetVo1JTm40rRsk9t7/AMFSUVBJz1vf0F9RtYUs9JnsrUI1xbs0m0sxeRZGU8EnjAXgfE0+jUk51Izls+2zSYypFZYuK3Q7r6om2O0htCtxbQTpDDbYeIFBubeB2LZ4ye/liocM27ubejktXo9enW3ZElZJeyt0mOahbIsdvcaYUa50iaOGf2dWBK+TngZO8OpxnhhUNKbbcam1RNq9t+i30tYlnBaOG8bI615oZrbXmGLa8jlHj27e54rLKAsqj1UnPrgjvRhlKMqXOPJ9LrVP4Pbt8BKzjadt/wDe57Fby+NbxS/6iBvtGa4+ccsnHobkXdJklMFCgA+qlSuB0yOO6sPrFSyw9aKvKLS+AmZMt9ORY7ZTjl/eNdhwmhGlhIte9r9TPrtymxksK1LEFjwC+0PqBtQ1C2i0MXln7bJNAZxtCknup3LkEAZHIOBWHTxWFVOE5VcssqTt/wAf13Gyo1s8ko3V7lfNFr9pewaVLBaQXMELyxDw4zsD5JweQCTwAPMirEZYWpB1k202k99bdui3+pE1Wi/DsrpCfjay9lbSrdiO2kidY2jKx7ViGSpKgEYAJA9Kmy4dVJRy3aa7789Rl60opp6fgm07Sb651iKzv7m6T2uYRvNHOJCXK7veO7vt555xTK2IpQoudNLyrRNW7aadR0KU5Tyyb1NzD+S/SFOZ7y9lP7Sr/CsKXHq/uxS+v5L64bT5ts2trAttbQ28ZYpEiopY5OAMDNY05ucnJ8zQjHKrEtMFCgDuEoJo/EIC7hnNXMBHNiYJq+pHUfkY3qMkaHGUGPjXY4mnCVCaa5MpQlJWKZuq4LCE+0I4WO6Fp7o3EsRkYxTMDJxwtOLXuoSpJZm+4y/V+jRnEt4EY87WRgfvAq94iIvEh1M9L1z01ECTqqNj9RGb8BXER4VjHtD1RdeMoLmee9S9URXXUEmoaO3ixDwT4m1lOEOdpyOASfuFdDg8DKGHVKto9fXn30MyviU6maG2hWm7u1trmFdMlS38BldSGIi3FiHGRx7ruPqNWfDpuUW53d+2vK31SZH4krO0dP7r6lla6newanDqMeiyBRce1sstyAG2QsANxUbQFYtyCT9VVqlCnKk6TqcrbdWu+uqtyJ1Vmp5lDv6GiXr3V5vDEGj2kZcx8Pd7igfGwsMAgHI5PxHxFZ74Rh43vUb35dN7a62J/wBbUe0fUV/tt1HPvMKaVEsfi78pK5URlQx47/THYH4+VSfteDjbNmd7dFve32G/q67va3PryNh0XqtxrOhrdXjwyTCWSNnhGEba2AR6YrI4jh4Yeu4QTtZbl3C1ZVKd5F7VAsGMu9Q1mw6wmkuYbr/55AFq0cO5M7fNv0ctn7q7PhlOnDCwcVq1dlSbvJps+L1g62kkg055tQnleGFFi3HIHn6cd60KdtxJRfUT6n1a9n6ZsJNUSKK/9oieJQuMMueG75wuT3qRrQpV7W0IbXUGaBd0Fu5xyWRSf3qbcrZjLW13BDc2Di4tRp4iiLRFkLxy7CNxT6WQ53E45Hx4FUZQlKMlZ57vXW1r9dttB6lFOOvl/kIdVW1gQT3cVzdC2lSYvIXWZDIhWNm5zwH58tw5FEsO5y8qaV01pazs7tL6fGwKoorV3dnfv2In1HTJWuYUkea1cKYo2jPiq3gKmQwPfcoBB4IFOVGssratLnrpbM3s+XNc1sI6sGmt167EoIn1eTU47LUnNyJfEhjtC2wvGykBs88tkcDgU32aKpZo6Ws79Hfbl+RV7WfK9e3YnjttblmlurbQtTF7NDHFI0kDLGNhjO4ZA5JjXjPHPfjDHUw0UoSqxypt7663+1/mOtVbvGDu/wC/wMjp7X5rnxYdBuIMySzAm8VGR5NuSrDG3G0YyD3NRfrcJGOV1U9EtuS6od4FZu+T16m/6Ks9SstPuxq8EcM8148wSNgQAwX4euawOI1aNWpF0XdJJfc0sLCcYvOrNs0FZ5ZKDrHVrrSrWwmtZY42e7EDGRNwCEEk4rtOGLNhox7GPjqjpyUl1KDWNe1NBDLZDSxE4Mm6YNu7AkcHB/8ABV6hSsrEGIxEtGrFP1VJd63onT0ngB7iaVm2RLgE7c8DP3ZqW1nYYpOcEyS2sb82lu/s2FkjDr40ojJU9jgngU2zEUZPkbeLpLp6L6Gj2Z/aj3fjXES4ji5b1GbawtFe6h2LR9Mh/NadaJj9WBR/CoHia0t5v6skVKC2SG0ijQYRFUeigVE5Se7HqKR386aLYKAClswPhYDuQPnSqEnsgufFkR2YI6sV74OcU6VOcLOStcDHflOZBp1mZE8T/FBdufLwz/XFddwqX/kl2Ri8VjeCff8AJj9S8H2C0Hgo+0HC5bPJ7f8AUVrU92ZtSzhEvLnSJ9d6f6dgtp3tXiRnSRf0Tgc8YPn5Ukn5i3SjmpovdNXqvTtPt7ONrWZIIxGryq2cDgeY/rzoztEiU0rGqrzg3QoAKAOZZEhjMkrqiKMlmOAKfCEpvLFXYFBqnUVv4MsFlulcqRvXOB9WOa18Jw2amp1NLchyj1M348vZ2YHPc5/D+dbViU6FxKWAJBJ+dApa6HqkFg0i3AceKVwwwQO/l386z8fhJ4izhyGSVxXqQW3UkMS2mo29tPb3SyIbtCqPgYA5H3c9vWruChKilFrkjLxuHlUj8xTVtO1m/sLa2xpCiLessuAFAOeRxxwfKtSnNJszZUakoKNkaHRrN49M0lYnWb2eMxs6H3WAwMj7KkcL2aLFKOSGVmrg1CEJtM8YZTgguMg0zxqa0ckS5X0Fq85NQKACgBHV9Mj1OBY5HZGQ5Rhzg/V51bwuKlh5NpXTFTsYa+tPYb+W2ZwxXjKjj4/I+ma6ajVVamppbj0yNAwI3EEHjI4+6pBx0fzmD3+AHNAXPiq0sqRwCSSR/opEuWPr9Xr2FJOcYRcpOyElJR3L3RukJbq//wA9jtpbTHu2yncGP+7gcimYHG4etWyR376FOvOpl7D+mdJ6VDM0Eulk2wmLrCZSVX4cefzNW4Vp+I04jHHy3T1NnFaW0ESxQRIkagBVUYAFaKZTe4pcabBLKXKLk9/d86w8bwinXrOpdq/RFilVajYVrji8FABQAUAVlz0/pd1dPc3FqJJX+kWdsfZnFXIY7EQgoRlZL4CWIrnp2ykjCwAwsO2CWHzBqalxOtB+bzIcm0Ud1oGpCVYYEjYO355m9xB5kjv8q048SoOGZv5c/wADnPTQ0mkaRbaXCViBeVh/eTN9J/5D0HFYmJxc8RK8tuSI0upYZxyOD6VXUnF3W4NXVhmKaESCSRG3j9U8H5V0WG4zRTzVovN1Wq+hWnSna0XoTm+j8lb7KvP/ACDCrZP6L8kX6aYtJdys2Y/dX1FU5/5E83kpXXd/hEiwq5sgrmS2FABQAUAFABQAUAFABQAUAFABQB//2Q==',
descri:'organic-home care product'
  },
{img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQO_pnuMAvp99oRcVRH0gQ8_lpbyGq79OPiVel4Zau15419onClL2l&usqp=CAE&s<p>Organic Body Care And Baby',
descri:'Organic body care and baby care'
}];

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

constructor(private route:Router,private cart:CartService){}

ngOnInit(): void {

}
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
