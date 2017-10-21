import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Student } from '../student/student';
import { StudentService } from '../student/student-service';

@Component( {
    selector: 'student-details',
    templateUrl: './student-details.component.html',
    styleUrls: ['./student-details.component.css']
} )
export class StudentDetailsComponent implements OnInit {
    @Input()
    student: Student;
    constructor(studentService : StudentService) { }

    ngOnInit() {
    }

}
