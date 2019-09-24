import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
////////
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material";
import {MatTabsModule} from "@angular/material";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ModalModule} from "./_modal";

import {AngularSvgIconModule} from "angular-svg-icon";
// used to create fake backend
import {fakeBackendProvider} from "./_helpers";

import {appRoutingModule} from "./app.routing";
import {JwtInterceptor, ErrorInterceptor} from "./_helpers";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home";
import {LoginComponent} from "./login";
import {RegisterComponent} from "./register";
import {AlertComponent} from "./_components";
import {CharacterComponent} from "./character/character.component";

import {VerticalTimelineModule} from "angular-vertical-timeline";
import {GorillaComponent} from "./gorilla/gorilla.component";
import {GorillaProfileComponent} from "./gorilla-profile/gorilla-profile.component";
import {MarketComponent} from "./market/market.component";
import {InventoryComponent} from "./inventory/inventory.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    VerticalTimelineModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    MatButtonToggleModule,
    ModalModule,
    FormsModule,
    AngularSvgIconModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    CharacterComponent,
    GorillaComponent,
    GorillaProfileComponent,
    MarketComponent,
    InventoryComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
