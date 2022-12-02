import { Injectable } from '@angular/core';
import { Octokit } from "octokit"
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  

  octokit = new Octokit({
    auth: environment.TOKEN
  });

  public getUsers(since:number,per_page:number){
    return this.octokit.request('GET /users{?since,per_page}', {
      since,
      per_page
    })
  }

  public getUser(username:string){
    return this.octokit.request('GET /users/{username}', {
      username
    })
  }

  constructor() { }
}
