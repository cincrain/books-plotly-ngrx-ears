import { Component, OnInit, Input, Output, ChangeDetectionStrategy
  , EventEmitter
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Authenticate } from '../../models/user';


@Component ({
  selector: 'bc-login-form',
  template: `
  <mat-card>
    <mat-card-title>로그인</mat-card-title>
    <mat-card-content>
      <form [formGroup]="form" (ngSubmit)="submit ()">
        <p>
          <mat-form-field>
            <input type="text" matInput placeholder="Username"
              formControlName="username" >
          </mat-form-field>
        </p>
        <p>
          <mat-form-field>
            <input type="password" matInput placeholder="Password"
              formControlName="password" >
          </mat-form-field>
        </p>

        <p *ngIf="errorMessage" class="loginError">{{ errorMessage }}</p>

        <p class="loginButtons">
          <button type="submit" mat-button>
            Login
          </button>
        </p>
      </form><!--e form -->
    
    </mat-card-content>
  </mat-card>  
  `,
  styleUrls: ['./login-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  @Input  ()
  set pending (isPending: boolean) {
    if (isPending) {
      this.form.disable ();
    } else {
      this.form.enable ();
    }
  }//e pending

  @Input  () errorMessage: string | null;
  @Output () submitted     = new EventEmitter<Authenticate> ();

  form: FormGroup = new FormGroup ({
    username:  new FormControl (''),
    password:  new FormControl (''),
  });

  constructor () {
  }//e constructor
  ngOnInit () {
  }//e ngOnInit


  submit () {
    if (this.form.valid) {
      this.submitted.emit (this.form.value);
    }
  }//e submit
}
//e class
