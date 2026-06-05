import { Component } from '@angular/core';
import { UserApi, User } from '../../../core/services/user-api';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { firstCharToUpperCase } from '../../../shared/firstUpperCase.pipe';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule, firstCharToUpperCase],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {

   userList$! : Observable<User[] >;
  constructor(private userService : UserApi){}
 
  ngOnInit(){
     this.userList$ = this.userService.getUsers();
  }  
  
}
