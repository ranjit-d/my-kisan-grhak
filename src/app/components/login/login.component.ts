import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

tetet='ranjit'


  constructor(private route:Router){}

  ngOnInit(): void {

  }

  onlogin(item:any){
//     console.warn(item)
// console.log('login action')
// localStorage.setItem('token',Math.random().toString())
this.route.navigate(['home'])
console.warn(item)

  }
}
