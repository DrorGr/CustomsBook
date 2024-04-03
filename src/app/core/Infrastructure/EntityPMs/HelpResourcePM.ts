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

export class HelpResourcePM {
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

	private createDate: Date;
	public get CreateDate() {
		return this.createDate;
	}
	public set CreateDate(newValue: Date) {
		if (this.createDate != newValue) {
			this.createDate = newValue;
			this.MarkAsDirty('CreateDate');
		}
	}

	private updateDate: Date;
	public get UpdateDate() {
		return this.updateDate;
	}
	public set UpdateDate(newValue: Date) {
		if (this.updateDate != newValue) {
			this.updateDate = newValue;
			this.MarkAsDirty('UpdateDate');
		}
	}

	private language: string;
	public get Language() {
		return this.language;
	}
	public set Language(newValue: string) {
		if (this.language != newValue) {
			this.language = newValue;
			this.MarkAsDirty('Language');
		}
	}

	private type: string;
	public get Type() {
		return this.type;
	}
	public set Type(newValue: string) {
		if (this.type != newValue) {
			this.type = newValue;
			this.MarkAsDirty('Type');
		}
	}

	private category: string;
	public get Category() {
		return this.category;
	}
	public set Category(newValue: string) {
		if (this.category != newValue) {
			this.category = newValue;
			this.MarkAsDirty('Category');
		}
	}

	private videoURL: string;
	public get VideoURL() {
		return this.videoURL;
	}
	public set VideoURL(newValue: string) {
		if (this.videoURL != newValue) {
			this.videoURL = newValue;
			this.MarkAsDirty('VideoURL');
		}
	}

	private duration: string;
	public get Duration() {
		return this.duration;
	}
	public set Duration(newValue: string) {
		if (this.duration != newValue) {
			this.duration = newValue;
			this.MarkAsDirty('Duration');
		}
	}

	private fileName: string;
	public get FileName() {
		return this.fileName;
	}
	public set FileName(newValue: string) {
		if (this.fileName != newValue) {
			this.fileName = newValue;
			this.MarkAsDirty('FileName');
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

	private isNew: boolean;
	public get IsNew() {
		return this.isNew;
	}
	public set IsNew(newValue: boolean) {
		if (this.isNew != newValue) {
			this.isNew = newValue;
			this.MarkAsDirty('IsNew');
		}
	}

	private featureCode: string;
	public get FeatureCode() {
		return this.featureCode;
	}
	public set FeatureCode(newValue: string) {
		if (this.featureCode != newValue) {
			this.featureCode = newValue;
			this.MarkAsDirty('FeatureCode');
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

	private file: string;
	public get File() {
		return this.file;
	}
	public set File(newValue: string) {
		if (this.file != newValue) {
			this.file = newValue;
			this.MarkAsDirty('File');
		}
	}

	private fileExtension: string;
	public get FileExtension() {
		return this.fileExtension;
	}
	public set FileExtension(newValue: string) {
		if (this.fileExtension != newValue) {
			this.fileExtension = newValue;
			this.MarkAsDirty('FileExtension');
		}
	}

	private inactive: boolean;
	public get Inactive() {
		return this.inactive;
	}
	public set Inactive(newValue: boolean) {
		if (this.inactive != newValue) {
			this.inactive = newValue;
			this.MarkAsDirty('Inactive');
		}
	}

	public OldEntityPM: HelpResourcePM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'HelpResource');
			}
		}
	}
	private MyClone: HelpResourcePM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}