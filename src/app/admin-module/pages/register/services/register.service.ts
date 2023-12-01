import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';
import { User } from 'src/app/shared/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService {
  protected  resourceName: string;
  protected  resourceBaseUrl: string;


  constructor( http: HttpClient) {
    super(http);
    this.resourceName =  'Account/register-user'
    this.setResourceName(this.resourceName)
  }

  public register(userInfo: User ): Observable<any> {
    return this.http.post(this.resourceBaseUrl, userInfo);
  }
}