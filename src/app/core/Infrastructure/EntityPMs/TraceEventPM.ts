//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a logitude.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

import { ServiceHelper } from '../../Infrastructure/Utilities/ServiceHelper';
import { ServiceLocator } from '../../Infrastructure/Locators/ServiceLocator';
import { Output, EventEmitter } from '@angular/core';
import { PropertyChangedArgs } from '../../Infrastructure/EventEmitterArgs/PropertyChangedArgs';
import { CustomFieldClass } from '../../Infrastructure/DataContracts/CustomFieldClass';

export class TraceEventPM {
	constructor() {
		this.IsDirty = false;
	}

	private id: string;
	public get Id() {
		return this.id;
	}
	public set Id(newValue: string) {
		if (this.id != newValue) {
			this.id = newValue;
			this.MarkAsDirty('Id');
		}
	}

	private tenant: number;
	public get Tenant() {
		return this.tenant;
	}
	public set Tenant(newValue: number) {
		if (this.tenant != newValue) {
			this.tenant = newValue;
			this.MarkAsDirty('Tenant');
		}
	}

	private objectTableId: string;
	public get ObjectTableId() {
		return this.objectTableId;
	}
	public set ObjectTableId(newValue: string) {
		if (this.objectTableId != newValue) {
			this.objectTableId = newValue;
			this.MarkAsDirty('ObjectTableId');
		}
	}

	private entityId: string;
	public get EntityId() {
		return this.entityId;
	}
	public set EntityId(newValue: string) {
		if (this.entityId != newValue) {
			this.entityId = newValue;
			this.MarkAsDirty('EntityId');
		}
	}

	private entityNumber: string;
	public get EntityNumber() {
		return this.entityNumber;
	}
	public set EntityNumber(newValue: string) {
		if (this.entityNumber != newValue) {
			this.entityNumber = newValue;
			this.MarkAsDirty('EntityNumber');
		}
	}

	private eventTypeId: string;
	public get EventTypeId() {
		return this.eventTypeId;
	}
	public set EventTypeId(newValue: string) {
		if (this.eventTypeId != newValue) {
			this.eventTypeId = newValue;
			this.MarkAsDirty('EventTypeId');
		}
	}

	private eventDateTime: Date;
	public get EventDateTime() {
		return this.eventDateTime;
	}
	public set EventDateTime(newValue: Date) {
		if (this.eventDateTime != newValue) {
			this.eventDateTime = newValue;
			this.MarkAsDirty('EventDateTime');
		}
	}

	private logDateTime: Date;
	public get LogDateTime() {
		return this.logDateTime;
	}
	public set LogDateTime(newValue: Date) {
		if (this.logDateTime != newValue) {
			this.logDateTime = newValue;
			this.MarkAsDirty('LogDateTime');
		}
	}

	private userId: string;
	public get UserId() {
		return this.userId;
	}
	public set UserId(newValue: string) {
		if (this.userId != newValue) {
			this.userId = newValue;
			this.MarkAsDirty('UserId');
		}
	}

	private notes: string;
	public get Notes() {
		return this.notes;
	}
	public set Notes(newValue: string) {
		if (this.notes != newValue) {
			this.notes = newValue;
			this.MarkAsDirty('Notes');
		}
	}

	private eventTypeEnglishName: string;
	public get EventTypeEnglishName() {
		return this.eventTypeEnglishName;
	}
	public set EventTypeEnglishName(newValue: string) {
		if (this.eventTypeEnglishName != newValue) {
			this.eventTypeEnglishName = newValue;
			this.MarkAsDirty('EventTypeEnglishName');
		}
	}

	private eventTypeLocalName: string;
	public get EventTypeLocalName() {
		return this.eventTypeLocalName;
	}
	public set EventTypeLocalName(newValue: string) {
		if (this.eventTypeLocalName != newValue) {
			this.eventTypeLocalName = newValue;
			this.MarkAsDirty('EventTypeLocalName');
		}
	}

