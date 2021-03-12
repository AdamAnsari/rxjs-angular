import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {
  customVar1:any;
  customVar2:any[] = [];

  constructor() { }

  ngOnInit(): void {

    // Example 1
    var observable1 = new Observable(function observer(observer) {
      observer.next('I am a observer!!');
    })

    observable1.subscribe(res => {
      console.log(res);
      this.customVar1 = res;
    })

    // Example 2
    var observable2 = new Observable(function observer(observer) {
      try {
        observer.next('First Observable');
        observer.next('Second Observable');
        observer.complete();
      } catch {
        observer.error('Error Occured!!');
      }
    });

    observable2.subscribe(res => {
      console.log(res);
      this.customVar2.push(res);
    })

  }

}
