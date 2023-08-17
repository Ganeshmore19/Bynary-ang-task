import { Injectable } from '@angular/core';
import { Profile } from 'src/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profiles: Profile[] = [
    {
      name: 'John Doe',
      photoUrl: '...',
      description: 'Software Developer',
      address: '123 Main St, City, Country'
    },
    // Add more profiles...
  ];
  getProfiles(): Profile[] {
    return this.profiles;
  }

}
