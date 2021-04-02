import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], searchCriteria): User[] {
    if(users==null || searchCriteria==null || searchCriteria=='')return users;
  
    let selectedUsers: User[] = [];
    searchCriteria=searchCriteria.toLowerCase();
    for (let user of users){
      if (
        user.username.toLowerCase().includes(searchCriteria)
        || user.firstName.toLowerCase().includes(searchCriteria)
        || user.lastName.toLowerCase().includes(searchCriteria)
        || user.email.toLowerCase().includes(searchCriteria)
        || user.phoneNumber.toLowerCase().includes(searchCriteria)


        ) {
        selectedUsers.push(user);
      }
    }
    return selectedUsers;
  }

}
