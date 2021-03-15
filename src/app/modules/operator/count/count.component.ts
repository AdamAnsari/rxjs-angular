import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { range } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  data: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    let rangeVar = range(1,10);
    rangeVar.subscribe(res => {
      console.log(res);
      this.data.push(res);
    })
  }

  goBack() {
    this.router.navigate(['/'])
  }

}
