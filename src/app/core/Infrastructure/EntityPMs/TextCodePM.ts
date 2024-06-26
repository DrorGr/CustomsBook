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

export class TextCodePM {
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

	private defaultText: string;
	public get DefaultText() {
		return this.defaultText;
	}
	public set DefaultText(newValue: string) {
		if (this.defaultText != newValue) {
			this.defaultText = newValue;
			this.MarkAsDirty('DefaultText');
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

	private textCodeTypeCode: string;
	public get TextCodeTypeCode() {
		return this.textCodeTypeCode;
	}
	public set TextCodeTypeCode(newValue: string) {
		if (this.textCodeTypeCode != newValue) {
			this.textCodeTypeCode = newValue;
			this.MarkAsDirty('TextCodeTypeCode');
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

	private defaultTextPlural: string;
	public get DefaultTextPlural() {
		return this.defaultTextPlural;
	}
	public set DefaultTextPlural(newValue: string) {
		if (this.defaultTextPlural != newValue) {
			this.defaultTextPlural = newValue;
			this.MarkAsDirty('DefaultTextPlural');
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

	private isSpellChecked: boolean;
	public get IsSpellChecked() {
		return this.isSpellChecked;
	}
	public set IsSpellChecked(newValue: boolean) {
		if (this.isSpellChecked != newValue) {
			this.isSpellChecked = newValue;
			this.MarkAsDirty('IsSpellChecked');
		}
	}

	private spellCheckDate: Date;
	public get SpellCheckDate() {
		return this.spellCheckDate;
	}
	public set SpellCheckDate(newValue: Date) {
		if (this.spellCheckDate != newValue) {
			this.spellCheckDate = newValue;
			this.MarkAsDirty('SpellCheckDate');
		}
	}

	private spellCheckedByUserId: string;
	public get SpellCheckedByUserId() {
		return this.spellCheckedByUserId;
	}
	public set SpellCheckedByUserId(newValue: string) {
		if (this.spellCheckedByUserId != newValue) {
			this.spellCheckedByUserId = newValue;
			this.MarkAsDirty('SpellCheckedByUserId');
		}
	}

	private spellCheckedByUserName: string;
	public get SpellCheckedByUserName() {
		return this.spellCheckedByUserName;
	}
	public set SpellCheckedByUserName(newValue: string) {
		if (this.spellCheckedByUserName != newValue) {
			this.spellCheckedByUserName = newValue;
			this.MarkAsDirty('SpellCheckedByUserName');
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

	private localDefaultText: string;
	public get LocalDefaultText() {
		return this.localDefaultText;
	}
	public set LocalDefaultText(newValue: string) {
		if (this.localDefaultText != newValue) {
			this.localDefaultText = newValue;
			this.MarkAsDirty('LocalDefaultText');
		}
	}

	public OldEntityPM: TextCodePM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'TextCode');
			}
		}
	}
	private MyClone: TextCodePM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}
