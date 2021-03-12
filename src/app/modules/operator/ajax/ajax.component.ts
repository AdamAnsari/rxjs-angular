import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {
  data: any;
  namesList: any[] = [];

  constructor(
    private router: Router
  ) { }

  goBack() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.ajaxFunc();
  }

  ajaxFunc() {
    const final_val = ajax('https://jsonplaceholder.typicode.com/users').pipe(
      map((e) => e.response)
    );

    final_val.subscribe(res => {
      console.log(res);
      this.data = [...res];
      console.log(this.data);
      console.log(this.data.length);
      this.data.forEach((element, i) => {
        this.namesList.push(this.data[i].name);
      });
      console.log(this.namesList);
    })
  }

}
