import { Component, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as faStarBold, faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faStar, faCommentDots, faSquareCaretRight, faFileText } from '@fortawesome/free-regular-svg-icons';
import { AddCommentService } from '../add-comment/service/add-comment.service';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-data-row',
	standalone: true,
	imports: [FontAwesomeModule, NgIf],
	templateUrl: './data-row.component.html',
	styleUrl: './data-row.component.css',
})
export class DataRowComponent {
	@Output() showDetails: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output() showChildern: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Input() data: any;
	@Input() state = 'overview';
	@Input() selected = false;
	faStar = faStar;
	faStarBold = faStarBold;
	faComments = faCommentDots;
	faCaretSquareRight = faSquareCaretRight;
	faArrowAltCircleLeft = faChevronLeft;
	faChevronDown = faChevronDown;
	faFileArchive = faFileText;
	checked: boolean = false;
	constructor(private addCommentService: AddCommentService) {}
	showAddComment = this.addCommentService.getIsOpened();

	showAddCommentSidebar() {
		this.addCommentService.setIsOpened(true);
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes['data']) {
			this.data = changes['data'].currentValue;
		}
		if (changes['selected']) {
			this.selected = changes['selected'].currentValue;
		}
	}
}
