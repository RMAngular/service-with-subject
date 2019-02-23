import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { UserService } from "../../../core/services/user.service";
import { User } from "../../../core/models/user.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.users$;
    this.userService.loadByRole("Standard");
  }

  onRoleChange(role) {
    this.userService.loadByRole(role);
  }
}
