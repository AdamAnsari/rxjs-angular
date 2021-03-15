import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { count, max, min, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-mathematical-operators',
  templateUrl: './mathematical-operators.component.html',
  styleUrls: ['./mathematical-operators.component.scss']
})
export class MathematicalOperatorsComponent implements OnInit {
  countData: number;
  minData: number;
  maxData: number;
  reduceData1: number;
  reduceData2: number;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // COUNT EXAMPLE
    const countArr = from([1,2,3,4,5]).pipe(count());
    countArr.subscribe(res => {
      console.log(res);
      this.countData = res;
    })
    // MIN Example
    const minArr = from([1,2,3,4,5]).pipe(min());
    minArr.subscribe(res => {
      console.log(res);
      this.minData = res;
    })
    // MAX Example
    const maxArr = from([1,2,3,4,5]).pipe(max());
    maxArr.subscribe(res => {
      console.log(res);
      this.maxData = res;
    })
    //REDUCE Example
    const reduceArr1 = from([100, 200, 300])
      .pipe(reduce((acc, item) => acc+item, 0));
    reduceArr1.subscribe(res => {
      console.log(res);
      this.reduceData1 = res;
    })

    const reduceArr2 = from([100, 200, 300])
      .pipe(reduce((acc, item) => acc+item, 10));
    reduceArr2.subscribe(res => {
      console.log(res);
      this.reduceData2 = res;
    })

  }

  goBack() {
    this.router.navigate(['/'])
  }

}
