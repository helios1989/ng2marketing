import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  lat: number = 51.520810;
  lng: number = -0.143020;
  constructor() { }

  ngOnInit() {
  }

}
