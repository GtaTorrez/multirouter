import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent implements OnInit {
  currentvalue;
  constructor(private rute:ActivatedRoute) { }

  ngOnInit() {
    this.rute.params.subscribe((values:{id:number})=>{
      this.currentvalue=values.id;
    })
  }


}
