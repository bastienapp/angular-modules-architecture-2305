import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignInComponent } from './components/feature/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent,
    SignInComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class UserModule { }
