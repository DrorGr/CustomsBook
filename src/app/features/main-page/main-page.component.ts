import { Component } from '@angular/core';
import { PageTopComponent } from '../../shared/components/page-top/page-top.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { AddCommentComponent } from '../../shared/components/add-comment/add-comment.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [PageTopComponent, TableComponent, AddCommentComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  title = 'CustomsBook';
  showAddComment: boolean = false;

}
