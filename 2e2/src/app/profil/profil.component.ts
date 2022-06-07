import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  @Output()valueVaccinetedChanged=new EventEmitter();

  @Input () person:any;
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log('khraaaa');
    this.valueVaccinetedChanged.emit("incrementerr");  
  }

}
