import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const aouthGuard: CanActivateFn = (route, state) => {
  const token=localStorage.getItem('token');
  const router=inject(Router);
  console.log('I am in auth guard')
  console.log('token',token);
  if(token){
    return true;
  }else{
    router.navigate(['login']);
    return false;
  }

  return false;
};
