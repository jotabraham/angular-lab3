import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  userProfile: UserProfile = {
    name: "John",
    contact: "jotabraham@gmail.com",
    bio: "hello there",
  }

  constructor() { }

  getUserProfile = () => {

  }

}
