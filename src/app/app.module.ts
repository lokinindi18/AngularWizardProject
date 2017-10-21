import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/student-service';
import { StudentDetailsComponent } from './student-details/student-details.component';

@NgModule({
  imports: [BrowserModule, BrowserModule, FormsModule, FormsModule, HttpModule],
  declarations: [AppComponent, EmployeeComponent, VehicleListComponent, VehicleDetailsComponent, StudentComponent, StudentDetailsComponent],
  bootstrap: [AppComponent],
  providers: [StudentService]
})
export class AppModule {}