var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Student } from '../student/student';
import { StudentService } from '../student/student-service';
export var StudentDetailsComponent = (function () {
    function StudentDetailsComponent(studentService) {
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', Student)
    ], StudentDetailsComponent.prototype, "student", void 0);
    StudentDetailsComponent = __decorate([
        Component({
            selector: 'student-details',
            templateUrl: './student-details.component.html',
            styleUrls: ['./student-details.component.css']
        }), 
        __metadata('design:paramtypes', [StudentService])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());
//# sourceMappingURL=student-details.component.js.map