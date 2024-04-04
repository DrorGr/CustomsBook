import { Component, Output } from '@angular/core';
import { PageTopComponent } from '../../shared/components/page-top/page-top.component';
import { MainDisplayComponent } from '../../shared/components/main-display/main-display.component';
import { AddCommentComponent } from '../../shared/components/add-comment/add-comment.component';
import { CommonModule } from '@angular/common';
import { CustomsBookExtendedListService } from '../../core/CustomsBookExtendedListService';
import { Observable } from 'rxjs';
import { FilterPopupService } from '../../shared/components/filter-popup/service/filter-popup.service';
import { Service } from '../../shared/components/page-top/service/top-page.service';

@Component({
	selector: 'app-main-page',
	standalone: true,
	imports: [PageTopComponent, MainDisplayComponent, AddCommentComponent, CommonModule],
	templateUrl: './main-page.component.html',
	styleUrl: './main-page.component.css',
})
export class MainPageComponent {
	Service = new Service();
	showAddComment: boolean = false;
	filterService = new FilterPopupService();
	itemsData: Observable<any>;
	private _filters;

	constructor(private customsBookExtendedListService: CustomsBookExtendedListService) {
		this._filters = this.filterService.getFilters();
		this.customsBookExtendedListService.GetCustomsBookMainView(this._filters).subscribe((data: any) => {
			this.itemsData = data;
		});
	}

	SearchByText() {
		let object = {
			SearchFields: this.Service.GetSearchText(),
			CustomsBookType: '2',
			CustomsItemHierarchic: '1,2,3',
			Reamarks: false,
			Rules: true,
			SkippedRows: 0,
			PageSize: 20,
		};

		this.customsBookExtendedListService.GetCustomsBookMainViewSearchByText(object).subscribe((data: any) => {
			this.itemsData = data;
			console.log(data);
		});
	}
}
