import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  userProfile: UserProfile = {
    name: "John",
    contact: "helloworld@world.hello",
    bio: "hello there",
  }

  constructor() { }

  // if you call this, it will return everything above
  // you are in the service tab
  // this info needs to be injected to the profile ts
  getUserProfile = ():UserProfile => {
    return this.userProfile;
  }

  // this method was created AFTER the formSubmission in edit.ts
  setUserProfile = (updatedProfileObject: UserProfile):void => {
    this.userProfile = updatedProfileObject;
  }
}
