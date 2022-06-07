import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceService } from '../service.service';

import { FormComponent } from './form.component';


describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  const fakeActivatedRoute = {
    snapshot: {
      queryParams: {
        returnUrl: '/'
      }
    }
  };
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,HttpClientModule],
      declarations: [FormComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useFactory: () => fakeActivatedRoute },
        {provide :ServiceService, useValue: {
          adduser:()=>(4)}}]})
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(FormComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      fixture.detectChanges();
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should contain title of the form', () => {
    const fixture = TestBed.createComponent(FormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    ;    
    expect(compiled.querySelector('[data-test-id="title-form"]')?.textContent).toContain('Register in EVAX');
  });
  
  it("should verify the innerttext of the button", () => {
    const button = fixture.debugElement.query(By.css('button'));
  button.triggerEventHandler('click', {});
  fixture.detectChanges();
  expect(
    fixture.debugElement.query(By.css('button')).nativeElement.innerText
  ).toEqual('SUBMIT');

  });
  

  it('form has validators', () => {
    component.profileForm.hasValidator
    expect(component.profileForm.hasValidator); 
  });
  

  it('firstname field validity', () => {
    let firstname = component.profileForm.controls['firstName']; 
    firstname.setValue('aaa')
    expect(firstname.valid).toBeFalse(); 
  });



  let arraySex =["male" , "female"]
  
  it('sex field exist', () => {
    let sex = component.profileForm.controls['sex']; 
    sex.setValue('female')  
    expect(arraySex.indexOf(sex.value)).toBeGreaterThan(0);
  })

  

  it('should require valid form', () => {
    component.profileForm.setValue({
      "firstName": "maissa", 
      "lastName": "gallah", 
      "email": "aaaa@gmail.com", 
      "birthday": "04/12/1998", 
      "city": "aaaa", 
      "sex": "male", 
      "phone": "20999999",
      
    });
    expect(component.profileForm.valid).toEqual(true);
  });

it('submitting a form emits a user', async () => {
  component=fixture.componentInstance
  expect(component.profileForm.valid).toBeFalsy();
  component.profileForm.setValue({
    "firstName": "maissa", 
    "lastName": "gallah", 
    "email": "aaaa@gmail.com", 
    "birthday": "04/12/1998", 
    "city": "aaaa", 
    "sex": "male", 
    "phone": "20999999",
    
  });
  expect(component.profileForm.valid).toBeTruthy();
  let user: any;
  // Subscribe to the Observable and store the user in a local variable.
  component.newUser.subscribe((value) => user = value);
  // Trigger the login function
   await component.onSubmit()
   expect(component.id).toEqual(4)
});

  it('should not output duplicate values', () => {
    let component=fixture.componentInstance       
    spyOn(component.newUser, 'emit');
    component.id = 1;
    component.onSubmit();
    expect(component.newUser.emit).toHaveBeenCalled();
  });


});




