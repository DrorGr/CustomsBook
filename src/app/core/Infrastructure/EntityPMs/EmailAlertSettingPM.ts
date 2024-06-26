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

export class EmailAlertSettingPM {
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

	private description: string;
	public get Description() {
		return this.description;
	}
	public set Description(newValue: string) {
		if (this.description != newValue) {
			this.description = newValue;
			this.MarkAsDirty('Description');
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

	private settingLevelCode: string;
	public get SettingLevelCode() {
		return this.settingLevelCode;
	}
	public set SettingLevelCode(newValue: string) {
		if (this.settingLevelCode != newValue) {
			this.settingLevelCode = newValue;
			this.MarkAsDirty('SettingLevelCode');
		}
	}

	private to: string;
	public get To() {
		return this.to;
	}
	public set To(newValue: string) {
		if (this.to != newValue) {
			this.to = newValue;
			this.MarkAsDirty('To');
		}
	}

	private indexOrder: number;
	public get IndexOrder() {
		return this.indexOrder;
	}
	public set IndexOrder(newValue: number) {
		if (this.indexOrder != newValue) {
			this.indexOrder = newValue;
			this.MarkAsDirty('IndexOrder');
		}
	}

	public OldEntityPM: EmailAlertSettingPM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'EmailAlertSetting');
			}
		}
	}
	private MyClone: EmailAlertSettingPM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}
