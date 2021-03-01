import { AbstractControl, ValidatorFn } from "@angular/forms";


export function UserNameValidator(forbiddenName:RegExp){
    return (control:AbstractControl) => {
        const forbidden=forbiddenName.test(control.value)
        return forbidden ? {'forbidden':control.value} : null
    }
}

export function PasswordValidator(control:AbstractControl) {
    const pwd=control.get('password')
    const cpwd=control.get('confirmPassword')

    if(cpwd?.pristine){
        return null
    }

    return pwd?.value!==cpwd?.value ? {'mismatch':true} : null
}