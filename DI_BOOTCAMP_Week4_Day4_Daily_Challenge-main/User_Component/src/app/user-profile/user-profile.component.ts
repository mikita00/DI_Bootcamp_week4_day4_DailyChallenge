import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

   user= {
    firstName: 'Kone',
    lastName: 'Yaya',
    profilePictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3CozZetOAxhRWyJxH_hxfmzU5KepkFPohcihUCp7rQ&s"
  }
  getFullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

}
