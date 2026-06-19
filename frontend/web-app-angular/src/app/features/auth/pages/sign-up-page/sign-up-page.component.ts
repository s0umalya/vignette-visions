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
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    VvInputComponent,
    VvButtonComponent
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {

  private fb = inject(FormBuilder);

  private authApiService =
    inject(AuthApiService);

  signUpForm = this.fb.nonNullable.group({

    firstName: [
      '',
      Validators.required
    ],

    lastName: [
      '',
      Validators.required
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    phoneNumber: [''],

    gender: [''],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ],

    confirmPassword: [
      '',
      Validators.required
    ]

  });

  onSubmit(): void {

    if (this.signUpForm.invalid) {
      return;
    }

    const formValue =
      this.signUpForm.getRawValue();

    this.authApiService.register({

      firstName: formValue.firstName,

      lastName: formValue.lastName,

      email: formValue.email,

      phoneNumber:
        formValue.phoneNumber || undefined,

      gender:
        formValue.gender || undefined,

      password: formValue.password

    })
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