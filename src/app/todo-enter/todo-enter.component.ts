import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-enter',
  templateUrl: './todo-enter.component.html',
  styleUrls: ['./todo-enter.component.scss']
})
export class TodoEnterComponent implements OnInit {


  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {

  }

  private checkValue(selector: string): boolean {
    let isValue: boolean = true;
    const elems = this.elementRef.nativeElement.querySelectorAll('.' + selector);
    elems.forEach((element: any) => {
      if (element.value === '') {
        isValue = false;
      }
    });
    return isValue;
  }

  public clearElems() {
    //todo
  }

  public addFailElem() {
    const isValue = this.checkValue('fail');
    if(isValue) {
      const newElem: string = '<input name="fail" type="text" size="40" class="fail" style="margin-bottom:10px">'
      const elemFail = this.elementRef.nativeElement.querySelector('.list__fails');
      elemFail.insertAdjacentHTML('beforeend', newElem);
    }
  }

  public addSuccesElem() {
    const isValue = this.checkValue('succes');
    if(isValue) {
    const newElem: string = '<input name="succes" type="text" size="40" class="succes" style="margin-bottom:10px">'
    const elemSucces = this.elementRef.nativeElement.querySelector('.list__success');

    elemSucces.insertAdjacentHTML('beforeend', newElem);
    }
  }
}
