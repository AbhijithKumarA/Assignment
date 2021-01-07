import { AuthGuard } from './services/auth.guard';
import { UserService } from './services/user.service';
import { RegisterService } from './services/register.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateService } from './services/create.service';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentService } from './services/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateTicketComponent,
    MyTicketsComponent,
    TicketDetailsComponent,
    LoginComponent,
    HomeComponent,
    BsNavbarComponent,
    RegisterComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'create-ticket', component: CreateTicketComponent, canActivate: [AuthGuard] },
      { path: 'my-tickets', component: MyTicketsComponent, canActivate: [AuthGuard] },
      { path: 'ticket-details', component: TicketDetailsComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: '', component: HomeComponent },
      { path: 'register', component: RegisterComponent }
    ]),
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    CreateService,
    RegisterService,
    UserService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
