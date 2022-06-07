import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Output()valueSubscibedChanged=new EventEmitter();
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(''),
    city: new FormControl(''),
    birthday: new FormControl(''),
    sex: new FormControl(''),
  });
  onSubmit() {
    console.warn(this.profileForm.value);
    if(this.profileForm.value!=null){ 
    this.valueSubscibedChanged.emit(this.profileForm.value);
  }
    
  }

 

  constructor() { }

  ngOnInit(): void {
  }

}
