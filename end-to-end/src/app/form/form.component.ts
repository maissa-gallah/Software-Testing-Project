import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators }  from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  profil={
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    city: '',
    sex: '',
    phone: '',

  }

  profileForm = new FormGroup({
    'firstName': new FormControl(this.profil.firstName, [
        Validators.required,
        Validators.minLength(4)
    ]),
    'lastName': new FormControl(this.profil.lastName, [
        Validators.required,
        Validators.minLength(4)
    ]),
    'email': new FormControl(this.profil.email, [
      Validators.required,
      Validators.email
    ]),

    'birthday': new FormControl(this.profil.birthday, Validators.required),
    'city': new FormControl(this.profil.city, [
      Validators.required,
      Validators.minLength(4)
    ]),
    'sex': new FormControl(this.profil.lastName, [
      Validators.required,
      Validators.minLength(4)
    ]),
    'phone': new FormControl(this.profil.email, [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(8)
]),
});
  

  submited=false;
  
  @Output()valueSubscibedChanged=new EventEmitter();
  @Output()newUser=new EventEmitter();
  formGroup: any;
  constructor(private service:ServiceService) { 
  
  }
  id:any;

   onSubmit() {
    console.log(this.profileForm.value);
    this.id= this.service.adduser(this.profileForm.value);
    this.valueSubscibedChanged.emit(this.profileForm.value); 
    this.newUser.emit(this.id);
    this.submited=true;
  }

  ngOnInit(): void {
  }

}
