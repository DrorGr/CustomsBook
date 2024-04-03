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

export class DWObjectTablePM {
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

	private typeCode: string;
	public get TypeCode() {
		return this.typeCode;
	}
	public set TypeCode(newValue: string) {
		if (this.typeCode != newValue) {
			this.typeCode = newValue;
			this.MarkAsDirty('TypeCode');
		}
	}

	private isClosed: boolean;
	public get IsClosed() {
		return this.isClosed;
	}
	public set IsClosed(newValue: boolean) {
		if (this.isClosed != newValue) {
			this.isClosed = newValue;
			this.MarkAsDirty('IsClosed');
		}
	}

	private defaultFilterBy: string;
	public get DefaultFilterBy() {
		return this.defaultFilterBy;
	}
	public set DefaultFilterBy(newValue: string) {
		if (this.defaultFilterBy != newValue) {
			this.defaultFilterBy = newValue;
			this.MarkAsDirty('DefaultFilterBy');
		}
	}

	private dataViewName: string;
	public get DataViewName() {
		return this.dataViewName;
	}
	public set DataViewName(newValue: string) {
		if (this.dataViewName != newValue) {
			this.dataViewName = newValue;
			this.MarkAsDirty('DataViewName');
		}
	}

	private hasPivotColumn: boolean;
	public get HasPivotColumn() {
		return this.hasPivotColumn;
	}
	public set HasPivotColumn(newValue: boolean) {
		if (this.hasPivotColumn != newValue) {
			this.hasPivotColumn = newValue;
			this.MarkAsDirty('HasPivotColumn');
		}
	}

	private pivotFieldCode: string;
	public get PivotFieldCode() {
		return this.pivotFieldCode;
	}
	public set PivotFieldCode(newValue: string) {
		if (this.pivotFieldCode != newValue) {
			this.pivotFieldCode = newValue;
			this.MarkAsDirty('PivotFieldCode');
		}
	}

	private additionalFactCode: string;
	public get AdditionalFactCode() {
		return this.additionalFactCode;
	}
	public set AdditionalFactCode(newValue: string) {
		if (this.additionalFactCode != newValue) {
			this.additionalFactCode = newValue;
			this.MarkAsDirty('AdditionalFactCode');
		}
	}

	private additionalFactForeignKey: string;
	public get AdditionalFactForeignKey() {
		return this.additionalFactForeignKey;
	}
	public set AdditionalFactForeignKey(newValue: string) {
		if (this.additionalFactForeignKey != newValue) {
			this.additionalFactForeignKey = newValue;
			this.MarkAsDirty('AdditionalFactForeignKey');
		}
	}

	private parentFactCode: string;
	public get ParentFactCode() {
		return this.parentFactCode;
	}
	public set ParentFactCode(newValue: string) {
		if (this.parentFactCode != newValue) {
			this.parentFactCode = newValue;
			this.MarkAsDirty('ParentFactCode');
		}
	}

	private recordType: string;
	public get RecordType() {
		return this.recordType;
	}
	public set RecordType(newValue: string) {
		if (this.recordType != newValue) {
			this.recordType = newValue;
			this.MarkAsDirty('RecordType');
		}
	}

	private displayName: string;
	public get DisplayName() {
		return this.displayName;
	}
	public set DisplayName(newValue: string) {
		if (this.displayName != newValue) {
			this.displayName = newValue;
			this.MarkAsDirty('DisplayName');
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

	private maxNumberOfCustomFields: number;
	public get MaxNumberOfCustomFields() {
		return this.maxNumberOfCustomFields;
	}
	public set MaxNumberOfCustomFields(newValue: number) {
		if (this.maxNumberOfCustomFields != newValue) {
			this.maxNumberOfCustomFields = newValue;
			this.MarkAsDirty('MaxNumberOfCustomFields');
		}
	}

	private hasCustomFields: boolean;
	public get HasCustomFields() {
		return this.hasCustomFields;
	}
	public set HasCustomFields(newValue: boolean) {
		if (this.hasCustomFields != newValue) {
			this.hasCustomFields = newValue;
			this.MarkAsDirty('HasCustomFields');
		}
	}

	private additionalFactRelationType: string;
	public get AdditionalFactRelationType() {
		return this.additionalFactRelationType;
	}
	public set AdditionalFactRelationType(newValue: string) {
		if (this.additionalFactRelationType != newValue) {
			this.additionalFactRelationType = newValue;
			this.MarkAsDirty('AdditionalFactRelationType');
		}
	}

	public OldEntityPM: DWObjectTablePM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'DWObjectTable');
			}
		}
	}
	private MyClone: DWObjectTablePM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}
