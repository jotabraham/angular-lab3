import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  myUserProfile!: UserProfile;

  // via profileService, edit.component has access to service
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.myUserProfile = this.profileService.getUserProfile();
  }

  formSubmission = (form:NgForm):void =>{
    console.log(form);
    let updatedProfile: UserProfile = {
      name: form.form.value.name,
      contact: form.form.value.contact,
      bio: form.form.value.bio,
    }
    this.profileService.setUserProfile(updatedProfile);
    this.router.navigate(["profile"]);
    // now that the html form is linked to this method
    // we need a method in the service to do the lifting
  }
}
