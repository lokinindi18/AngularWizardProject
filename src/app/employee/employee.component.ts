import { Component } from '@angular/core';

@Component({
  selector: 'employee-data',
  templateUrl: './employee.details.html'
})

export class EmployeeComponent{
  empNo: number = 20;
  firstName: string = 'Robert';
  lastName: string = 'Ross';
  city: string = 'Sunrise, Florida';
}