import { Component, OnInit } from "@angular/core";
import { User } from "../../../core/models/user.model";
import { Input } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input()
  users: User[];
}
