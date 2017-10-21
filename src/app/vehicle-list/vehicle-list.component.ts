import { Vehicle } from '../model/vehicle';
import { VehicleService } from '../model/vehicle.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  providers: [VehicleService]
})

export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  constructor(private vehicleService: VehicleService) {
    console.log('VehicleListComponent-> constructor() called.');
    this.vehicles = this.vehicleService.getVehicles();
  }

  ngOnInit() {
    console.log('VehicleListComponent-> ngOnInit() called.');
  }

  onSelect(vehicle: Vehicle) {
    console.log('VehicleListComponent-> onSelect() called.');
    this.selectedVehicle = vehicle;
  }

}
