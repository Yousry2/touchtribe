import { APP_BASE_HREF, CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import {
     FormControl,
     FormGroup,
     FormsModule,
     NonNullableFormBuilder,
     ReactiveFormsModule,
     Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PensionAuthApiService, UserSignupDTO, UserStore } from '@operations/pension-data-access';
import { FormGroupType, ondestroy$, doesNotContain, updateAndRevalidate } from '@operations/util-common';

/**
 * SignUpFormData is a type that defines the main form attributes included in the signup form
 */
export type SignUpFormData = UserSignupDTO & { password: string; termsAndConditions: boolean };

/**
 * SignUpForm is a type that defines the form controls included in the signup form
 */
export type SignUpForm = FormGroupType<SignUpFormData>;

export const NAME_VALIDATORS = [Validators.required, updateAndRevalidate<SignUpForm>(['password'], {})];
export const PASSWORD_VALIDATORS = [
     Validators.required,
     Validators.minLength(8),
     Validators.pattern(new RegExp('(?=.*[A-Z])')),
     Validators.pattern(new RegExp('(?=.*[a-z])')),
     doesNotContain<SignUpForm>(['firstName', 'lastName'], {
          containsFirstOrLastName: true,
     }),
];

@Component({
     selector: 'operations-pension-signup',
     standalone: true,
     imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule, FormsModule, RouterModule],
     templateUrl: './pension-signup.component.html',
     styleUrls: ['./pension-signup.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PensionSignupComponent {
     pensionAuthApiService = inject(PensionAuthApiService);
     baseHref: string = inject(APP_BASE_HREF);
     router: Router = inject(Router);
     formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
     signUpForm: FormGroup<SignUpForm> = this.createSignUpForm();
     userStore = inject(UserStore);
     submitted = false;
     isLoading = this.userStore.isLoading;
     destroy$ = ondestroy$();
     buttonText = signal<string>('Sign Up');

     createSignUpForm(): FormGroup {
          return this.formBuilder.group<SignUpForm>(
               {
                    firstName: new FormControl('', {
                         validators: [...NAME_VALIDATORS],
                         nonNullable: true,
                    }),
                    lastName: new FormControl('', {
                         validators: [...NAME_VALIDATORS],
                         nonNullable: true,
                    }),
                    email: new FormControl('', {
                         validators: [Validators.required, Validators.email],
                         nonNullable: true,
                    }),
                    password: new FormControl('', {
                         validators: [...PASSWORD_VALIDATORS],
                         nonNullable: true,
                    }),
                    termsAndConditions: new FormControl(false, {
                         validators: [Validators.requiredTrue],
                         nonNullable: true,
                    }),
               },
               /*
               another way to validate multiple fields in the form , but less control over when we trigger the validation
               { validators: [passwordIncludesName], updateOn: 'submit' },
               */
          );
     }

     submitForm() {
          this.signUpForm.controls.password.updateValueAndValidity();
          this.submitted = true;
          if (this.signUpForm.valid) {
               this.userStore.signup({
                    firstName: this.signUpForm.value.firstName!,
                    lastName: this.signUpForm.value.lastName!,
                    email: this.signUpForm.value.email!,
               });
          }
     }

     get f() {
          return this.signUpForm.controls;
     }
}
