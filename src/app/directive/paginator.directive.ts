import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPaginator]',
  exportAs: 'appPagination',
})
export class PaginatorDirective {

  @Input() totalPage: number;
  @Input() pageNumber: number = 10;
  previous: number = 9;
  next:number = 11;
  current:number = 10;

  constructor() { }

  nextPage() {
    this.setPage(Math.min(this.totalPage, this.pageNumber + 1));
  }

  previousPage() {
    this.setPage(Math.max(1, this.pageNumber - 1));
  }
  firstPage() {
    this.setPage(1);
  }
  lastPage() {
    this.setPage(this.totalPage);
  }

  setPage(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.current = this.pageNumber;
    this.previous = this.current - 1;
    this.next = this.current + 1;
  }
}
