import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      if(state.url==='/login'){
          sessionStorage.clear();
          return true;
      }

      if (sessionStorage.getItem('authToken')) {
          return true;
      }

      this._router.navigate(['/login']);
      return false;
  }
  
}
