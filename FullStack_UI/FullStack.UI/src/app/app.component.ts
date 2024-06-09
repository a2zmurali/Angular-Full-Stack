import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private sharedservice : AuthService ,private route:Router){

  }

  title = 'FullStack.UI';

  IsloggedIn :boolean = false ;
  IsloggedOut :boolean = true ;
  ngOnInit(): void {
    this.sharedservice.IsLoggedin$.subscribe({
     next:(data)=>{
      this.IsloggedIn = data ;
      this.IsloggedOut = !data ;

     }
    })
   }

   SignOut(){
    this.sharedservice.LoggedOut(false);
   this.route.navigate(['/login']);
   }



}
