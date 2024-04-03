import { Injectable } from '@angular/core';
import { ServiceHelper } from './Infrastructure/Utilities/ServiceHelper';
import { ServiceResponse } from './DataContracts/ServiceResponse';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from './Services/BaseService';
import { defer, of } from 'rxjs';

interface Filters {
	CustomsBookType?: string;
	SkippedRows?: number;
	PageSize?: number;
	SearchFields?: string;
	CustomsItemHierarchic?: string;
	Reamarks?: string;
	Rules?: string;
}

@Injectable({
	providedIn: 'root',
})
export class CustomsBookExtendedListService extends BaseService {
	private _apiUrl: string = 'http://localhost:9996/api/CB_CustomsItemExtended';

	constructor(httpClient: HttpClient) {
		super(httpClient);

		// this._apiUrl = ServiceHelper.GetLogitudeURL() + 'api/ShipmentDomain';
		// this.ApiURL = this.BaseURL + 'api/ShipmentDomain';
	}
	GetCustomsBookMainView(filters: Filters) {
		var url = `${this._apiUrl}/GetCustomsBookMainView?CustomsBookType=${filters.CustomsBookType}&SkippedRows=${filters.SkippedRows}&PageSize=${filters.PageSize}`;

		return this.Get(url).subscribe((response) => {
			console.log(response);

			// return this._httpClient.get(url, ServiceHelper.GetHttpHeaders()).pipe(
			// 	map((response) => {
			// 		var serviceResponse = new ServiceResponse();
			// 		serviceResponse.Result = response;
			// 		return response;
			// 	}),
			// 	catchError(ServiceHelper.HandleServiceError),
			// );
		});
	}

	GetCustomsBookMainViewSearchByClassification(filters: Filters) {
		var url = `${this._apiUrl}/GetCustomsBookMainViewSearchByClassification?CustomsBookType=${filters.CustomsBookType}&SkippedRows=${filters.SkippedRows}&PageSize=${filters.PageSize}&CustomsItemHierarchic=${filters.CustomsItemHierarchic}`;

		return this.Get(url).subscribe((response) => {
			console.log(response);
		});
		// return defer(() => {
		// 	return this._httpClient.get(url, ServiceHelper.GetHttpHeaders()).pipe(
		// 		map((response) => {
		// 			var serviceResponse = new ServiceResponse();
		// 			serviceResponse.Result = response;
		// 			return response;
		// 		}),
		// 		catchError(ServiceHelper.HandleServiceError),
		// 	);
		// });
	}

	GetCustomsBookMainViewSearchByText(filters: Filters) {
		var url = `${this._apiUrl}/GetCustomsBookMainViewSearchByText?CustomsBookType=${filters.CustomsBookType}&SkippedRows=${filters.SkippedRows}&PageSize=${filters.PageSize}&SearchFields=${filters.SearchFields}`;
		return this.Get(url).subscribe((response) => {
			console.log(response);
		});
		// return defer(() => {
		// 	return this._httpClient.get(url, ServiceHelper.GetHttpHeaders()).pipe(
		// 		map((response) => {
		// 			var serviceResponse = new ServiceResponse();
		// 			serviceResponse.Result = response;
		// 			return response;
		// 		}),
		// 		catchError(ServiceHelper.HandleServiceError),
		// 	);
		// });
	}
}
