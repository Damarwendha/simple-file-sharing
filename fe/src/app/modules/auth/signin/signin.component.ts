import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    NgFor,
    MatIconModule,
  ],
  templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
  public isSubmiting = false;
  public isSubmitClicked = false;
  public signInForm!: FormGroup;
  public readonly isShowPw = signal(false);

  /**
   * Pastikan fields & validators terdefinisi sama dengan yang ada di @_createSignInForm
   */
  public readonly validations = {
    email: [
      { validator: 'required', msg: 'This field is required' },
      { validator: 'email', msg: 'Invalid email' },
    ],
    password: [{ validator: 'required', msg: 'This field is required' }],
  };

  constructor(private readonly _formBuilder: FormBuilder) {}

  private _createSignInForm() {
    this.signInForm = this._formBuilder.group({
      email: ['', { validators: [Validators.required, Validators.email] }],
      password: ['', { validators: [Validators.required] }],
    });
  }

  public ngOnInit() {
    this._createSignInForm();
  }

  public get controls() {
    return this.signInForm.controls;
  }

  public onTogglePw() {
    this.isShowPw.update((v) => !v);
  }

  public onSubmit() {
    this.isSubmitClicked = true;

    if (this.signInForm.invalid) {
      return;
    }

    console.log('Form data:', this.signInForm.value);
  }
}
