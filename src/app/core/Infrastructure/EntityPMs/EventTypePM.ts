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

export class EventTypePM {
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

	private code: string;
	public get Code() {
		return this.code;
	}
	public set Code(newValue: string) {
		if (this.code != newValue) {
			this.code = newValue;
			this.MarkAsDirty('Code');
		}
	}

	private addedManually: boolean;
	public get AddedManually() {
		return this.addedManually;
	}
	public set AddedManually(newValue: boolean) {
		if (this.addedManually != newValue) {
			this.addedManually = newValue;
			this.MarkAsDirty('AddedManually');
		}
	}

	private englishName: string;
	public get EnglishName() {
		return this.englishName;
	}
	public set EnglishName(newValue: string) {
		if (this.englishName != newValue) {
			this.englishName = newValue;
			this.MarkAsDirty('EnglishName');
		}
	}

	private localName: string;
	public get LocalName() {
		return this.localName;
	}
	public set LocalName(newValue: string) {
		if (this.localName != newValue) {
			this.localName = newValue;
			this.MarkAsDirty('LocalName');
		}
	}

	private computedLocalName: string;
	public get ComputedLocalName() {
		return this.computedLocalName;
	}
	public set ComputedLocalName(newValue: string) {
		if (this.computedLocalName != newValue) {
			this.computedLocalName = newValue;
			this.MarkAsDirty('ComputedLocalName');
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

	private entityStatusId: string;
	public get EntityStatusId() {
		return this.entityStatusId;
	}
	public set EntityStatusId(newValue: string) {
		if (this.entityStatusId != newValue) {
			this.entityStatusId = newValue;
			this.MarkAsDirty('EntityStatusId');
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

	private eventGroupCode: string;
	public get EventGroupCode() {
		return this.eventGroupCode;
	}
	public set EventGroupCode(newValue: string) {
		if (this.eventGroupCode != newValue) {
			this.eventGroupCode = newValue;
			this.MarkAsDirty('EventGroupCode');
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

	private isFollowUp: boolean;
	public get IsFollowUp() {
		return this.isFollowUp;
	}
	public set IsFollowUp(newValue: boolean) {
		if (this.isFollowUp != newValue) {
			this.isFollowUp = newValue;
			this.MarkAsDirty('IsFollowUp');
		}
	}

	private followUpEnglishName: string;
	public get FollowUpEnglishName() {
		return this.followUpEnglishName;
	}
	public set FollowUpEnglishName(newValue: string) {
		if (this.followUpEnglishName != newValue) {
			this.followUpEnglishName = newValue;
			this.MarkAsDirty('FollowUpEnglishName');
		}
	}

	private followUpLocalName: string;
	public get FollowUpLocalName() {
		return this.followUpLocalName;
	}
	public set FollowUpLocalName(newValue: string) {
		if (this.followUpLocalName != newValue) {
			this.followUpLocalName = newValue;
			this.MarkAsDirty('FollowUpLocalName');
		}
	}

	private manualActivatedFollowUp: boolean;
	public get ManualActivatedFollowUp() {
		return this.manualActivatedFollowUp;
	}
	public set ManualActivatedFollowUp(newValue: boolean) {
		if (this.manualActivatedFollowUp != newValue) {
			this.manualActivatedFollowUp = newValue;
			this.MarkAsDirty('ManualActivatedFollowUp');
		}
	}

	private entityStatusName: string;
	public get EntityStatusName() {
		return this.entityStatusName;
	}
	public set EntityStatusName(newValue: string) {
		if (this.entityStatusName != newValue) {
			this.entityStatusName = newValue;
			this.MarkAsDirty('EntityStatusName');
		}
	}

	private inActive: boolean;
	public get InActive() {
		return this.inActive;
	}
	public set InActive(newValue: boolean) {
		if (this.inActive != newValue) {
			this.inActive = newValue;
			this.MarkAsDirty('InActive');
		}
	}

	private searchFields: string;
	public get SearchFields() {
		return this.searchFields;
	}
	public set SearchFields(newValue: string) {
		if (this.searchFields != newValue) {
			this.searchFields = newValue;
			this.MarkAsDirty('SearchFields');
		}
	}

	private customerRoleId: string;
	public get CustomerRoleId() {
		return this.customerRoleId;
	}
	public set CustomerRoleId(newValue: string) {
		if (this.customerRoleId != newValue) {
			this.customerRoleId = newValue;
			this.MarkAsDirty('CustomerRoleId');
		}
	}

	private agentRoleId: string;
	public get AgentRoleId() {
		return this.agentRoleId;
	}
	public set AgentRoleId(newValue: string) {
		if (this.agentRoleId != newValue) {
			this.agentRoleId = newValue;
			this.MarkAsDirty('AgentRoleId');
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

	private isSharedLogisticsEnabled: boolean;
	public get IsSharedLogisticsEnabled() {
		return this.isSharedLogisticsEnabled;
	}
	public set IsSharedLogisticsEnabled(newValue: boolean) {
		if (this.isSharedLogisticsEnabled != newValue) {
			this.isSharedLogisticsEnabled = newValue;
			this.MarkAsDirty('IsSharedLogisticsEnabled');
		}
	}

	private objectTableName: string;
	public get ObjectTableName() {
		return this.objectTableName;
	}
	public set ObjectTableName(newValue: string) {
		if (this.objectTableName != newValue) {
			this.objectTableName = newValue;
			this.MarkAsDirty('ObjectTableName');
		}
	}

	private isHybrid: boolean;
	public get IsHybrid() {
		return this.isHybrid;
	}
	public set IsHybrid(newValue: boolean) {
		if (this.isHybrid != newValue) {
			this.isHybrid = newValue;
			this.MarkAsDirty('IsHybrid');
		}
	}

	private allowedInAutomation: boolean;
	public get AllowedInAutomation() {
		return this.allowedInAutomation;
	}
	public set AllowedInAutomation(newValue: boolean) {
		if (this.allowedInAutomation != newValue) {
			this.allowedInAutomation = newValue;
			this.MarkAsDirty('AllowedInAutomation');
		}
	}

	private customField: string;
	public get CustomField() {
		return this.customField;
	}
	public set CustomField(newValue: string) {
		if (this.customField != newValue) {
			this.customField = newValue;
			this.MarkAsDirty('CustomField');
		}
	}

	private isStatusNotModified: boolean;
	public get IsStatusNotModified() {
		return this.isStatusNotModified;
	}
	public set IsStatusNotModified(newValue: boolean) {
		if (this.isStatusNotModified != newValue) {
			this.isStatusNotModified = newValue;
			this.MarkAsDirty('IsStatusNotModified');
		}
	}

	public OldEntityPM: EventTypePM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'EventType');
			}
		}
	}
	private MyClone: EventTypePM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}
