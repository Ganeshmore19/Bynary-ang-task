import { Component, Input } from '@angular/core';
import { Profile } from 'src/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
   @Input() Profile: Profile | undefined;
}
