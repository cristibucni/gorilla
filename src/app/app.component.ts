import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {AuthenticationService} from "./_services";
import {User} from "./_models";
import {Gorilla} from "./gorilla";
import "./_content/app.less";
import {GorillaService} from "./gorilla.service";

@Component({
  selector: "app",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  currentUser: User;
  gorilla: Gorilla;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private gorillaService: GorillaService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    this.gorilla = this.gorillaService.getGorilla();
    this.gorillaService.coins$.subscribe(newValue => {
      this.gorilla.coins = newValue;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
