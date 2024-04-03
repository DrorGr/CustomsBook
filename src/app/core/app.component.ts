import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from '../shared/components/app-header/app-header.component';
import { AppFooterComponent } from '../shared/components/app-footer/app-footer.component';
import { MainPageComponent } from '../features/main-page/main-page.component';
import { NgFor, NgForOf } from '@angular/common';
import { CustomsBookExtendedListService } from './CustomsBookExtendedListService';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [NgFor, NgForOf, RouterOutlet, AppHeaderComponent, AppFooterComponent, MainPageComponent, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	constructor(private CustomsBookExtendedListService: CustomsBookExtendedListService) {
		this.CustomsBookExtendedListService = CustomsBookExtendedListService;
	}

	ngOnInit() {
		this.CustomsBookExtendedListService.GetCustomsBookMainViewSearchByText(Filters);
	}
}
const Filters: Filters = {
	CustomsBookType: '1',
	SkippedRows: 0,
	PageSize: 10,
	// ,
	// SearchFields: null,
	// CustomsItemHierarchic: '',
	// Reamarks: '',
	// Rules: '',
};

interface Filters {
	CustomsBookType?: string;
	SkippedRows?: number;
	PageSize?: number;
	SearchFields?: string;
	CustomsItemHierarchic?: string;
	Reamarks?: string;
	Rules?: string;
}
