import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  subs1: Subscription;
  subs2: Subscription;
  data1: number;
  data2: any[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Example 1
    const singleParamTimer = timer(1000);
    this.subs1 = singleParamTimer.subscribe(res => {
      console.log(res);
      this.data1 = res;
    });
    // Example 2
    const doubleParamTimer = timer(1000, 500);
    this.subs2 = doubleParamTimer.subscribe(res => {
      console.log(res);
      this.data2.push(res);
      if(res === 10) {
        this.subs2.unsubscribe();
      }
    });
  }

  goBack() {
    this.router.navigate(['/'])
  }

}
