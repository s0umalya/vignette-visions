import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { RouterLink } from '@angular/router';

import { AuthApiService } from '../../services/auth-api.service';

import { VvInputComponent } from '../../../../shared/components/ui/vv-input/vv-input.component';
import { VvButtonComponent } from '../../../../shared/components/ui/vv-button/vv-button.component';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    VvInputComponent,
    VvButtonComponent
  ],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.scss'
})
export class SignInPageComponent {

  private fb = inject(FormBuilder);

  private authApiService =
    inject(AuthApiService);

  signInForm = this.fb.nonNullable.group({

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      Validators.required
    ]

  });

  onSubmit(): void {

    if (this.signInForm.invalid) {
      return;
    }

    this.authApiService
      .login(
        this.signInForm.getRawValue()
      )
      .subscribe({

        next: response => {

          console.log(response);

        },

        error: error => {

          console.error(error);

        }

      });

  }

}