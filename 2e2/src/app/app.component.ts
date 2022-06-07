import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evax-example';
  person:any;
  show=false;
  subscribed=0;
  vaccinated=-1;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.numberusers().subscribe((data:any)=>{
      this.subscribed = data;
    })  
    this.service.numbervaccinated().subscribe((data:any)=>{
      this.vaccinated = data;
    })  
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  showValue(value:any){
    this.person=value;
    this.subscribed++;
    this.show=true;
    }
    incrementVaccinated(value:string){
      this.vaccinated++;
      }
  
}
