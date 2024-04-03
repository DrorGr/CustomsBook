import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { defer, of } from 'rxjs';
import {ServiceResponse} from '../../DataContracts/ServiceResponse';
import {ClassLevelValidator} from '../../Validators/ClassLevelValidator';
import {Guid} from '../../Utilities/Guid';
import {InfraSettings} from '../../Utilities/InfraSettings';
import {ServiceHelper} from '../../Utilities/ServiceHelper';
import {SessionInfo} from '../../Utilities/SessionInfo';
import {PerformanceLogger} from '../../Utilities/PerformanceLogger';

import {CustomPickListPM} from '../../EntityPMs/CustomPickListPM';


@Injectable()

export class CustomPickListPMService {
 private _http: HttpClient;
 private _apiUrl: string;
 constructor() {
        this._http = ServiceHelper.HttpClient;
        this._apiUrl = ServiceHelper.GetLogitudeURL() + 'api/custompicklists';      
    }

    get(id: string) {


        var authHeader = new Headers();
        authHeader.append('Token', SessionInfo.Token);
        var callTime = new Date();
        return defer(() => {
            return this._http.get(this._apiUrl + '/getsingle?' + 'id=' + id, ServiceHelper.GetHttpFullHeaders())
                .pipe(
                    map((response: HttpResponse<any>) => {
                        var pm = response.body;



                        var entity: CustomPickListPM;
                        if (pm) {
                            entity = this.MapJsonToEntityPM(pm);
                        }

                        var serviceResponse: ServiceResponse;
                        serviceResponse = new ServiceResponse();
                        serviceResponse.Result = entity;

                        var servertime = response.headers.get('ServerExecutionTime');
                        PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "CustomPickList", "GetSinglePM", 'id=' + id);

                        return serviceResponse;

                    }), catchError(ServiceHelper.HandleServiceError));
        });
    }

    insert(entityPM: CustomPickListPM) {

        var callTime = new Date();
        return defer(() => {

            var authHeader = new Headers();
            authHeader.append('Token', SessionInfo.Token);
            authHeader.append('Content-Type', 'application/json');

            var validator: ClassLevelValidator;

            validator = new ClassLevelValidator();

            var errorsArray = validator.Validate("CustomPickList", entityPM);


            var serviceResponse: ServiceResponse;
            serviceResponse = new ServiceResponse();
            if (errorsArray.length == 0) {
                var mappedEntity: CustomPickListPM;
                mappedEntity = this.MapJsonToEntityPM(entityPM, false);

                return this._http.post(this._apiUrl, JSON.stringify(mappedEntity), ServiceHelper.GetHttpFullHeaders())
                    .pipe(
                        map((response: HttpResponse<any>) => {

                            var pm = response.body;
                            if (pm) {
                                var mappedResult: CustomPickListPM;
                                mappedResult = this.MapJsonToEntityPM(pm, true, entityPM);
                                serviceResponse.Result = mappedResult;
                            }


                            var servertime = response.headers.get('ServerExecutionTime');
                            PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "CustomPickList", "SaveChanges", "");


                            return serviceResponse;

                        }), catchError(ServiceHelper.HandleServiceError));
            }
            else {

                serviceResponse.HasError = true;
                serviceResponse.ErrorsArray = errorsArray;

                return of(serviceResponse);

            }
        });
    }

    update(entityPM: CustomPickListPM) {

        var callTime = new Date();
        return defer(() => {

            var authHeader = new Headers();
            authHeader.append('Token', SessionInfo.Token);
            authHeader.append('Content-Type', 'application/json');

            var validator: ClassLevelValidator;

            validator = new ClassLevelValidator();

            var errorsArray = validator.Validate("CustomPickList", entityPM);


            var serviceResponse: ServiceResponse;
            serviceResponse = new ServiceResponse();
            if (errorsArray.length == 0) {
                var mappedEntity: CustomPickListPM;
                mappedEntity = this.MapJsonToEntityPM(entityPM, false);

                return this._http.put(this._apiUrl, JSON.stringify(mappedEntity), ServiceHelper.GetHttpFullHeaders())
                    .pipe(
                        map((response: HttpResponse<any>) => {


                            var pm = response.body;
                            if (pm) {
                                var mappedResult: CustomPickListPM;
                                mappedResult = this.MapJsonToEntityPM(pm, true, entityPM);
                                serviceResponse.Result = mappedResult;
                            }

                            var servertime = response.headers.get('ServerExecutionTime');
                            PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "CustomPickList", "SaveChanges", "");

                            return serviceResponse;

                        }), catchError(ServiceHelper.HandleServiceError));
            }
            else {

                serviceResponse.HasError = true;
                serviceResponse.ErrorsArray = errorsArray;

                return of(serviceResponse);

            }
        });

    }

   

	  MapJsonToEntityPM(jsonPM: any, mapParent: boolean = true, entityPM: CustomPickListPM = null) {

         
        if (!entityPM) {
            
            entityPM = new CustomPickListPM();
        }
           
            var jsonPMKeys = Object.keys(jsonPM);

            for (var key in jsonPMKeys) {
			 if (jsonPMKeys[key] === "UIProperties") {

                continue;
            }
                var property = jsonPMKeys[key];
                entityPM[property] = jsonPM[property];
            }
			
			 
            entityPM.IsDirty = false;

		if (mapParent) {
                entityPM.OldEntityPM = this.clone(entityPM);

		}
        else {

            entityPM.OldEntityPM = null;
        }

        return entityPM;
    }


	  public clone(jsonPM: any) {
        var entityPM: any;
        entityPM = {};

        var jsonPMKeys = Object.keys(jsonPM);
        for (var key in jsonPMKeys) {
            
            if ((jsonPMKeys[key] === "entityParentPM") || jsonPMKeys[key] === "UIProperties" || jsonPMKeys[key] === "OldEntityPM" || jsonPMKeys[key] === "PropertyChanged") {
                continue;
            }

            var property = jsonPMKeys[key];
            entityPM[property] = jsonPM[property];

        }
        return entityPM;
    }

	  public GetNewEntityPM() {		 
		    var entityPM: CustomPickListPM;
			entityPM = new CustomPickListPM();
			entityPM.Tenant = InfraSettings.TenantPM.Id;
			return entityPM;
    }
		 

}
