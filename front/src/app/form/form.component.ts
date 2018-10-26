import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  public lat: any;
  public long: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  updateValues() {
    localStorage.setItem('latlong', `${this.lat}/${this.long}`);
    this.router.navigate(['show']);
  }

}
