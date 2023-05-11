import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StaffComponent } from './staff/staff.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { LsitComponent } from './lsit/lsit.component';
import { ListFilterPipe } from './list-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    StaffComponent,
    AddComponent,
    EditComponent,
    LsitComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
