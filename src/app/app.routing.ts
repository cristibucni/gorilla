﻿import {Routes, RouterModule} from "@angular/router";

import {HomeComponent} from "./home";
import {LoginComponent} from "./login";
import {RegisterComponent} from "./register";
import {AuthGuard} from "./_helpers";
import {GorillaProfileComponent} from "./gorilla-profile/gorilla-profile.component";
import {MarketComponent} from "./market/market.component";

const routes: Routes = [
  {path: "", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "gorilla-profile", component: GorillaProfileComponent},
  {path: "market", component: MarketComponent},

  // otherwise redirect to home
  {path: "**", redirectTo: ""},
];

export const appRoutingModule = RouterModule.forRoot(routes);
