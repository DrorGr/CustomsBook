import { Component } from '@angular/core';

@Component({
  selector: 'app-page-top',
  standalone: true,
  imports: [],
  templateUrl: './page-top.component.html',
  styleUrl: './page-top.component.css'
})
export class PageTopComponent {

  searchBy: number | string = 'pageSearch_form01';

}
