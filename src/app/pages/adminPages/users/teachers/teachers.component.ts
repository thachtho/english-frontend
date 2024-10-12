import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { map, tap } from "rxjs/operators";
import { UserService } from "../../../../@core/services/user.service";
import { AddButtonComponent } from "../../../../@theme/components/buttons/add/add.component";
import { materialModules } from "../../../pages.i";
import { IUser, Role } from "../users.i";


@Component({
  selector: 'ngx-admin-users-teachers',
  standalone: true,
  imports: [
    ...materialModules,
      AddButtonComponent
  ],
  templateUrl: './teachers.component.html',
})
export class TeachersComponent implements OnInit{
  teachers: IUser[]
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
    this.userService.getAll(Role.TEACHER).pipe(tap((teachers) => {
      this.teachers = teachers;
      this.loadTeachers()
    })).subscribe()
  }

  loadTeachers() {
     this.source.load(this.teachers||[]);
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