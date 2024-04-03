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
import {EventTypeList} from '../../EntityLists/EventTypeList';

@Injectable()

export class EventTypeListService {
	private _http: HttpClient;
    private _apiUrl: string;   
	public static CachedData: Array<EventTypeList> = [];
    constructor() {
        this._http = ServiceHelper.HttpClient;
        this._apiUrl = ServiceHelper.GetLogitudeURL() + 'api/eventtypeviews';  
    }

	getSingle(id: string) {
	   
		var callTime = new Date();

		return defer(() => {
			return this._http.get(this._apiUrl + '/getsingle/?' + 'id=' + id, ServiceHelper.GetHttpFullHeaders())
				.pipe(			
					map((response: HttpResponse<any>) => {

						var list = response.body;                   
						var entity: EventTypeList;
						if (list) {
							entity = this.MapJsonToEntityList(list);
						}   

						var serviceResponse: ServiceResponse = new ServiceResponse(); 
						serviceResponse.Result = entity;  
						serviceResponse.CallTime = callTime;

						var servertime = response.headers.get('ServerExecutionTime');
						PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "EventType", "GetSingleList", 'id=' + id); 

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
						var _mappedListsArray: Array<EventTypeList> = [];
						if (allLists) {
							for (var key in allLists) {				
								var entity: EventTypeList = this.MapJsonToEntityList(allLists[key]);
								_mappedListsArray.push(entity);
							}
						}

						var serviceResponse: ServiceResponse = new ServiceResponse(); 
						serviceResponse.Result = _mappedListsArray;
						serviceResponse.CallTime = callTime;

						var servertime = response.headers.get('ServerExecutionTime');
						PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "EventType", "GetAllLists", ""); 

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
						var _mappedListsArray: Array<EventTypeList> = [];

						if (serviceResponse.Result) {
							for (var key in serviceResponse.Result) {				
								var entity: EventTypeList = this.MapJsonToEntityList(serviceResponse.Result[key]);
								_mappedListsArray.push(entity);
							}
						}   

						serviceResponse.Result = _mappedListsArray;       
						serviceResponse.CallTime = callTime;

						var servertime = response.headers.get('ServerExecutionTime');
						PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "EventType", "GetByFilters", "PageIndex:" +filters.PageIndex +", PageSize:"+filters.PageSize + ", GetAll:" + filters.GetAll);
				           
						return serviceResponse;
					}),
			
					catchError(ServiceHelper.HandleServiceError));
		});        
	}

	getSingleFromCache(id: string) {

		var callTime = new Date();

		if (!SessionLocator.UseCachedData) {
            return this.getSingle(id);
        }
	    
		var exists = EventTypeListService.CachedData.filter(a => a.Id === id).length;

        var serviceResponse: ServiceResponse = new ServiceResponse(); 

        if (exists === 0) {
			return defer(() => {
				var cacheKey = "EventType_CachedData_" + SessionLocator.Tenant;
				var _mappedListsArray: Array<EventTypeList> = [];
                var cachedString = LocalStorageManager.GetItem(cacheKey);

                if (cachedString) {
                    var cachedJson = JSON.parse(cachedString);
                    for (var key in cachedJson) {
                        var entity: EventTypeList = this.MapJsonToEntityList(cachedJson[key]);
                        _mappedListsArray.push(entity);
                    }

                    EventTypeListService.CachedData = _mappedListsArray;
                    serviceResponse = new ServiceResponse();
                    
                    var filteredData = EventTypeListService.CachedData.filter(a => a.Id === id)[0];
                    serviceResponse.Result = filteredData;
					serviceResponse.CallTime = callTime;
 
                    PerformanceLogger.InsertPerformanceLog(callTime, new Date(), 0, "EventType", "GetSingleListFromCache", 'id=' + id); 

                    return of(serviceResponse);                    
                }

				else {
					return this._http.get(this._apiUrl+'/getsingle/?'+'id=' + id, ServiceHelper.GetHttpFullHeaders())
					.pipe(
						map((response: HttpResponse<any>) => {
							var list = response.body;
                    
							var entity: EventTypeList;
							if (list)
							{
								entity = this.MapJsonToEntityList(list);
							}   

							serviceResponse.Result = entity;
							serviceResponse.CallTime = callTime;

							var servertime = response.headers.get('ServerExecutionTime');
							PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "EventType", "GetSingleList", 'id=' + id); 
                                      
							return serviceResponse;
						}), 
						
						catchError(ServiceHelper.HandleServiceError));
				}
			});
		}

		else {
		   var filteredData = EventTypeListService.CachedData.filter(a => a.Id === id)[0];
		    serviceResponse.Result = filteredData;
			serviceResponse.CallTime = callTime;
		   return of(serviceResponse);
		}
	}

    getAllFromCache(filters: ApiQueryFilters = new ApiQueryFilters(true)) {

		var callTime = new Date();

		if (!SessionLocator.UseCachedData) {
			return this.getByFilters(filters);
		}

		var exists = EventTypeListService.CachedData.length;
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
				if (exists === 0 || filters.ForceCacheRefresh) {
					propValue = encodeURIComponent(propValue);
				}

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
       
        if (exists === 0 || filters.ForceCacheRefresh) {
            var cacheKey = "EventType_CachedData_" + filters.Tenant;
            var _mappedListsArray: Array<EventTypeList> = [];
            var serviceResponse: ServiceResponse;

            if (!filters.ForceCacheRefresh) {
                var cachedString = LocalStorageManager.GetItem(cacheKey);
                if (cachedString) {
                    var cachedJson = JSON.parse(cachedString);

                    for (var key in cachedJson) {
                        var entity: EventTypeList = this.MapJsonToEntityList(cachedJson[key]);
                        _mappedListsArray.push(entity);
                    }

                    EventTypeListService.CachedData = _mappedListsArray;
                    serviceResponse = new ServiceResponse();

                     if (!filters.GetAll) {
                        _mappedListsArray = InfraGenericFilter.GetFilteredArray(_mappedListsArray, filters);
                    }

                    serviceResponse.Result = _mappedListsArray;
					serviceResponse.CallTime = callTime;
                    
                    PerformanceLogger.InsertPerformanceLog(callTime, new Date(), 0, "EventType", "GetAllFromCache", "");                     
                }
            }

            if (serviceResponse) {
                return of(serviceResponse);
            }

            else {
                return defer(() => {
                    return this._http.get(callUrl, ServiceHelper.GetHttpFullHeaders())
						.pipe(
							map((response: HttpResponse<any>) => {

								var serviceResponse: ServiceResponse;
								serviceResponse = response.body;
                        
								if (serviceResponse.Result) {
									for (var key in serviceResponse.Result) {
										var entity: EventTypeList = this.MapJsonToEntityList(serviceResponse.Result[key]);
										_mappedListsArray.push(entity);
									}
								}

								if (filters.GetAll) {
									LocalStorageManager.SetItem(cacheKey, JSON.stringify(_mappedListsArray))
									EventTypeListService.CachedData = _mappedListsArray;
								}

								else {
							
									_mappedListsArray = InfraGenericFilter.GetFilteredArray(_mappedListsArray, filters);
								}

								serviceResponse.Result = _mappedListsArray;
								serviceResponse.CallTime = callTime;
						
								var servertime = response.headers.get('ServerExecutionTime');
								PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "EventType", "GetAll", ""); 

								return serviceResponse;
							}),
							
							catchError(ServiceHelper.HandleServiceError));
                });
            }
        }

        else {
            var filteredData = EventTypeListService.CachedData;
            if (!filters.GetAll) {
	
                filteredData = InfraGenericFilter.GetFilteredArray(filteredData, filters);
            }

            var serviceResponse: ServiceResponse = new ServiceResponse();
            serviceResponse.Result = filteredData;
			serviceResponse.CallTime = callTime;
            return of(serviceResponse);
        }
    }
	
	    MapJsonToEntityList(jsonList: any) {
       
            var entityList: EventTypeList;
            entityList = new EventTypeList();
            var jsonListKeys = Object.keys(jsonList);

            for (var key in jsonListKeys) {
                var property = jsonListKeys[key];
                entityList[property] = jsonList[property];
            }
			

        return entityList;
    }

}

