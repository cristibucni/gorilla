import {Component, OnInit, Input} from "@angular/core";
import {first} from "rxjs/operators";
import {User} from "../_models/user";
import {AuthenticationService} from "../_services/authentication.service";
import {UserService} from "../_services/user.service";
import {GorillaService} from "../gorilla.service";
import {Gorilla} from "../gorilla";

@Component({templateUrl: "home.component.html"})
export class HomeComponent implements OnInit {
  currentUser: User;
  users = [];
  gorilla;
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private gorillaService: GorillaService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
    this.gorillaService.gorilla$.subscribe(gorilla => {
      this.gorilla = gorilla;
    });
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => (this.users = users));
  }
}
