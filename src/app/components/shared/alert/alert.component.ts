import { Component, OnInit, Input } from '@angular/core';
 
export interface Alert{
  title: string,
  message: string,
  classes: Array<any>
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  @Input() alert: Alert;

  constructor() { 
    this.alert = {
      title: '',
      message: '',
      classes: []
    }

  }

  ngOnInit() {
  }

}
