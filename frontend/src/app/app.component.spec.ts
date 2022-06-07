import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ServiceService } from './service.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[HttpClientModule],
      providers: [{
        provide:ServiceService ,
        useValue:{
          numberusers:()=>of(10)
        }
      }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  let showt="false"


  it(`should have as title 'evax-example and verify initial variable'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('evax-example');
    expect(app.show).toBeFalsy();
    expect(app.subscribed).toEqual(0);
    expect(app.vaccinated).toEqual(-1);  
  });

  it('should render the name of the project', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#name-project')?.textContent).toContain('EVAX');
  });
});


