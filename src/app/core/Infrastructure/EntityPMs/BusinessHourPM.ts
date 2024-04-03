//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a logitude.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

import { BusinessHoursHolidayPM } from './BusinessHoursHolidayPM';

import { ServiceHelper } from '../../Infrastructure/Utilities/ServiceHelper';
import { ServiceLocator } from '../../Infrastructure/Locators/ServiceLocator';
import { Output, EventEmitter } from '@angular/core';
import { PropertyChangedArgs } from '../../Infrastructure/EventEmitterArgs/PropertyChangedArgs';
import { CustomFieldClass } from '../../Infrastructure/DataContracts/CustomFieldClass';

export class BusinessHourPM {
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

	private is247: boolean;
	public get Is247() {
		return this.is247;
	}
	public set Is247(newValue: boolean) {
		if (this.is247 != newValue) {
			this.is247 = newValue;
			this.MarkAsDirty('Is247');
		}
	}

	private createdByUserId: string;
	public get CreatedByUserId() {
		return this.createdByUserId;
	}
	public set CreatedByUserId(newValue: string) {
		if (this.createdByUserId != newValue) {
			this.createdByUserId = newValue;
			this.MarkAsDirty('CreatedByUserId');
		}
	}

	private updatedByUserId: string;
	public get UpdatedByUserId() {
		return this.updatedByUserId;
	}
	public set UpdatedByUserId(newValue: string) {
		if (this.updatedByUserId != newValue) {
			this.updatedByUserId = newValue;
			this.MarkAsDirty('UpdatedByUserId');
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

	private isMondayEnabeled: boolean;
	public get IsMondayEnabeled() {
		return this.isMondayEnabeled;
	}
	public set IsMondayEnabeled(newValue: boolean) {
		if (this.isMondayEnabeled != newValue) {
			this.isMondayEnabeled = newValue;
			this.MarkAsDirty('IsMondayEnabeled');
		}
	}

	private isTuesdayEnabeled: boolean;
	public get IsTuesdayEnabeled() {
		return this.isTuesdayEnabeled;
	}
	public set IsTuesdayEnabeled(newValue: boolean) {
		if (this.isTuesdayEnabeled != newValue) {
			this.isTuesdayEnabeled = newValue;
			this.MarkAsDirty('IsTuesdayEnabeled');
		}
	}

	private isWednesdayEnabeled: boolean;
	public get IsWednesdayEnabeled() {
		return this.isWednesdayEnabeled;
	}
	public set IsWednesdayEnabeled(newValue: boolean) {
		if (this.isWednesdayEnabeled != newValue) {
			this.isWednesdayEnabeled = newValue;
			this.MarkAsDirty('IsWednesdayEnabeled');
		}
	}

	private isThursdayEnabeled: boolean;
	public get IsThursdayEnabeled() {
		return this.isThursdayEnabeled;
	}
	public set IsThursdayEnabeled(newValue: boolean) {
		if (this.isThursdayEnabeled != newValue) {
			this.isThursdayEnabeled = newValue;
			this.MarkAsDirty('IsThursdayEnabeled');
		}
	}

	private isFridayEnabeled: boolean;
	public get IsFridayEnabeled() {
		return this.isFridayEnabeled;
	}
	public set IsFridayEnabeled(newValue: boolean) {
		if (this.isFridayEnabeled != newValue) {
			this.isFridayEnabeled = newValue;
			this.MarkAsDirty('IsFridayEnabeled');
		}
	}

	private isSaturdayEnabeled: boolean;
	public get IsSaturdayEnabeled() {
		return this.isSaturdayEnabeled;
	}
	public set IsSaturdayEnabeled(newValue: boolean) {
		if (this.isSaturdayEnabeled != newValue) {
			this.isSaturdayEnabeled = newValue;
			this.MarkAsDirty('IsSaturdayEnabeled');
		}
	}

	private isSundayEnabeled: boolean;
	public get IsSundayEnabeled() {
		return this.isSundayEnabeled;
	}
	public set IsSundayEnabeled(newValue: boolean) {
		if (this.isSundayEnabeled != newValue) {
			this.isSundayEnabeled = newValue;
			this.MarkAsDirty('IsSundayEnabeled');
		}
	}

	private mondayFromHour: string;
	public get MondayFromHour() {
		return this.mondayFromHour;
	}
	public set MondayFromHour(newValue: string) {
		if (this.mondayFromHour != newValue) {
			this.mondayFromHour = newValue;
			this.MarkAsDirty('MondayFromHour');
		}
	}

	private tuesdayFromHour: string;
	public get TuesdayFromHour() {
		return this.tuesdayFromHour;
	}
	public set TuesdayFromHour(newValue: string) {
		if (this.tuesdayFromHour != newValue) {
			this.tuesdayFromHour = newValue;
			this.MarkAsDirty('TuesdayFromHour');
		}
	}

	private wednesdayFromHour: string;
	public get WednesdayFromHour() {
		return this.wednesdayFromHour;
	}
	public set WednesdayFromHour(newValue: string) {
		if (this.wednesdayFromHour != newValue) {
			this.wednesdayFromHour = newValue;
			this.MarkAsDirty('WednesdayFromHour');
		}
	}

	private thursdayFromHour: string;
	public get ThursdayFromHour() {
		return this.thursdayFromHour;
	}
	public set ThursdayFromHour(newValue: string) {
		if (this.thursdayFromHour != newValue) {
			this.thursdayFromHour = newValue;
			this.MarkAsDirty('ThursdayFromHour');
		}
	}

	private fridayFromHour: string;
	public get FridayFromHour() {
		return this.fridayFromHour;
	}
	public set FridayFromHour(newValue: string) {
		if (this.fridayFromHour != newValue) {
			this.fridayFromHour = newValue;
			this.MarkAsDirty('FridayFromHour');
		}
	}

	private saturdayFromHour: string;
	public get SaturdayFromHour() {
		return this.saturdayFromHour;
	}
	public set SaturdayFromHour(newValue: string) {
		if (this.saturdayFromHour != newValue) {
			this.saturdayFromHour = newValue;
			this.MarkAsDirty('SaturdayFromHour');
		}
	}

	private sundayFromHour: string;
	public get SundayFromHour() {
		return this.sundayFromHour;
	}
	public set SundayFromHour(newValue: string) {
		if (this.sundayFromHour != newValue) {
			this.sundayFromHour = newValue;
			this.MarkAsDirty('SundayFromHour');
		}
	}

	private mondayToHour: string;
	public get MondayToHour() {
		return this.mondayToHour;
	}
	public set MondayToHour(newValue: string) {
		if (this.mondayToHour != newValue) {
			this.mondayToHour = newValue;
			this.MarkAsDirty('MondayToHour');
		}
	}

	private tuesdayToHour: string;
	public get TuesdayToHour() {
		return this.tuesdayToHour;
	}
	public set TuesdayToHour(newValue: string) {
		if (this.tuesdayToHour != newValue) {
			this.tuesdayToHour = newValue;
			this.MarkAsDirty('TuesdayToHour');
		}
	}

	private wednesdayToHour: string;
	public get WednesdayToHour() {
		return this.wednesdayToHour;
	}
	public set WednesdayToHour(newValue: string) {
		if (this.wednesdayToHour != newValue) {
			this.wednesdayToHour = newValue;
			this.MarkAsDirty('WednesdayToHour');
		}
	}

	private thursdayToHour: string;
	public get ThursdayToHour() {
		return this.thursdayToHour;
	}
	public set ThursdayToHour(newValue: string) {
		if (this.thursdayToHour != newValue) {
			this.thursdayToHour = newValue;
			this.MarkAsDirty('ThursdayToHour');
		}
	}

	private fridayToHour: string;
	public get FridayToHour() {
		return this.fridayToHour;
	}
	public set FridayToHour(newValue: string) {
		if (this.fridayToHour != newValue) {
			this.fridayToHour = newValue;
			this.MarkAsDirty('FridayToHour');
		}
	}

	private saturdayToHour: string;
	public get SaturdayToHour() {
		return this.saturdayToHour;
	}
	public set SaturdayToHour(newValue: string) {
		if (this.saturdayToHour != newValue) {
			this.saturdayToHour = newValue;
			this.MarkAsDirty('SaturdayToHour');
		}
	}

	private sundayToHour: string;
	public get SundayToHour() {
		return this.sundayToHour;
	}
	public set SundayToHour(newValue: string) {
		if (this.sundayToHour != newValue) {
			this.sundayToHour = newValue;
			this.MarkAsDirty('SundayToHour');
		}
	}

	private businessHoursHolidays: BusinessHoursHolidayPM[];
	get BusinessHoursHolidays() {
		if (this.businessHoursHolidays == null) {
			this.businessHoursHolidays = [];
		}

		return this.businessHoursHolidays;
	}
	set BusinessHoursHolidays(newValue: BusinessHoursHolidayPM[]) {
		if (this.businessHoursHolidays != newValue) {
			this.businessHoursHolidays = newValue;
		}
	}
	public AddBusinessHoursHolidayPM(item: BusinessHoursHolidayPM) {
		if (item != null) {
			var index = this.BusinessHoursHolidays.indexOf(item);
			if (index == -1) {
				item.EntityParentPM = this;

				this.BusinessHoursHolidays.push(item);
				this.MarkAsDirty();
			}
		}
	}
	public RemoveBusinessHoursHolidayPM(item: BusinessHoursHolidayPM) {
		if (item != null) {
			var index = this.BusinessHoursHolidays.indexOf(item);
			if (index > -1) {
				this.BusinessHoursHolidays.splice(index, 1);
				this.MarkAsDirty();
			}
		}
	}
	//public BusinessHoursHolidays: Array<BusinessHoursHolidayPMPM>= [];
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

	private mondayFromHourDate: Date;
	public get MondayFromHourDate() {
		return this.mondayFromHourDate;
	}
	public set MondayFromHourDate(newValue: Date) {
		if (this.mondayFromHourDate != newValue) {
			this.mondayFromHourDate = newValue;
			this.MarkAsDirty('MondayFromHourDate');
		}
	}

	private tuesdayFromHourDate: Date;
	public get TuesdayFromHourDate() {
		return this.tuesdayFromHourDate;
	}
	public set TuesdayFromHourDate(newValue: Date) {
		if (this.tuesdayFromHourDate != newValue) {
			this.tuesdayFromHourDate = newValue;
			this.MarkAsDirty('TuesdayFromHourDate');
		}
	}

	private wednesdayFromHourDate: Date;
	public get WednesdayFromHourDate() {
		return this.wednesdayFromHourDate;
	}
	public set WednesdayFromHourDate(newValue: Date) {
		if (this.wednesdayFromHourDate != newValue) {
			this.wednesdayFromHourDate = newValue;
			this.MarkAsDirty('WednesdayFromHourDate');
		}
	}

	private thursdayFromHourDate: Date;
	public get ThursdayFromHourDate() {
		return this.thursdayFromHourDate;
	}
	public set ThursdayFromHourDate(newValue: Date) {
		if (this.thursdayFromHourDate != newValue) {
			this.thursdayFromHourDate = newValue;
			this.MarkAsDirty('ThursdayFromHourDate');
		}
	}

	private fridayFromHourDate: Date;
	public get FridayFromHourDate() {
		return this.fridayFromHourDate;
	}
	public set FridayFromHourDate(newValue: Date) {
		if (this.fridayFromHourDate != newValue) {
			this.fridayFromHourDate = newValue;
			this.MarkAsDirty('FridayFromHourDate');
		}
	}

	private saturdayFromHourDate: Date;
	public get SaturdayFromHourDate() {
		return this.saturdayFromHourDate;
	}
	public set SaturdayFromHourDate(newValue: Date) {
		if (this.saturdayFromHourDate != newValue) {
			this.saturdayFromHourDate = newValue;
			this.MarkAsDirty('SaturdayFromHourDate');
		}
	}

	private sundayFromHourDate: Date;
	public get SundayFromHourDate() {
		return this.sundayFromHourDate;
	}
	public set SundayFromHourDate(newValue: Date) {
		if (this.sundayFromHourDate != newValue) {
			this.sundayFromHourDate = newValue;
			this.MarkAsDirty('SundayFromHourDate');
		}
	}

	private mondayToHourDate: Date;
	public get MondayToHourDate() {
		return this.mondayToHourDate;
	}
	public set MondayToHourDate(newValue: Date) {
		if (this.mondayToHourDate != newValue) {
			this.mondayToHourDate = newValue;
			this.MarkAsDirty('MondayToHourDate');
		}
	}

	private tuesdayToHourDate: Date;
	public get TuesdayToHourDate() {
		return this.tuesdayToHourDate;
	}
	public set TuesdayToHourDate(newValue: Date) {
		if (this.tuesdayToHourDate != newValue) {
			this.tuesdayToHourDate = newValue;
			this.MarkAsDirty('TuesdayToHourDate');
		}
	}

	private wednesdayToHourDate: Date;
	public get WednesdayToHourDate() {
		return this.wednesdayToHourDate;
	}
	public set WednesdayToHourDate(newValue: Date) {
		if (this.wednesdayToHourDate != newValue) {
			this.wednesdayToHourDate = newValue;
			this.MarkAsDirty('WednesdayToHourDate');
		}
	}

	private thursdayToHourDate: Date;
	public get ThursdayToHourDate() {
		return this.thursdayToHourDate;
	}
	public set ThursdayToHourDate(newValue: Date) {
		if (this.thursdayToHourDate != newValue) {
			this.thursdayToHourDate = newValue;
			this.MarkAsDirty('ThursdayToHourDate');
		}
	}

	private fridayToHourDate: Date;
	public get FridayToHourDate() {
		return this.fridayToHourDate;
	}
	public set FridayToHourDate(newValue: Date) {
		if (this.fridayToHourDate != newValue) {
			this.fridayToHourDate = newValue;
			this.MarkAsDirty('FridayToHourDate');
		}
	}

	private saturdayToHourDate: Date;
	public get SaturdayToHourDate() {
		return this.saturdayToHourDate;
	}
	public set SaturdayToHourDate(newValue: Date) {
		if (this.saturdayToHourDate != newValue) {
			this.saturdayToHourDate = newValue;
			this.MarkAsDirty('SaturdayToHourDate');
		}
	}

	private sundayToHourDate: Date;
	public get SundayToHourDate() {
		return this.sundayToHourDate;
	}
	public set SundayToHourDate(newValue: Date) {
		if (this.sundayToHourDate != newValue) {
			this.sundayToHourDate = newValue;
			this.MarkAsDirty('SundayToHourDate');
		}
	}

	public OldEntityPM: BusinessHourPM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'BusinessHour');
			}
		}
	}
	private MyClone: BusinessHourPM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}