//------------------------------------------------------------------------------
// <auto-generated>
//     Angular 9.1.1
//     This code was generated by a logitude.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { defer, of } from 'rxjs';
import {ApiQueryFilters} from '../../DataContracts/ApiQueryFilters';
import {ServiceResponse} from '../../DataContracts/ServiceResponse';
import {InfraGenericFilter} from '../../Utilities/InfraGenericFilter';
import {CachedDataManager} from '../../Utilities/CachedDataManager';
import {ServiceHelper} from '../../Utilities/ServiceHelper';
import {SessionLocator} from '../../Utilities/SessionLocator';
import {SessionInfo} from '../../Utilities/SessionInfo';
import {LocalStorageManager} from '../../Utilities/LocalStorageManager';
import {PerformanceLogger} from '../../Utilities/PerformanceLogger';
import {EventTypeCategoryList} from '../../EntityLists/EventTypeCategoryList';

@Injectable()

export class EventTypeCategoryListService {
	private _http: HttpClient;
    private _apiUrl: string;   
	public static CachedData: Array<EventTypeCategoryList> = [];
    constructor() {
        this._http = ServiceHelper.HttpClient;
        this._apiUrl = ServiceHelper.GetLogitudeURL() + 'api/eventtypecategoryviews';  
    }

	getSingle(code: string) {

		var callTime = new Date();

		return defer(() => {
			return this._http.get(this._apiUrl + '/getsingle/?' + 'code=' + code, ServiceHelper.GetHttpFullHeaders())
				.pipe(
					map((response: HttpResponse<any>) => {

						var list = response.body;                    
						var entity: EventTypeCategoryList;
						if (list) {
							entity = this.MapJsonToEntityList(list);
						}

						var serviceResponse: ServiceResponse = new ServiceResponse(); 
						serviceResponse.Result = entity;  
						serviceResponse.CallTime = callTime;

						var servertime = response.headers.get('ServerExecutionTime');
						PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "EventTypeCategory", "GetSingleList", 'code=' + code); 

						return serviceResponse;
					}),
					
					catchError(ServiceHelper.HandleServiceError));
		});
	}

	getAll() {

		var callTime = new Date();

		return defer(() => {
			return this._http.get(this._apiUrl + '/getall', ServiceHelper.GetHttpFullHeaders())
				.pipe(
					map((response: HttpResponse<any>) => {

						var allLists = response.body;
						var _mappedListsArray: Array<EventTypeCategoryList> = [];
						if (allLists) {
							for (var key in allLists) {			
								var entity: EventTypeCategoryList = this.MapJsonToEntityList(allLists[key]);
								_mappedListsArray.push(entity);
							}
						}

						var serviceResponse: ServiceResponse = new ServiceResponse(); 
						serviceResponse.Result = _mappedListsArray;  
						serviceResponse.CallTime = callTime;

						var servertime = response.headers.get('ServerExecutionTime');
						PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "EventTypeCategory", "GetAll", ""); 

						return serviceResponse;
					}),

					catchError(ServiceHelper.HandleServiceError));
		});
	}
	
	getByFilters(filters: ApiQueryFilters) {

		var callTime = new Date();       
		var urlparameters = '/getbyfilters?';
        var mykeys = Object.keys(filters);
        var addtionalFiltersValues = null;

        for (var i in mykeys) {
			var propName = mykeys[i];
			var propValue = filters[propName];
			var ignoreFilter = ((propName.indexOf("Operator") > 0 && propValue == "Equals") || propName == "AdditionalFilters");

            if (urlparameters != "?") {
                urlparameters = urlparameters.concat('&');
            }

			if (!ignoreFilter) {
				propValue = encodeURIComponent(propValue);
				urlparameters = urlparameters.concat(propName.concat('=').concat(propValue));
			}

			if (propName == "AdditionalFilters" && propValue.length > 0) {
				addtionalFiltersValues = JSON.stringify(propValue);
			}
        }

        if (addtionalFiltersValues) {
            urlparameters = urlparameters.concat("&AdditionalFilters=").concat(addtionalFiltersValues);
        }

		var callUrl = this._apiUrl.concat(urlparameters);
        		
		return defer(() => {
			return this._http.get(callUrl, ServiceHelper.GetHttpFullHeaders())
				.pipe(
					map((response: HttpResponse<any>) => {

						var serviceResponse: ServiceResponse = response.body;
						var _mappedListsArray: Array<EventTypeCategoryList> = [];

						if (serviceResponse.Result) {
							for (var key in serviceResponse.Result) {				
								var entity: EventTypeCategoryList = this.MapJsonToEntityList(serviceResponse.Result[key]);
								_mappedListsArray.push(entity);
							}
						}   

						serviceResponse.Result = _mappedListsArray;      
						serviceResponse.CallTime = callTime;

						var servertime = response.headers.get('ServerExecutionTime');
						PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "EventTypeCategory", "GetByFilters", "PageIndex:" +filters.PageIndex +", PageSize:"+filters.PageSize + ", GetAll:" + filters.GetAll); 
                 								            
						return serviceResponse;
					}),

					catchError(ServiceHelper.HandleServiceError));
		});
	}

	getSingleFromCache(code: string) {

		var callTime = new Date(); 	    

		if (!SessionLocator.UseCachedData) {
            return this.getSingle(code);
        }

        var serviceResponse: ServiceResponse = new ServiceResponse();

		if (EventTypeCategoryListService.CachedData.length > 0) {
			return defer(() => {
				var filteredData = EventTypeCategoryListService.CachedData.filter(a => a.Code === code)[0];
				serviceResponse.CallTime = callTime;
				serviceResponse.Result = filteredData; 
                return of(serviceResponse);
            });
        }

        else {
            return CachedDataManager.GetClosedTableData("EventTypeCategory").pipe(
				map((cachedJson:any) => {

					var _mappedListsArray: Array<EventTypeCategoryList> = [];

					if (cachedJson) {
						for (var key in cachedJson) {
							var entity: EventTypeCategoryList = this.MapJsonToEntityList(cachedJson[key]);
							_mappedListsArray.push(entity);
						}
					}

					EventTypeCategoryListService.CachedData = _mappedListsArray;

					var filteredData = EventTypeCategoryListService.CachedData.filter(a => a.Code === code)[0];
					serviceResponse.Result = filteredData; 
					serviceResponse.CallTime = callTime;
			     
					PerformanceLogger.InsertPerformanceLog(callTime, new Date(), 0, "EventTypeCategory", "GetSingleListFromCache", 'code=' + code); 

					return serviceResponse;
				}),

				catchError(ServiceHelper.HandleServiceError));
        }
    }

    getAllFromCache(filters: ApiQueryFilters= new ApiQueryFilters(true)) {

		var callTime = new Date();

		if (!SessionLocator.UseCachedData) {
			return this.getByFilters(filters);
        }

        var mykeys = Object.keys(filters);
        var addtionalFiltersValues = null;

        for (var i in mykeys) {
            var propName = mykeys[i];
            var propValue = filters[propName];

            if (propName == "AdditionalFilters" && propValue.length > 0) {
                addtionalFiltersValues = JSON.stringify(propValue);
			}
        }

        var serviceResponse: ServiceResponse = new ServiceResponse();

        if (EventTypeCategoryListService.CachedData.length > 0) {
            return defer(() => {
                if (filters.GetAll) {
					serviceResponse.Result = EventTypeCategoryListService.CachedData; 
				}

				else {
					var filteredData = InfraGenericFilter.GetFilteredArray(EventTypeCategoryListService.CachedData, filters);
					serviceResponse.Result = filteredData; 
					serviceResponse.CallTime = callTime;
				}

                return of(serviceResponse);
            });
        }

        else {
            return CachedDataManager.GetClosedTableData("EventTypeCategory").pipe(
				map((cachedJson:any) => {

					var _mappedListsArray: Array<EventTypeCategoryList> = [];
					if (cachedJson) {
						for (var key in cachedJson) {
							var entity: EventTypeCategoryList = this.MapJsonToEntityList(cachedJson[key]);
							_mappedListsArray.push(entity);
						}
					}

					EventTypeCategoryListService.CachedData = _mappedListsArray;

					if (filters.GetAll) {
						serviceResponse.Result = _mappedListsArray; 
					}

					else {

						_mappedListsArray = InfraGenericFilter.GetFilteredArray(_mappedListsArray, filters);

						PerformanceLogger.InsertPerformanceLog(callTime, new Date(), 0, "EventTypeCategory", "GetAllFromCache", "PageIndex:" + filters.PageIndex + ", PageSize:" + filters.PageSize + ", GetAll:" + filters.GetAll); 
                 	
						serviceResponse.Result = _mappedListsArray; 
						serviceResponse.CallTime = callTime;
					}

					return serviceResponse;
				}),
			
				catchError(ServiceHelper.HandleServiceError));
        }		 
    }
	
	    MapJsonToEntityList(jsonList: any) {
       
            var entityList: EventTypeCategoryList;
            entityList = new EventTypeCategoryList();
            var jsonListKeys = Object.keys(jsonList);

            for (var key in jsonListKeys) {
                var property = jsonListKeys[key];
                entityList[property] = jsonList[property];
            }
			

        return entityList;
    }

}

