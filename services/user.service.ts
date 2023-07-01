import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/interrfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';
import {IUserRegister } from '../shared/interrfaces/IUserRegister'
import{ USER_REGISTER_URL } from '../shared/constants/urls'

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject =  new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable : Observable<User> 
  constructor( private http: HttpClient, private toastrService:ToastrService) {
    this.userObservable =this.userSubject.asObservable();
   }

   public get currentUser():User{
    return this.userSubject.value;
   }
   login (userLogin:IUserLogin):Observable<User>{
     return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next:(user)=>{
          this.setUserToLocalStorage(user)
            this.userSubject.next(user); 
            this.toastrService.success(
              `Welcome to Foodmine ${user.name}!`,
              'Login Successful'
            )  
        },
        error:(erroreResponse) =>{
         this.toastrService.error(erroreResponse.error,'Login Failed')
        }
      })
     );
   }


   register(userRegiser:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegiser).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Foodmine ${user.name}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
            'Register Failed')
        }
      })
    )
  }



logout(){
  this.userSubject.next(new User());
  localStorage.removeItem(USER_KEY);
  window.location.reload();
}

private setUserToLocalStorage(user: User) {
  localStorage.setItem (USER_KEY,JSON.stringify(user));
}

private getUserFromLocalStorage():User {
  const userJson = localStorage.getItem(USER_KEY);
  if (userJson) return JSON.parse (userJson) as User;
  return new User();
}
}
