import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    // tslint:disable-next-line:curly
    if ((control.value as string).indexOf(' ') >= 0)
      return {cannotContainSpace: true};
    return null;
  }
}
