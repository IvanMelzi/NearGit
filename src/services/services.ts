import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {

  }

  public getGit(api: string) {
    return this.http.get('https://api.github.com' + api).toPromise();
  }


}