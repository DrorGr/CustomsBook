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
import {ServiceResponse} from '../../DataContracts/ServiceResponse';
import {ClassLevelValidator} from '../../Validators/ClassLevelValidator';
import {Guid} from '../../Utilities/Guid';
import {InfraSettings} from '../../Utilities/InfraSettings';
import {ServiceHelper} from '../../Utilities/ServiceHelper';
import {SessionInfo} from '../../Utilities/SessionInfo';
import {PerformanceLogger} from '../../Utilities/PerformanceLogger';
import {CustomFieldClass} from '../../DataContracts/CustomFieldClass'

import {InboundEmailPM} from '../../EntityPMs/InboundEmailPM';

import {InboundEmailLinePM} from '../../EntityPMs/InboundEmailLinePM';

@Injectable()

export class InboundEmailPMService {
 private _http: HttpClient;
 private _apiUrl: string;
 constructor() {
        this._http = ServiceHelper.HttpClient;
        this._apiUrl = ServiceHelper.GetLogitudeURL() + 'api/inboundemails';      
    }

	get(id: string) {       

		var callTime = new Date();		

		return defer(() => {
			return this._http.get(this._apiUrl + '/getsingle?' + 'id=' + id, ServiceHelper.GetHttpFullHeaders())
				.pipe(
					map((response: HttpResponse<any>) => {
						var pm = response.body;
				
						var entity: InboundEmailPM;
						if (pm) {
							entity = this.MapJsonToEntityPM(pm);
						}

						var serviceResponse: ServiceResponse = new ServiceResponse();
						serviceResponse.Result = entity;
              
						var servertime = response.headers.get('ServerExecutionTime');
						PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "InboundEmail", "GetSinglePM", 'id=' + id);
				 
						return serviceResponse;

					}),
					
					catchError(ServiceHelper.HandleServiceError));
		});                    
	}

	insert(entityPM: InboundEmailPM) {
 
		var callTime = new Date();  
		
		return defer(() => {

			var serviceResponse: ServiceResponse = new ServiceResponse();
			var validator: ClassLevelValidator = new ClassLevelValidator();                
			var errorsArray = validator.Validate("InboundEmail", entityPM);


			if (errorsArray.length == 0) {

				var mappedEntity: InboundEmailPM = this.MapJsonToEntityPM(entityPM, false);
				
				return this._http.post(this._apiUrl, JSON.stringify(mappedEntity), ServiceHelper.GetHttpFullHeaders())
					.pipe(
						map((response: HttpResponse<any>) => {

							var pm = response.body;
							if (pm) {
								var mappedResult: InboundEmailPM = this.MapJsonToEntityPM(pm, true, entityPM);
								serviceResponse.Result = mappedResult;
							}						

							var servertime = response.headers.get('ServerExecutionTime');
							PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "InboundEmail", "SaveChanges", "");                    
												                             
							return serviceResponse;
						}),

						catchError(ServiceHelper.HandleServiceError));
			}

			else {
				serviceResponse.HasError = true;
				serviceResponse.ErrorsArray = errorsArray;
				return of(serviceResponse);
			}
		});
	}

	update(entityPM: InboundEmailPM) {

		var callTime = new Date();     
		
		return defer(() => {

			var serviceResponse: ServiceResponse = new ServiceResponse();
			var validator: ClassLevelValidator = new ClassLevelValidator();               
			var errorsArray = validator.Validate("InboundEmail", entityPM);


			if (errorsArray.length == 0) {

				var mappedEntity: InboundEmailPM = this.MapJsonToEntityPM(entityPM, false);
				
				return this._http.put(this._apiUrl, JSON.stringify(mappedEntity), ServiceHelper.GetHttpFullHeaders())
					.pipe(
						map((response: HttpResponse<any>) => {
                 
							var pm = response.body;
							if (pm) {
								var mappedResult: InboundEmailPM = this.MapJsonToEntityPM(pm, true, entityPM);
								serviceResponse.Result = mappedResult;
							}
							 
							var servertime = response.headers.get('ServerExecutionTime');
							PerformanceLogger.InsertPerformanceLog(callTime, new Date(), Number(servertime), "InboundEmail", "SaveChanges", "");                    
					                           
							return serviceResponse;
						}),

						catchError(ServiceHelper.HandleServiceError));
			}

			else {
				serviceResponse.HasError = true;
				serviceResponse.ErrorsArray = errorsArray;
				return of(serviceResponse);
			}
		});
	}

   

	  MapJsonToEntityPM(jsonPM: any, mapParent: boolean = true, entityPM: InboundEmailPM = null) {

         
        if (!entityPM) {
            
            entityPM = new InboundEmailPM();
			entityPM.DisableMarkAsDirty = true;
        }

		var customFields: Array<string> = [];
        for (var i = 1; i < 11; i++) {
            customFields.push("Field" + i);
        }
            var jsonPMKeys = Object.keys(jsonPM);

            for (var key in jsonPMKeys) {
			 if (jsonPMKeys[key] === "UIProperties" || jsonPMKeys[key] === "PropertyChanged") {

                continue;
            }
                var property = jsonPMKeys[key];
				
			  if(customFields.indexOf(property) > -1)
                {
                if (jsonPM[property]) {
                    var customFieldClass: CustomFieldClass = new CustomFieldClass(jsonPM[property].Value, jsonPM[property].FieldName, jsonPM[property].TableName);
                    entityPM[property] = customFieldClass;
                }
            }
            else {
                entityPM[property] = jsonPM[property];
            }
                 
            }
			
               this.MapInboundEmailLines(entityPM, jsonPM, mapParent); // Call composition tables map methods
			 
            

		if (mapParent) {
                entityPM.OldEntityPM = this.clone(entityPM);
			   			   
            entityPM.OldEntityPM.InboundEmailLines = [];
            for (var item in entityPM.InboundEmailLines) {
            var myInboundEmailLinePM = entityPM.InboundEmailLines[item];
            var newInboundEmailLinePM: InboundEmailLinePM = this.clone(myInboundEmailLinePM);
						
							 
            entityPM.OldEntityPM.InboundEmailLines.push(newInboundEmailLinePM);
            }
			   
		}
        else {

            entityPM.OldEntityPM = null;
        }
		entityPM.IsDirty = false;
	    entityPM.DisableMarkAsDirty = false;

        return entityPM;
    }

    MapInboundEmailLines(entityPM: InboundEmailPM, jsonPM: any, mapParent: boolean = true) {

        var oldInboundEmailLines: InboundEmailLinePM[] = [];
        if (entityPM.OldEntityPM && !mapParent) {
            oldInboundEmailLines = entityPM.OldEntityPM.InboundEmailLines;
        }

        entityPM.InboundEmailLines = new Array<InboundEmailLinePM>();
        for (var item in jsonPM.InboundEmailLines) {
            var jItem = jsonPM.InboundEmailLines[item];
            if (mapParent && (jItem.ChangeSetOp == "Delete" || jItem.ChangeSetOp == 3)) {
                continue;
            }
            var newInboundEmailLinePM: InboundEmailLinePM;
	  
            if (mapParent) {
                newInboundEmailLinePM = new InboundEmailLinePM(entityPM);
            }
            else
            {
                newInboundEmailLinePM = new InboundEmailLinePM(null);
            }
 			newInboundEmailLinePM.DisableMarkAsDirty = true;
               
            var pmKeysArray = Object.keys(jItem);
            for (var pmKey in pmKeysArray) {
                if ((!mapParent && pmKeysArray[pmKey] === "entityParentPM" )|| pmKeysArray[pmKey] === "UIProperties" || pmKeysArray[pmKey] === "PropertyChanged") {
                    continue;
                }
                var pmProperty = pmKeysArray[pmKey];
                newInboundEmailLinePM[pmProperty] = jItem[pmProperty];
            }
           
			 
            if (mapParent) {
                newInboundEmailLinePM.UniqueKey = Guid.newGuid();
                newInboundEmailLinePM.ChangeSetOp = "None";
                jItem.ChangeSetOp = "None";
                newInboundEmailLinePM.OldEntityPM = this.clone(newInboundEmailLinePM);

				
            }
            else {
                if (newInboundEmailLinePM.UniqueKey) {

                    if (jItem.IsDirty)
                        newInboundEmailLinePM.ChangeSetOp = "Update";
                }
                else {
                        newInboundEmailLinePM.ChangeSetOp = "Insert";
                }
 
                newInboundEmailLinePM.OldEntityPM = null;
                newInboundEmailLinePM.EntityParentPM = null;
            }
			 newInboundEmailLinePM.DisableMarkAsDirty = false;
			 newInboundEmailLinePM.IsDirty = false;
            entityPM.InboundEmailLines.push(newInboundEmailLinePM);
        }
        if (oldInboundEmailLines) {
            
            for (var itemKey in oldInboundEmailLines) {
                if (entityPM.InboundEmailLines.filter(p=> p.UniqueKey === oldInboundEmailLines[itemKey].UniqueKey).length === 0) {
				
                    if (oldInboundEmailLines[itemKey]) {
                        //oldInboundEmailLines[itemKey].ChangeSetOp = "Delete";
                        //entityPM.InboundEmailLines.push(oldInboundEmailLines[itemKey]);
						var oldItemJson = oldInboundEmailLines[itemKey];
                        var deletedPM: InboundEmailLinePM = new InboundEmailLinePM(null);
						deletedPM.DisableMarkAsDirty = true;
                        var pmKeys = Object.keys(oldItemJson);
                        for (var key in pmKeys) {

                            if ((!mapParent && pmKeys[key] === "entityParentPM") || pmKeys[key] === "UIProperties" || pmKeys[key] === "OldEntityPM" || pmKeys[key] === "PropertyChanged") {
                                continue;
                            }

                            var property = pmKeys[key];
                            deletedPM[property] = oldItemJson[property];
                        }

					    deletedPM.DisableMarkAsDirty = false;
                        deletedPM.IsDirty = false;
                        deletedPM.ChangeSetOp = "Delete";
                        
                        deletedPM.OldEntityPM = null;
                        entityPM.InboundEmailLines.push(deletedPM);
                    }
                }
            }
        }
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
		    var entityPM: InboundEmailPM;
			entityPM = new InboundEmailPM();
			entityPM.Tenant = InfraSettings.TenantPM.Id;
			return entityPM;
    }
		 

}
