import { Component } from '@angular/core';
import { TableTopService } from './service/table-top.service';
import { NgFor } from '@angular/common';

@Component({
	selector: 'app-table-top',
	standalone: true,
	imports: [NgFor],
	templateUrl: './table-top.component.html',
	styleUrl: './table-top.component.css',
})
export class TableTopComponent {
	service: TableTopService;

	constructor() {
		this.service = new TableTopService();
	}
}
