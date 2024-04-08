import { Component, Input, SimpleChange } from '@angular/core';
import { TableTopService } from './service/table-top.service';
import { NgFor, NgIf } from '@angular/common';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';

@Component({
	selector: 'app-table-top',
	standalone: true,
	imports: [NgIf, NgFor, FilterPopupComponent],
	templateUrl: './table-top.component.html',
	styleUrl: './table-top.component.css',
})
export class TableTopComponent {
	service: TableTopService;

	// @Input() state: string = 'viewAll';
	state: string = 'viewAll';
	@Input() resCount: number = 0;

	constructor() {
		this.service = new TableTopService();
	}

	ngOnChanges(changes: SimpleChange) {
		if (changes['state']) {
			this.state = changes['state'].currentValue;
		}
		if (changes['resCount']) {
			this.resCount = changes['resCount'].currentValue;
		}
	}
}
enum TableTopState {
	Search = 'search',
	ViewAll = 'viewAll',
}
