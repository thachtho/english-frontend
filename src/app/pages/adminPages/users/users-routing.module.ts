import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { NgModule } from "@angular/core";
import { TeachersComponent } from "./teachers/teachers.component";
import { StudentsComponent } from "./students/students.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'teachers',
        component: TeachersComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class UsersRoutingModule {
}