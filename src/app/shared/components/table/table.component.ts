import { Component, Input, SimpleChanges } from '@angular/core';
import { DataRowComponent } from '../data-row/data-row.component';
import { DetailsFrameComponent } from '../details-frame/details-frame.component';
import { TableTopComponent } from '../table-top/table-top.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
//@ts-ignore

import { mockData } from '../../../../../mock_data.ts';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgForOf, NgIf, DataRowComponent, DetailsFrameComponent, TableTopComponent, AddCommentComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: "0px", opacity: "0" }),
            animate('0.5s ease-in-out', style({ height: "*", opacity: "1" }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: "*", opacity: "1" }),
            animate('0.5s ease-in-out', style({ height: "0px", opacity: "0" }))
          ]
        )
      ]
    )
  ]
})


export class TableComponent {
  @Input() showChiledren: boolean = false;
  showDetails: boolean = false;
  showAddComment: boolean = false;
  showCommentSidebar: boolean = false;
  childrenToDesplay: string[] = [];

  data: any | never | undefined = {};

  KeyValue = Object.keys;
  Object: ObjectConstructor = Object;

  ngOnInit() {
    this.data = mockData;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showDetails']) {
      this.showDetails = changes['showDetails'].currentValue;
    }
  }

  showChildern(id: string): boolean {
    const isShown = this.childrenToDesplay.indexOf(id);
    isShown === -1 ? this.childrenToDesplay.push(id) : this.childrenToDesplay.splice(isShown);
    return Boolean(isShown >= 0);
  }
}

