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

export class BluesnapContractTypePM {
	constructor() {
		this.IsDirty = false;
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

	private name: string;
	public get Name() {
		return this.name;
	}
	public set Name(newValue: string) {
		if (this.name != newValue) {
			this.name = newValue;
			this.MarkAsDirty('Name');
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

	public OldEntityPM: BluesnapContractTypePM;

	public IsDirty: boolean;
	MarkAsDirty(propertyName: string = null) {
		this.IsDirty = true;

		if (propertyName != null) {
			ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'BluesnapContractType');
		}
	}
	private MyClone: BluesnapContractTypePM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}
