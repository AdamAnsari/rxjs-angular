import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent implements OnInit {
  data: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const throwVar = throwError(new Error('Error Occured!!'));
    throwVar.subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
        this.data = error;
      },
      ()=>('Completed'))
  }

  goBack() {
    this.router.navigate(['/'])
  }

}
