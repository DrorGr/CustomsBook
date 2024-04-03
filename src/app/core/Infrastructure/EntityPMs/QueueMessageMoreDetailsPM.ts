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

export class QueueMessageMoreDetailsPM {
	//
	constructor() {
		//
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

	private createDateTime: Date;
	public get CreateDateTime() {
		return this.createDateTime;
	}
	public set CreateDateTime(newValue: Date) {
		if (this.createDateTime != newValue) {
			this.createDateTime = newValue;
			this.MarkAsDirty('CreateDateTime');
		}
	}

	private status: number;
	public get Status() {
		return this.status;
	}
	public set Status(newValue: number) {
		if (this.status != newValue) {
			this.status = newValue;
			this.MarkAsDirty('Status');
		}
	}

	private messageBody: string;
	public get MessageBody() {
		return this.messageBody;
	}
	public set MessageBody(newValue: string) {
		if (this.messageBody != newValue) {
			this.messageBody = newValue;
			this.MarkAsDirty('MessageBody');
		}
	}

	private nextRunDateTime: Date;
	public get NextRunDateTime() {
		return this.nextRunDateTime;
	}
	public set NextRunDateTime(newValue: Date) {
		if (this.nextRunDateTime != newValue) {
			this.nextRunDateTime = newValue;
			this.MarkAsDirty('NextRunDateTime');
		}
	}

	private processingDateTime: Date;
	public get ProcessingDateTime() {
		return this.processingDateTime;
	}
	public set ProcessingDateTime(newValue: Date) {
		if (this.processingDateTime != newValue) {
			this.processingDateTime = newValue;
			this.MarkAsDirty('ProcessingDateTime');
		}
	}

	private completeDateTime: Date;
	public get CompleteDateTime() {
		return this.completeDateTime;
	}
	public set CompleteDateTime(newValue: Date) {
		if (this.completeDateTime != newValue) {
			this.completeDateTime = newValue;
			this.MarkAsDirty('CompleteDateTime');
		}
	}

	private retryNumber: number;
	public get RetryNumber() {
		return this.retryNumber;
	}
	public set RetryNumber(newValue: number) {
		if (this.retryNumber != newValue) {
			this.retryNumber = newValue;
			this.MarkAsDirty('RetryNumber');
		}
	}

	private field1: string;
	public get Field1() {
		return this.field1;
	}
	public set Field1(newValue: string) {
		if (this.field1 != newValue) {
			this.field1 = newValue;
			this.MarkAsDirty('Field1');
		}
	}

	private field2: string;
	public get Field2() {
		return this.field2;
	}
	public set Field2(newValue: string) {
		if (this.field2 != newValue) {
			this.field2 = newValue;
			this.MarkAsDirty('Field2');
		}
	}

	private field3: string;
	public get Field3() {
		return this.field3;
	}
	public set Field3(newValue: string) {
		if (this.field3 != newValue) {
			this.field3 = newValue;
			this.MarkAsDirty('Field3');
		}
	}

	public OldEntityPM: QueueMessageMoreDetailsPM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'QueueMessageMoreDetails');
			}
		}
	}
	private MyClone: QueueMessageMoreDetailsPM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}