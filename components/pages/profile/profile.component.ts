import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  user:User
  
  constructor( private userservice: UserService) {
    this.user = this.userservice.currentUser;
  }
  ngOnInit(): void {
    
    console.log(this.user)
  }

}
