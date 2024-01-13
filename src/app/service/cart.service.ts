import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public cartsubject=new BehaviorSubject<any>([])


constructor(){}

}
