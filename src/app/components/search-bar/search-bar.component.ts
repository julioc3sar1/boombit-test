import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  
  search:string = ""
  @Output() searchResult = new EventEmitter<any>()

  constructor(
    private userService:UsersService
  ) { }

  ngOnInit(): void {
    
  }

  searchUser(){
    this.userService.getUser(this.search).then(res => {
      console.log(res)
      this.searchResult.emit(res.data)
    }).catch(error => {
      // console.log(error.response)
      // console.log(error.response.data.message)
      this.searchResult.emit(error.response)
    })
  }

}
