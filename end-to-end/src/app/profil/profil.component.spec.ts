import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ServiceService } from '../service.service';

import { ProfilComponent } from './profil.component';

describe('ProfilComponent', () => {
  let component: ProfilComponent;
  let fixture: ComponentFixture<ProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilComponent ],
      imports:[HttpClientModule],
      providers:[
        {provide :ServiceService, useValue: {
          numberusers:()=>(20)}
        }
      ]
      
    })
    .compileComponents();
  });
  let Infoperson = {
    firstName: 'maissa',
    latsName: 'gallah',
    birthday: '04/12/1998',
    city: 'Ariana' ,
    number:'55222300'};

  beforeEach(() => {
  fixture = TestBed.createComponent(ProfilComponent);
  component = fixture.componentInstance;
  component.person = Infoperson; // Assign stub to component property
  fixture.detectChanges(); // calls NgOnit  
});
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
function DriftInfoDisplayComponent(DriftInfoDisplayComponent: any): ComponentFixture<ProfilComponent> {
  throw new Error('Function not implemented.');
}

