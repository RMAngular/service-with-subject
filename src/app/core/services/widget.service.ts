import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Widget } from "../models/widget.model";
import { first } from "rxjs/internal/operators/first";

@Injectable({
  providedIn: "root"
})
export class WidgetService {
  widgets$ = new BehaviorSubject<Widget[]>([]);

  constructor(private httpClient: HttpClient) {}

  getAll() {
    this.httpClient
      .get<Widget[]>("/api/widgets")
      .subscribe(widgets =>
        this.widgets$.next(widgets)
      );
  }
}
