//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a logitude.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// import {VatTypePM} from './VatTypePM';
// import {UIProperties, UIProperty} from '../../Infrastructure/Components/LogitudeComponents/UIProperties';
import { ServiceHelper } from '../../Infrastructure/Utilities/ServiceHelper';
import { ServiceLocator } from '../../Infrastructure/Locators/ServiceLocator';
import { Output, EventEmitter } from '@angular/core';
import { PropertyChangedArgs } from '../../Infrastructure/EventEmitterArgs/PropertyChangedArgs';
import { CustomFieldClass } from '../../Infrastructure/DataContracts/CustomFieldClass';

export class VATTypesGroupPM {
	//   @Output() PropertyChanged: EventEmitter<PropertyChangedArgs> = new EventEmitter<PropertyChangedArgs>();
	//
	//         constructor(_entityParentPM: any) {
	//       this.EntityParentPM = _entityParentPM;
	//
	//       this.IsDirty = false;
	//   }

	private groupVATTypeId: string;
	public get GroupVATTypeId() {
		return this.groupVATTypeId;
	}
	public set GroupVATTypeId(newValue: string) {
		if (this.groupVATTypeId != newValue) {
			this.groupVATTypeId = newValue;
			this.MarkAsDirty('GroupVATTypeId');
		}
	}

	private singleVATTypeId: string;
	public get SingleVATTypeId() {
		return this.singleVATTypeId;
	}
	public set SingleVATTypeId(newValue: string) {
		if (this.singleVATTypeId != newValue) {
			this.singleVATTypeId = newValue;
			this.MarkAsDirty('SingleVATTypeId');
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

	private changeSetOp: string;
	public get ChangeSetOp() {
		return this.changeSetOp;
	}
	public set ChangeSetOp(newValue: string) {
		if (this.changeSetOp != newValue) {
			this.changeSetOp = newValue;
			this.MarkAsDirty('ChangeSetOp');
		}
	}

	private singleVATTypeName: string;
	public get SingleVATTypeName() {
		return this.singleVATTypeName;
	}
	public set SingleVATTypeName(newValue: string) {
		if (this.singleVATTypeName != newValue) {
			this.singleVATTypeName = newValue;
			this.MarkAsDirty('SingleVATTypeName');
		}
	}

	private singleVATTypePercentage: number;
	public get SingleVATTypePercentage() {
		return this.singleVATTypePercentage;
	}
	public set SingleVATTypePercentage(newValue: number) {
		if (this.singleVATTypePercentage != newValue) {
			this.singleVATTypePercentage = newValue;
			this.MarkAsDirty('SingleVATTypePercentage');
		}
	}

	public OldEntityPM: VATTypesGroupPM;

	private entityParentPM: any;
	public get EntityParentPM() {
		return this.entityParentPM;
	}
	public set EntityParentPM(newValue: any) {
		this.entityParentPM = newValue;
	}

	public UniqueKey: string;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;
			if (this.EntityParentPM) {
				this.EntityParentPM.MarkAsDirty();
			}
			if (propertyName != null) {
				// this.PropertyChanged.emit(new PropertyChangedArgs(propertyName,this));
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'VATTypesGroup');
			}
		}
	}
	private MyClone: VATTypesGroupPM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}
