import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  userData!:User

  ngOnInit(): void {
  }

  setUserData(data:any){
    if(data.status === 404){
      this.userData = data.data.message     
    }else{
      this.userData = data
    }
  }

}
