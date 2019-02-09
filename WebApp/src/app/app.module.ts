import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavMenuComponent } from './top-nav-menu/top-nav-menu.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule} from '@angular/material';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavMenuComponent,
    SideNavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
