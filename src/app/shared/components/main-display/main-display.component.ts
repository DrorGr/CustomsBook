import { Component, Input, SimpleChanges } from '@angular/core';
import { DataRowComponent } from '../data-row/data-row.component';
import { DetailsFrameComponent } from '../details-frame/details-frame.component';
import { TableTopComponent } from '../table-top/table-top.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { NgFor, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
//@ts-ignore

import { mockData } from '../../../../../mock_data';

@Component({
	selector: 'app-main-display',
	standalone: true,
	imports: [
		NgFor,
		NgForOf,
		NgIf,
		DataRowComponent,
		DetailsFrameComponent,
		TableTopComponent,
		AddCommentComponent,
		NgTemplateOutlet,
	],
	templateUrl: './main-display.component.html',
	styleUrl: './main-display.component.css',
	animations: [
		trigger('inOutAnimation', [
			transition(':enter', [
				style({ height: '0px', opacity: '0' }),
				animate('0.5s ease-in-out', style({ height: '*', opacity: '1' })),
			]),
			transition(':leave', [
				style({ height: '*', opacity: '1' }),
				animate('0.5s ease-in-out', style({ height: '0px', opacity: '0' })),
			]),
		]),
	],
})
export class MainDisplayComponent {
	@Input() showChiledren: boolean = false;
	@Input() itemsData;
	showDetails: boolean = false;
	showAddComment: boolean = false;
	showCommentSidebar: boolean = false;
	childrenToDesplay: string[] = [];

	data: any | never | undefined = {};

	KeyValue = Object.keys;
	Object: ObjectConstructor = Object;

	ngOnChanges(changes: SimpleChanges) {
		if (changes['showDetails']) {
			this.showDetails = changes['showDetails'].currentValue;
		}
		if (changes['itemsData']) {
			this.itemsData = changes['itemsData'].currentValue;
			this.data = orderedData(this.itemsData);
		}
	}

	showChildern(id: string): boolean {
		const isShown = this.childrenToDesplay.indexOf(id);
		isShown === -1 ? this.childrenToDesplay.push(id) : this.childrenToDesplay.splice(isShown);
		return Boolean(isShown >= 0);
	}
}

const orderedData = (data) => {
	const getChildren = (parentItem) => {
		const children = data.filter((item) => item?.Parent_CustomsItemID === parentItem?.ID);
		children.forEach((child) => {
			//@ts-ignore
			child.children = getChildren(child);
		});
		return children;
	};

	const rootItems = data.filter((item) => !item?.Parent_CustomsItemID);
	const orderedData = rootItems.map((rootItem) => {
		const children = getChildren(rootItem);
		return { ...rootItem, children };
	});

	return orderedData;
};