	private contactEnglishFirstName: string;
	public get ContactEnglishFirstName() {
		return this.contactEnglishFirstName;
	}
	public set ContactEnglishFirstName(newValue: string) {
		if (this.contactEnglishFirstName != newValue) {
			this.contactEnglishFirstName = newValue;
			this.MarkAsDirty('ContactEnglishFirstName');
		}
	}

	private deleted: boolean;
	public get Deleted() {
		return this.deleted;
	}
	public set Deleted(newValue: boolean) {
		if (this.deleted != newValue) {
			this.deleted = newValue;
			this.MarkAsDirty('Deleted');
		}
	}

	private shortView: boolean;
	public get ShortView() {
		return this.shortView;
	}
	public set ShortView(newValue: boolean) {
		if (this.shortView != newValue) {
			this.shortView = newValue;
			this.MarkAsDirty('ShortView');
		}
	}

	private isManualEntry: boolean;
	public get IsManualEntry() {
		return this.isManualEntry;
	}
	public set IsManualEntry(newValue: boolean) {
		if (this.isManualEntry != newValue) {
			this.isManualEntry = newValue;
			this.MarkAsDirty('IsManualEntry');
		}
	}

	private eventTypeCode: string;
	public get EventTypeCode() {
		return this.eventTypeCode;
	}
	public set EventTypeCode(newValue: string) {
		if (this.eventTypeCode != newValue) {
			this.eventTypeCode = newValue;
			this.MarkAsDirty('EventTypeCode');
		}
	}

	private externalId: string;
	public get ExternalId() {
		return this.externalId;
	}
	public set ExternalId(newValue: string) {
		if (this.externalId != newValue) {
			this.externalId = newValue;
			this.MarkAsDirty('ExternalId');
		}
	}

	private eventTypeCategoryCode: string;
	public get EventTypeCategoryCode() {
		return this.eventTypeCategoryCode;
	}
	public set EventTypeCategoryCode(newValue: string) {
		if (this.eventTypeCategoryCode != newValue) {
			this.eventTypeCategoryCode = newValue;
			this.MarkAsDirty('EventTypeCategoryCode');
		}
	}

	private partnerName: string;
	public get PartnerName() {
		return this.partnerName;
	}
	public set PartnerName(newValue: string) {
		if (this.partnerName != newValue) {
			this.partnerName = newValue;
			this.MarkAsDirty('PartnerName');
		}
	}

	private isAgentView: boolean;
	public get IsAgentView() {
		return this.isAgentView;
	}
	public set IsAgentView(newValue: boolean) {
		if (this.isAgentView != newValue) {
			this.isAgentView = newValue;
			this.MarkAsDirty('IsAgentView');
		}
	}

	private isCustomerView: boolean;
	public get IsCustomerView() {
		return this.isCustomerView;
	}
	public set IsCustomerView(newValue: boolean) {
		if (this.isCustomerView != newValue) {
			this.isCustomerView = newValue;
			this.MarkAsDirty('IsCustomerView');
		}
	}

	private isAddedManually: boolean;
	public get IsAddedManually() {
		return this.isAddedManually;
	}
	public set IsAddedManually(newValue: boolean) {
		if (this.isAddedManually != newValue) {
			this.isAddedManually = newValue;
			this.MarkAsDirty('IsAddedManually');
		}
	}

	private customerCareUserEmail: string;
	public get CustomerCareUserEmail() {
		return this.customerCareUserEmail;
	}
	public set CustomerCareUserEmail(newValue: string) {
		if (this.customerCareUserEmail != newValue) {
			this.customerCareUserEmail = newValue;
			this.MarkAsDirty('CustomerCareUserEmail');
		}
	}

	private location: string;
	public get Location() {
		return this.location;
	}
	public set Location(newValue: string) {
		if (this.location != newValue) {
			this.location = newValue;
			this.MarkAsDirty('Location');
		}
	}

	public OldEntityPM: TraceEventPM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'TraceEvent');
			}
		}
	}
	private MyClone: TraceEventPM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}