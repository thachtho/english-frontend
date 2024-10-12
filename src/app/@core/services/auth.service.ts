import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient
    ) {}

    login(): Observable<number> {
        const bodyLogin = {
            "nickname": "bttf",
            "password": "111111"
        }

        return this.http.post<number>('auth/login', bodyLogin)
    }
}