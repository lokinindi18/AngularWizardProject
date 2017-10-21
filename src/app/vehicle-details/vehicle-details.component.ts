import { Vehicle } from '../model/vehicle';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  @Input()
  vehicle: Vehicle;

  constructor() { }

  ngOnInit() {
  }

}
