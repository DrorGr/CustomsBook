import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class TableTopService {
	title = ' ספר מכס קטגוריות';
	categiries = ['הסכמים', 'ש.מכס', 'מס קניה', 'תמ”א', 'יח’ סטטיסטית'];

	getCategories() {
		return this.categiries;
	}

	getTableTop() {
		return this.title;
	}
}
