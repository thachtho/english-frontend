import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { IUser } from "../../pages/adminPages/users/users.i";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient
    ) {}

    getAll(type: number): Observable<IUser[]> {
        return this.http.get<IUser[]>(`users?typeGet=${type}&organizationId=1`)
    }
}