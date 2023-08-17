import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/profile.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit{
  profiles: Profile[] | undefined;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profiles = this.profileService.getProfiles();
}
}
