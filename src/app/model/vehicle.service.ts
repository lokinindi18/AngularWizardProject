import { Injectable } from '@angular/core';
import { Vehicle } from "./vehicle";

let vehiclesList = [
  {
      id: 1,
      name: 'Trailer - 1',
      type: 'Truck',
      mass: 40
  },
  {
      id: 2,
      name: 'An-2',
      mass: 5
  },
  {
      id: 3,
      name: 'LandCruiser 80',
      type: 'Jeep',
      mass: 2
  },
  {
      id: 4,
      name: 'Porchee 81',
      type: 'Porchee',
      mass: 21
  },
];

@Injectable()
export class VehicleService {

  private vehicles: Vehicle[];

  constructor() {
      this.vehicles = vehiclesList;
  }

  getVehicles() {
      return this.vehicles;
  }

}
