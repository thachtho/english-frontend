import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { map, tap } from "rxjs/operators";
import { UserService } from "../../../../@core/services/user.service";
import { AddButtonComponent } from "../../../../@theme/components/buttons/add/add.component";
import { materialModules } from "../../../pages.i";
import { IUser, Role } from "../users.i";
import { SelectOptionComponent } from "../../../../@theme/components/buttons/select-option/select-option.component";
import { studentSettings } from "./student.i";


@Component({
  selector: 'ngx-admin-users-stucents',
  standalone: true,
  imports: [
    ...materialModules,
    AddButtonComponent,
    SelectOptionComponent
  ],
  templateUrl: './students.component.html',
  styleUrls: ['students.component.scss'],
})
export class StudentsComponent implements OnInit{
  settings = studentSettings;
  students: IUser[]
  courseTitle: string = "Khóa học";
  classTitle: string = "Lớp";
  classList = [
    { id: 1, name: "10A1" },
    { id: 2, name: "10A2" },
    { id: 3, name: "10A3" },
  ]
  courses = [
    { id: 1, name: "2021-2022" },
    { id: 2, name: "2022-2023" },
    { id: 3, name: "2023-2024" },
  ]

  source: LocalDataSource = new LocalDataSource();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll(Role.STUDENT).pipe(tap((teachers) => {
      this.students = teachers;
      this.loadStudents()
    })).subscribe()
  }

  loadStudents() {
     this.source.load(this.students||[]);
  }

  handleAdd() {
    alert("Parent alert!.")
  }

  onDeleteConfirm(event): void {
    alert("Are you sure you want to delete?")
  }
}