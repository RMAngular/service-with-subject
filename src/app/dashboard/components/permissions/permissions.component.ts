import { Component } from "@angular/core";
import { User } from "../../../core/models/user.model";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-permissions",
  templateUrl: "./permissions.component.html",
  styleUrls: ["./permissions.component.css"]
})
export class PermissionsComponent {
  @Input() users: User[];

  @Output() userClick = new EventEmitter<User>();

  onUserClick(user: User) {
    this.userClick.emit(user);
  }
}
