/* eslint-disable prefer-const */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { LoginForm } from './login-form';
/* eslint-disable @angular-eslint/no-output-native */
import { IAuthenticate } from './../../../../../data-models/src/lib/IAuthenticate';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amana-micro-frontend-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit , OnDestroy {
  // @Output() submit = new EventEmitter<IAuthenticate>();
  @Output() submitForm = new EventEmitter<IAuthenticate>();

  form!: LoginForm;

  modelDto: IAuthenticate = {
    Username:'',
    Password:'',
};

  ngOnInit() {

    // this.getLookups();

    // if(this.passedModelDto){
    //   this.modelDto = this.passedModelDto;
    //   this.isUpdateMode = true;
    // }
    //GET from api service and ini the form
      this.form = new LoginForm(this.modelDto);
  }

  login() {
    if (this.form.valid) {
      this.handleForm(this.form);
    }
  }


  handleForm(form: LoginForm): void {
    let finalModelDto =  this.mapFormToDto(form);

    this.submitForm.emit({
      Username: finalModelDto.Username,
      Password: finalModelDto.Password
    } as IAuthenticate);


  }

  private mapFormToDto(form: LoginForm): IAuthenticate {
    return {
      ...form.value,
    } as IAuthenticate;
  }

  ngOnDestroy() {
    // this.subs.forEach((s) => s.unsubscribe());
  }

}

