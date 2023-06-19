import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: [
  ]
})
export class SignInComponent {

  authentication = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  signIn() {
    if (this.authentication.valid) {
      const { email, password } = this.authentication.value;
      if (email && password) {
        this.userService.login(email, password)
          .subscribe((user: User | null) => {
            if (user) {
              // user is connected
            } else {
              // TODO catch error
              alert('Indentifiants incorrects')
            }
          });
      } else {
        // TODO catch error
        alert('Error!');
      }
    } else {
      // TODO catch error
      alert('Error!');
    }
  }
}
