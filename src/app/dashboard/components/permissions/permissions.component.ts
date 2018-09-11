import { Component, OnInit } from "@angular/core";
import { User } from "../../../core/models/user.model";
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-permissions",
  templateUrl: "./permissions.component.html",
  styleUrls: ["./permissions.component.css"]
})
export class PermissionsComponent implements OnInit {
  @Input()
  users: User[];

  @Output() userClick = new EventEmitter<User>();

  constructor() {}

  ngOnInit() {}
}
