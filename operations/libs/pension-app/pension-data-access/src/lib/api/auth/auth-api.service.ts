import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSignupDTO } from '../../models';
import { environment } from '@operations/util-environments';

export const SIGNUP_URL = environment.server + '/users';

@Injectable({ providedIn: 'root' })
export class PensionAuthApiService {
     http = inject(HttpClient);
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     signup(user: UserSignupDTO): Observable<string> {
          return this.http.post<string>(SIGNUP_URL, { user });
     }
}
