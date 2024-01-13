import { Component } from '@angular/core';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})
export class SpicesComponent {

  spicesitem=[
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsvBAlD3pkjiZdCptiPrsjeT-ZLb6wEgHzMTf9BGrDbdxDQGUQpes&usqp=CAE&s',
  descri:'Grind Spices'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDIJccb5ppBvZAUEHH_d2fWePEm_aOW_TGMDgSBw4uRE0K7s60xgs&usqp=CAE&s',
  descri:'Whole Spices'},
  {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs12qK6hwjm3M7Tkvy-5-hmva8gkav_8WHBWmgtO7QFT4zLyADaul9&usqp=CAE&s',
  descri:'Ready to Mix'},


  ]
}
