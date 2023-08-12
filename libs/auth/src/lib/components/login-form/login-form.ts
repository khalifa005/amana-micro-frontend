import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { IAuthenticate } from "libs/data-models/src/lib/IAuthenticate";

export class LoginForm extends FormGroup {

  readonly Username = this.get('Username') as FormControl;
  readonly Password = this.get('Password') as FormControl;

  constructor(readonly model: IAuthenticate, readonly fb: FormBuilder = new FormBuilder())
  {
    super(

      fb.group({
        Username: [model?.Username, [Validators.required, Validators.max(200), Validators.min(4) ]],
        Password: [model?.Password, [Validators.required, Validators.max(200), Validators.min(4)]],
    }).controls

    );
  }
}
