import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SubmitButtonComponent } from '../../components';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconButton,
    NgIf,
    MatIconModule,
    SubmitButtonComponent,
  ],
  templateUrl: './signin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent implements OnInit {
  public isSubmiting = false;
  public isSubmitClicked = false;
  public signInForm!: FormGroup;
  public sigIsShowPw = signal(false);

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
    this.sigIsShowPw.update((v) => !v);
  }

  public onSubmit() {
    this.isSubmitClicked = true;

    if (this.signInForm.invalid) {
      return;
    }

    console.log('Form data:', this.signInForm.value);
  }
}
