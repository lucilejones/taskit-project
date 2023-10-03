import { Component } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  user: User = new User(
    'Johanna Profile',
    'email@email.com'
  )
}
