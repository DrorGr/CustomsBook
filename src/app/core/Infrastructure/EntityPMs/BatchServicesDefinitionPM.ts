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

export class BatchServicesDefinitionPM {
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

	private numberOfThreads: number;
	public get NumberOfThreads() {
		return this.numberOfThreads;
	}
	public set NumberOfThreads(newValue: number) {
		if (this.numberOfThreads != newValue) {
			this.numberOfThreads = newValue;
			this.MarkAsDirty('NumberOfThreads');
		}
	}

	private className: string;
	public get ClassName() {
		return this.className;
	}
	public set ClassName(newValue: string) {
		if (this.className != newValue) {
			this.className = newValue;
			this.MarkAsDirty('ClassName');
		}
	}

	private parameter1: string;
	public get Parameter1() {
		return this.parameter1;
	}
	public set Parameter1(newValue: string) {
		if (this.parameter1 != newValue) {
			this.parameter1 = newValue;
			this.MarkAsDirty('Parameter1');
		}
	}

	private parameter2: string;
	public get Parameter2() {
		return this.parameter2;
	}
	public set Parameter2(newValue: string) {
		if (this.parameter2 != newValue) {
			this.parameter2 = newValue;
			this.MarkAsDirty('Parameter2');
		}
	}

	private cPU: number;
	public get CPU() {
		return this.cPU;
	}
	public set CPU(newValue: number) {
		if (this.cPU != newValue) {
			this.cPU = newValue;
			this.MarkAsDirty('CPU');
		}
	}

	private numberOfDoneItems: number;
	public get NumberOfDoneItems() {
		return this.numberOfDoneItems;
	}
	public set NumberOfDoneItems(newValue: number) {
		if (this.numberOfDoneItems != newValue) {
			this.numberOfDoneItems = newValue;
			this.MarkAsDirty('NumberOfDoneItems');
		}
	}

	private lastActivity: Date;
	public get LastActivity() {
		return this.lastActivity;
	}
	public set LastActivity(newValue: Date) {
		if (this.lastActivity != newValue) {
			this.lastActivity = newValue;
			this.MarkAsDirty('LastActivity');
		}
	}

	private doneItemsInOneHour: number;
	public get DoneItemsInOneHour() {
		return this.doneItemsInOneHour;
	}
	public set DoneItemsInOneHour(newValue: number) {
		if (this.doneItemsInOneHour != newValue) {
			this.doneItemsInOneHour = newValue;
			this.MarkAsDirty('DoneItemsInOneHour');
		}
	}

	private doneItemsInOneMinute: number;
	public get DoneItemsInOneMinute() {
		return this.doneItemsInOneMinute;
	}
	public set DoneItemsInOneMinute(newValue: number) {
		if (this.doneItemsInOneMinute != newValue) {
			this.doneItemsInOneMinute = newValue;
			this.MarkAsDirty('DoneItemsInOneMinute');
		}
	}

	private doneItemsInFiveMinutes: number;
	public get DoneItemsInFiveMinutes() {
		return this.doneItemsInFiveMinutes;
	}
	public set DoneItemsInFiveMinutes(newValue: number) {
		if (this.doneItemsInFiveMinutes != newValue) {
			this.doneItemsInFiveMinutes = newValue;
			this.MarkAsDirty('DoneItemsInFiveMinutes');
		}
	}

	private waitingItems: number;
	public get WaitingItems() {
		return this.waitingItems;
	}
	public set WaitingItems(newValue: number) {
		if (this.waitingItems != newValue) {
			this.waitingItems = newValue;
			this.MarkAsDirty('WaitingItems');
		}
	}

	private failedItems: number;
	public get FailedItems() {
		return this.failedItems;
	}
	public set FailedItems(newValue: number) {
		if (this.failedItems != newValue) {
			this.failedItems = newValue;
			this.MarkAsDirty('FailedItems');
		}
	}

	private queueDefinitionCode: string;
	public get QueueDefinitionCode() {
		return this.queueDefinitionCode;
	}
	public set QueueDefinitionCode(newValue: string) {
		if (this.queueDefinitionCode != newValue) {
			this.queueDefinitionCode = newValue;
			this.MarkAsDirty('QueueDefinitionCode');
		}
	}

	private maxWorkingTimeInMinutes: number;
	public get MaxWorkingTimeInMinutes() {
		return this.maxWorkingTimeInMinutes;
	}
	public set MaxWorkingTimeInMinutes(newValue: number) {
		if (this.maxWorkingTimeInMinutes != newValue) {
			this.maxWorkingTimeInMinutes = newValue;
			this.MarkAsDirty('MaxWorkingTimeInMinutes');
		}
	}

	public OldEntityPM: BatchServicesDefinitionPM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'BatchServicesDefinition');
			}
		}
	}
	private MyClone: BatchServicesDefinitionPM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}
