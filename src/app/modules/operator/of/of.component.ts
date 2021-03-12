import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, reduce, filter, delay } from 'rxjs/operators';


@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {
  data: number;

  constructor(
    private router: Router
  ) { }

  goBack() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.ofFunction();
  }

  ofFunction() {
    const ofVar = of(1,2,3,4,5,6,7,8,9,10);
    const sample = ofVar.pipe(
      filter(x => x%2 == 0),
      reduce((acc, one) => acc + one, 0)
    )

    sample.subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
}
