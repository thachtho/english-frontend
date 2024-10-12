import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { map, tap } from "rxjs/operators";
import { UserService } from "../../../../@core/services/user.service";
import { AddButtonComponent } from "../../../../@theme/components/buttons/add/add.component";
import { materialModules } from "../../../pages.i";
import { IUser, Role } from "../users.i";


@Component({
  selector: 'ngx-admin-users-stucents',
  standalone: true,
  imports: [
    ...materialModules,
      AddButtonComponent
  ],
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnInit{
  students: IUser[]
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',

      },
      email: {
        title: 'Email',
        type: 'string',
      },
      nickname: {
        title: 'Nickname',
        type: 'string',
      },
      fullname: {
        title: 'Fullname',
        type: 'string',
      },
      password: {
        title: 'Password',
        type: 'string',
      },
    },
  };

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
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}