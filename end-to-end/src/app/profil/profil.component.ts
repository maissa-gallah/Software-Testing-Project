import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  

  vaccinated=false;
  @Output()valueVaccinetedChanged=new EventEmitter();
  @Input () person:any;

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.service.numberusers().subscribe((data:any)=>{
      this.idUserUpdated = data;
    }) 
  }
  idUserUpdated:any;
  onsubmit(){
    this.vaccinated=true;
    this.valueVaccinetedChanged.emit("incrementerr");
    this.idUserUpdated++;
    this.service.upadteuser(this.idUserUpdated); 
  }

}
