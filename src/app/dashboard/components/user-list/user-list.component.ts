import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }
}
