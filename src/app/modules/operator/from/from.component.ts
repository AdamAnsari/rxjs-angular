import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, fromEvent, interval, Subscription } from 'rxjs';
import { buffer } from 'rxjs/operators';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {
  subs: Subscription;
  dataArr: any[] = [];
  fromEventData: any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // EXAMPLE 1
    var arr = [1,2,3,4];
    var fromObs = from(arr);

    this.subs = fromObs.subscribe(res => {
      console.log(res);
      this.dataArr.push(res);
    })

    // EXAMPLE 2
    let btnVar = document.getElementById('btn');
    let btn_clicks = fromEvent(btnVar, 'click');
    let intervalVar = interval(500);
    let btn_obs = intervalVar.pipe(buffer(btn_clicks));
    btn_obs.subscribe(res => {
      console.log(res);
      this.fromEventData = res;
    })
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
