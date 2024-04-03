//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a logitude.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

//
import { ServiceHelper } from '../../Infrastructure/Utilities/ServiceHelper';
import { ServiceLocator } from '../../Infrastructure/Locators/ServiceLocator';
import { Output, EventEmitter } from '@angular/core';
import { PropertyChangedArgs } from '../../Infrastructure/EventEmitterArgs/PropertyChangedArgs';
import { CustomFieldClass } from '../../Infrastructure/DataContracts/CustomFieldClass';

export class SharedLogisticsSettingPM {
	//
	//
	//   constructor() {
	//
	//       this.IsDirty = false;
	//   }

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

	private isAgentShared: boolean;
	public get IsAgentShared() {
		return this.isAgentShared;
	}
	public set IsAgentShared(newValue: boolean) {
		if (this.isAgentShared != newValue) {
			this.isAgentShared = newValue;
			this.MarkAsDirty('IsAgentShared');
		}
	}

	private isShipperNotExporterShared: boolean;
	public get IsShipperNotExporterShared() {
		return this.isShipperNotExporterShared;
	}
	public set IsShipperNotExporterShared(newValue: boolean) {
		if (this.isShipperNotExporterShared != newValue) {
			this.isShipperNotExporterShared = newValue;
			this.MarkAsDirty('IsShipperNotExporterShared');
		}
	}

	private isNotify1Shared: boolean;
	public get IsNotify1Shared() {
		return this.isNotify1Shared;
	}
	public set IsNotify1Shared(newValue: boolean) {
		if (this.isNotify1Shared != newValue) {
			this.isNotify1Shared = newValue;
			this.MarkAsDirty('IsNotify1Shared');
		}
	}

	private isNotify2Shared: boolean;
	public get IsNotify2Shared() {
		return this.isNotify2Shared;
	}
	public set IsNotify2Shared(newValue: boolean) {
		if (this.isNotify2Shared != newValue) {
			this.isNotify2Shared = newValue;
			this.MarkAsDirty('IsNotify2Shared');
		}
	}

	private isFreightForwarderShared: boolean;
	public get IsFreightForwarderShared() {
		return this.isFreightForwarderShared;
	}
	public set IsFreightForwarderShared(newValue: boolean) {
		if (this.isFreightForwarderShared != newValue) {
			this.isFreightForwarderShared = newValue;
			this.MarkAsDirty('IsFreightForwarderShared');
		}
	}

	private isColoaderShared: boolean;
	public get IsColoaderShared() {
		return this.isColoaderShared;
	}
	public set IsColoaderShared(newValue: boolean) {
		if (this.isColoaderShared != newValue) {
			this.isColoaderShared = newValue;
			this.MarkAsDirty('IsColoaderShared');
		}
	}

	private isConsigneeNotImporterShared: boolean;
	public get IsConsigneeNotImporterShared() {
		return this.isConsigneeNotImporterShared;
	}
	public set IsConsigneeNotImporterShared(newValue: boolean) {
		if (this.isConsigneeNotImporterShared != newValue) {
			this.isConsigneeNotImporterShared = newValue;
			this.MarkAsDirty('IsConsigneeNotImporterShared');
		}
	}

	private isMainCarrierShared: boolean;
	public get IsMainCarrierShared() {
		return this.isMainCarrierShared;
	}
	public set IsMainCarrierShared(newValue: boolean) {
		if (this.isMainCarrierShared != newValue) {
			this.isMainCarrierShared = newValue;
			this.MarkAsDirty('IsMainCarrierShared');
		}
	}

	private isPickDelivCarriesShared: boolean;
	public get IsPickDelivCarriesShared() {
		return this.isPickDelivCarriesShared;
	}
	public set IsPickDelivCarriesShared(newValue: boolean) {
		if (this.isPickDelivCarriesShared != newValue) {
			this.isPickDelivCarriesShared = newValue;
			this.MarkAsDirty('IsPickDelivCarriesShared');
		}
	}

	private isInvoicesMenuEnabled: boolean;
	public get IsInvoicesMenuEnabled() {
		return this.isInvoicesMenuEnabled;
	}
	public set IsInvoicesMenuEnabled(newValue: boolean) {
		if (this.isInvoicesMenuEnabled != newValue) {
			this.isInvoicesMenuEnabled = newValue;
			this.MarkAsDirty('IsInvoicesMenuEnabled');
		}
	}

