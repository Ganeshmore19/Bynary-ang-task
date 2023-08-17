import { Component, Input, SimpleChanges } from '@angular/core';
import { Profile } from 'src/profile.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input()
  profile: Profile | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['profile']) {
      this.loadMap();
    }
  }

  private loadMap() {
    // Implement the logic to load the map using the Google Maps API or your preferred map service.
    // Set up markers and render addresses on the map.
  }
}

