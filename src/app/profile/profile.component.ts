import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  // userProfile is empty until called by method below
  // method comes from service
  userProfile!: UserProfile;

  // constructor acts as a bridge between service and component
  // above we've declared a property to store what has been passe over
  constructor(private profileService: ProfileService) { }

  // below we are calling the function in the service and storing it in the userProfile
  ngOnInit(): void {
    this.userProfile = this.profileService.getUserProfile();
  }
  // from here build out the html that will be supported by these methods/data

}