	private isMoneyTabEnabled: boolean;
	public get IsMoneyTabEnabled() {
		return this.isMoneyTabEnabled;
	}
	public set IsMoneyTabEnabled(newValue: boolean) {
		if (this.isMoneyTabEnabled != newValue) {
			this.isMoneyTabEnabled = newValue;
			this.MarkAsDirty('IsMoneyTabEnabled');
		}
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

	private isIssuingCarrierAgentShared: boolean;
	public get IsIssuingCarrierAgentShared() {
		return this.isIssuingCarrierAgentShared;
	}
	public set IsIssuingCarrierAgentShared(newValue: boolean) {
		if (this.isIssuingCarrierAgentShared != newValue) {
			this.isIssuingCarrierAgentShared = newValue;
			this.MarkAsDirty('IsIssuingCarrierAgentShared');
		}
	}

	private isCustomsAgentExportShared: boolean;
	public get IsCustomsAgentExportShared() {
		return this.isCustomsAgentExportShared;
	}
	public set IsCustomsAgentExportShared(newValue: boolean) {
		if (this.isCustomsAgentExportShared != newValue) {
			this.isCustomsAgentExportShared = newValue;
			this.MarkAsDirty('IsCustomsAgentExportShared');
		}
	}

	private isCustomsAgentImportShared: boolean;
	public get IsCustomsAgentImportShared() {
		return this.isCustomsAgentImportShared;
	}
	public set IsCustomsAgentImportShared(newValue: boolean) {
		if (this.isCustomsAgentImportShared != newValue) {
			this.isCustomsAgentImportShared = newValue;
			this.MarkAsDirty('IsCustomsAgentImportShared');
		}
	}

	private isCustomClearancePoinShared: boolean;
	public get IsCustomClearancePoinShared() {
		return this.isCustomClearancePoinShared;
	}
	public set IsCustomClearancePoinShared(newValue: boolean) {
		if (this.isCustomClearancePoinShared != newValue) {
			this.isCustomClearancePoinShared = newValue;
			this.MarkAsDirty('IsCustomClearancePoinShared');
		}
	}

	private isConsolidatorShared: boolean;
	public get IsConsolidatorShared() {
		return this.isConsolidatorShared;
	}
	public set IsConsolidatorShared(newValue: boolean) {
		if (this.isConsolidatorShared != newValue) {
			this.isConsolidatorShared = newValue;
			this.MarkAsDirty('IsConsolidatorShared');
		}
	}

	private isReleasingAgentShared: boolean;
	public get IsReleasingAgentShared() {
		return this.isReleasingAgentShared;
	}
	public set IsReleasingAgentShared(newValue: boolean) {
		if (this.isReleasingAgentShared != newValue) {
			this.isReleasingAgentShared = newValue;
			this.MarkAsDirty('IsReleasingAgentShared');
		}
	}

	private isShipperShared: boolean;
	public get IsShipperShared() {
		return this.isShipperShared;
	}
	public set IsShipperShared(newValue: boolean) {
		if (this.isShipperShared != newValue) {
			this.isShipperShared = newValue;
			this.MarkAsDirty('IsShipperShared');
		}
	}

	private isConsigneeShared: boolean;
	public get IsConsigneeShared() {
		return this.isConsigneeShared;
	}
	public set IsConsigneeShared(newValue: boolean) {
		if (this.isConsigneeShared != newValue) {
			this.isConsigneeShared = newValue;
			this.MarkAsDirty('IsConsigneeShared');
		}
	}

	private isShowAmountLocalCurrency: boolean;
	public get IsShowAmountLocalCurrency() {
		return this.isShowAmountLocalCurrency;
	}
	public set IsShowAmountLocalCurrency(newValue: boolean) {
		if (this.isShowAmountLocalCurrency != newValue) {
			this.isShowAmountLocalCurrency = newValue;
			this.MarkAsDirty('IsShowAmountLocalCurrency');
		}
	}

	public OldEntityPM: SharedLogisticsSettingPM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				// this.PropertyChanged.emit(new PropertyChangedArgs(propertyName,this));
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'SharedLogisticsSetting');
			}
		}
	}

	private MyClone: SharedLogisticsSettingPM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}