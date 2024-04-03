//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a logitude.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

import { RolePM } from './RolePM';

import { UserRolesPM } from './UserRolesPM';

import { UserPermittedBranchPM } from './UserPermittedBranchPM';

import { UserPermittedProductPM } from './UserPermittedProductPM';
//
import { ServiceHelper } from '../../Infrastructure/Utilities/ServiceHelper';
import { ServiceLocator } from '../../Infrastructure/Locators/ServiceLocator';
import { Output, EventEmitter } from '@angular/core';
import { PropertyChangedArgs } from '../../Infrastructure/EventEmitterArgs/PropertyChangedArgs';
import { CustomFieldClass } from '../../Infrastructure/DataContracts/CustomFieldClass';

export class UserPM {
	//
	//
	//   constructor() {
	//
	//       this.IsDirty = false;
	//   }

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

	private departmentId: string;
	public get DepartmentId() {
		return this.departmentId;
	}
	public set DepartmentId(newValue: string) {
		if (this.departmentId != newValue) {
			this.departmentId = newValue;
			this.MarkAsDirty('DepartmentId');
		}
	}

	private branchId: string;
	public get BranchId() {
		return this.branchId;
	}
	public set BranchId(newValue: string) {
		if (this.branchId != newValue) {
			this.branchId = newValue;
			this.MarkAsDirty('BranchId');
		}
	}

	private userType: string;
	public get UserType() {
		return this.userType;
	}
	public set UserType(newValue: string) {
		if (this.userType != newValue) {
			this.userType = newValue;
			this.MarkAsDirty('UserType');
		}
	}

	private isSalesman: boolean;
	public get IsSalesman() {
		return this.isSalesman;
	}
	public set IsSalesman(newValue: boolean) {
		if (this.isSalesman != newValue) {
			this.isSalesman = newValue;
			this.MarkAsDirty('IsSalesman');
		}
	}

	private licencedUser: boolean;
	public get LicencedUser() {
		return this.licencedUser;
	}
	public set LicencedUser(newValue: boolean) {
		if (this.licencedUser != newValue) {
			this.licencedUser = newValue;
			this.MarkAsDirty('LicencedUser');
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

	private facebookId: string;
	public get FacebookId() {
		return this.facebookId;
	}
	public set FacebookId(newValue: string) {
		if (this.facebookId != newValue) {
			this.facebookId = newValue;
			this.MarkAsDirty('FacebookId');
		}
	}

	private position: string;
	public get Position() {
		return this.position;
	}
	public set Position(newValue: string) {
		if (this.position != newValue) {
			this.position = newValue;
			this.MarkAsDirty('Position');
		}
	}

	private englishName: string;
	public get EnglishName() {
		return this.englishName;
	}
	public set EnglishName(newValue: string) {
		if (this.englishName != newValue) {
			this.englishName = newValue;
			this.MarkAsDirty('EnglishName');
		}
	}

	private isFreelancer: boolean;
	public get IsFreelancer() {
		return this.isFreelancer;
	}
	public set IsFreelancer(newValue: boolean) {
		if (this.isFreelancer != newValue) {
			this.isFreelancer = newValue;
			this.MarkAsDirty('IsFreelancer');
		}
	}

	private freelancerId: string;
	public get FreelancerId() {
		return this.freelancerId;
	}
	public set FreelancerId(newValue: string) {
		if (this.freelancerId != newValue) {
			this.freelancerId = newValue;
			this.MarkAsDirty('FreelancerId');
		}
	}

	private freelancerName: string;
	public get FreelancerName() {
		return this.freelancerName;
	}
	public set FreelancerName(newValue: string) {
		if (this.freelancerName != newValue) {
			this.freelancerName = newValue;
			this.MarkAsDirty('FreelancerName');
		}
	}

	private localName: string;
	public get LocalName() {
		return this.localName;
	}
	public set LocalName(newValue: string) {
		if (this.localName != newValue) {
			this.localName = newValue;
			this.MarkAsDirty('LocalName');
		}
	}

	private computedLocalName: string;
	public get ComputedLocalName() {
		return this.computedLocalName;
	}
	public set ComputedLocalName(newValue: string) {
		if (this.computedLocalName != newValue) {
			this.computedLocalName = newValue;
			this.MarkAsDirty('ComputedLocalName');
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

	private isBranchRestricted: boolean;
	public get IsBranchRestricted() {
		return this.isBranchRestricted;
	}
	public set IsBranchRestricted(newValue: boolean) {
		if (this.isBranchRestricted != newValue) {
			this.isBranchRestricted = newValue;
			this.MarkAsDirty('IsBranchRestricted');
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

	private email: string;
	public get Email() {
		return this.email;
	}
	public set Email(newValue: string) {
		if (this.email != newValue) {
			this.email = newValue;
			this.MarkAsDirty('Email');
		}
	}

	private internetAccess: boolean;
	public get InternetAccess() {
		return this.internetAccess;
	}
	public set InternetAccess(newValue: boolean) {
		if (this.internetAccess != newValue) {
			this.internetAccess = newValue;
			this.MarkAsDirty('InternetAccess');
		}
	}

	private password: string;
	public get Password() {
		return this.password;
	}
	public set Password(newValue: string) {
		if (this.password != newValue) {
			this.password = newValue;
			this.MarkAsDirty('Password');
		}
	}

	private businessPhone: string;
	public get BusinessPhone() {
		return this.businessPhone;
	}
	public set BusinessPhone(newValue: string) {
		if (this.businessPhone != newValue) {
			this.businessPhone = newValue;
			this.MarkAsDirty('BusinessPhone');
		}
	}

	private mobile: string;
	public get Mobile() {
		return this.mobile;
	}
	public set Mobile(newValue: string) {
		if (this.mobile != newValue) {
			this.mobile = newValue;
			this.MarkAsDirty('Mobile');
		}
	}

	private fax: string;
	public get Fax() {
		return this.fax;
	}
	public set Fax(newValue: string) {
		if (this.fax != newValue) {
			this.fax = newValue;
			this.MarkAsDirty('Fax');
		}
	}

	private birthday: Date;
	public get Birthday() {
		return this.birthday;
	}
	public set Birthday(newValue: Date) {
		if (this.birthday != newValue) {
			this.birthday = newValue;
			this.MarkAsDirty('Birthday');
		}
	}

	private anniversary: Date;
	public get Anniversary() {
		return this.anniversary;
	}
	public set Anniversary(newValue: Date) {
		if (this.anniversary != newValue) {
			this.anniversary = newValue;
			this.MarkAsDirty('Anniversary');
		}
	}

	private notes: string;
	public get Notes() {
		return this.notes;
	}
	public set Notes(newValue: string) {
		if (this.notes != newValue) {
			this.notes = newValue;
			this.MarkAsDirty('Notes');
		}
	}

	private dontShowLocalLabels: boolean;
	public get DontShowLocalLabels() {
		return this.dontShowLocalLabels;
	}
	public set DontShowLocalLabels(newValue: boolean) {
		if (this.dontShowLocalLabels != newValue) {
			this.dontShowLocalLabels = newValue;
			this.MarkAsDirty('DontShowLocalLabels');
		}
	}

	private setAngularAsDefault: boolean;
	public get SetAngularAsDefault() {
		return this.setAngularAsDefault;
	}
	public set SetAngularAsDefault(newValue: boolean) {
		if (this.setAngularAsDefault != newValue) {
			this.setAngularAsDefault = newValue;
			this.MarkAsDirty('SetAngularAsDefault');
		}
	}

	private rolePMLists: RolePM[];
	get RolePMLists() {
		if (this.rolePMLists == null) {
			this.rolePMLists = [];
		}

		return this.rolePMLists;
	}
	set RolePMLists(newValue: RolePM[]) {
		if (this.rolePMLists != newValue) {
			this.rolePMLists = newValue;
		}
	}
	//public RolePMLists: Array<RolePMPM>= [];
	private technology: string;
	public get Technology() {
		return this.technology;
	}
	public set Technology(newValue: string) {
		if (this.technology != newValue) {
			this.technology = newValue;
			this.MarkAsDirty('Technology');
		}
	}

	private cardId: string;
	public get CardId() {
		return this.cardId;
	}
	public set CardId(newValue: string) {
		if (this.cardId != newValue) {
			this.cardId = newValue;
			this.MarkAsDirty('CardId');
		}
	}

	private signupRole: boolean;
	public get SignupRole() {
		return this.signupRole;
	}
	public set SignupRole(newValue: boolean) {
		if (this.signupRole != newValue) {
			this.signupRole = newValue;
			this.MarkAsDirty('SignupRole');
		}
	}

	private branchName: string;
	public get BranchName() {
		return this.branchName;
	}
	public set BranchName(newValue: string) {
		if (this.branchName != newValue) {
			this.branchName = newValue;
			this.MarkAsDirty('BranchName');
		}
	}

	private departmentName: string;
	public get DepartmentName() {
		return this.departmentName;
	}
	public set DepartmentName(newValue: string) {
		if (this.departmentName != newValue) {
			this.departmentName = newValue;
			this.MarkAsDirty('DepartmentName');
		}
	}

	private isHybrid: boolean;
	public get IsHybrid() {
		return this.isHybrid;
	}
	public set IsHybrid(newValue: boolean) {
		if (this.isHybrid != newValue) {
			this.isHybrid = newValue;
			this.MarkAsDirty('IsHybrid');
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

	private dontShowLocal: boolean;
	public get DontShowLocal() {
		return this.dontShowLocal;
	}
	public set DontShowLocal(newValue: boolean) {
		if (this.dontShowLocal != newValue) {
			this.dontShowLocal = newValue;
			this.MarkAsDirty('DontShowLocal');
		}
	}

	private expirationDate: Date;
	public get ExpirationDate() {
		return this.expirationDate;
	}
	public set ExpirationDate(newValue: Date) {
		if (this.expirationDate != newValue) {
			this.expirationDate = newValue;
			this.MarkAsDirty('ExpirationDate');
		}
	}

	private expirationDaysLeft: number;
	public get ExpirationDaysLeft() {
		return this.expirationDaysLeft;
	}
	public set ExpirationDaysLeft(newValue: number) {
		if (this.expirationDaysLeft != newValue) {
			this.expirationDaysLeft = newValue;
			this.MarkAsDirty('ExpirationDaysLeft');
		}
	}

	private isProductRestricted: boolean;
	public get IsProductRestricted() {
		return this.isProductRestricted;
	}
	public set IsProductRestricted(newValue: boolean) {
		if (this.isProductRestricted != newValue) {
			this.isProductRestricted = newValue;
			this.MarkAsDirty('IsProductRestricted');
		}
	}

	private isShowContactDetailsInTheMobileApp: boolean;
	public get IsShowContactDetailsInTheMobileApp() {
		return this.isShowContactDetailsInTheMobileApp;
	}
	public set IsShowContactDetailsInTheMobileApp(newValue: boolean) {
		if (this.isShowContactDetailsInTheMobileApp != newValue) {
			this.isShowContactDetailsInTheMobileApp = newValue;
			this.MarkAsDirty('IsShowContactDetailsInTheMobileApp');
		}
	}

	private isTwoFactorAuthenticationEnabled: boolean;
	public get IsTwoFactorAuthenticationEnabled() {
		return this.isTwoFactorAuthenticationEnabled;
	}
	public set IsTwoFactorAuthenticationEnabled(newValue: boolean) {
		if (this.isTwoFactorAuthenticationEnabled != newValue) {
			this.isTwoFactorAuthenticationEnabled = newValue;
			this.MarkAsDirty('IsTwoFactorAuthenticationEnabled');
		}
	}

	private productTypeCode: string;
	public get ProductTypeCode() {
		return this.productTypeCode;
	}
	public set ProductTypeCode(newValue: string) {
		if (this.productTypeCode != newValue) {
			this.productTypeCode = newValue;
			this.MarkAsDirty('ProductTypeCode');
		}
	}

	private productTypeName: string;
	public get ProductTypeName() {
		return this.productTypeName;
	}
	public set ProductTypeName(newValue: string) {
		if (this.productTypeName != newValue) {
			this.productTypeName = newValue;
			this.MarkAsDirty('ProductTypeName');
		}
	}

	private roleCode: string;
	public get RoleCode() {
		return this.roleCode;
	}
	public set RoleCode(newValue: string) {
		if (this.roleCode != newValue) {
			this.roleCode = newValue;
			this.MarkAsDirty('RoleCode');
		}
	}

	private businessUnitId: string;
	public get BusinessUnitId() {
		return this.businessUnitId;
	}
	public set BusinessUnitId(newValue: string) {
		if (this.businessUnitId != newValue) {
			this.businessUnitId = newValue;
			this.MarkAsDirty('BusinessUnitId');
		}
	}

	private personalId: string;
	public get PersonalId() {
		return this.personalId;
	}
	public set PersonalId(newValue: string) {
		if (this.personalId != newValue) {
			this.personalId = newValue;
			this.MarkAsDirty('PersonalId');
		}
	}

	private contact: any;
	public get Contact() {
		return this.contact;
	}
	public set Contact(newValue: any) {
		if (this.contact != newValue) {
			this.contact = newValue;
			this.MarkAsDirty('Contact');
		}
	}

	private userLastLogin: any;
	public get UserLastLogin() {
		return this.userLastLogin;
	}
	public set UserLastLogin(newValue: any) {
		if (this.userLastLogin != newValue) {
			this.userLastLogin = newValue;
			this.MarkAsDirty('UserLastLogin');
		}
	}

	private roles: UserRolesPM[];
	get Roles() {
		if (this.roles == null) {
			this.roles = [];
		}

		return this.roles;
	}
	set Roles(newValue: UserRolesPM[]) {
		if (this.roles != newValue) {
			this.roles = newValue;
		}
	}
	public AddUserRolesPM(item: UserRolesPM) {
		if (item != null) {
			var index = this.Roles.indexOf(item);
			if (index == -1) {
				item.EntityParentPM = this;

				this.Roles.push(item);
				this.MarkAsDirty();
			}
		}
	}
	public RemoveUserRolesPM(item: UserRolesPM) {
		if (item != null) {
			var index = this.Roles.indexOf(item);
			if (index > -1) {
				this.Roles.splice(index, 1);
				this.MarkAsDirty();
			}
		}
	}
	//public Roles: Array<UserRolesPMPM>= [];

	private userPermittedBranches: UserPermittedBranchPM[];
	get UserPermittedBranches() {
		if (this.userPermittedBranches == null) {
			this.userPermittedBranches = [];
		}

		return this.userPermittedBranches;
	}
	set UserPermittedBranches(newValue: UserPermittedBranchPM[]) {
		if (this.userPermittedBranches != newValue) {
			this.userPermittedBranches = newValue;
		}
	}
	public AddUserPermittedBranchPM(item: UserPermittedBranchPM) {
		if (item != null) {
			var index = this.UserPermittedBranches.indexOf(item);
			if (index == -1) {
				item.EntityParentPM = this;

				this.UserPermittedBranches.push(item);
				this.MarkAsDirty();
			}
		}
	}
	public RemoveUserPermittedBranchPM(item: UserPermittedBranchPM) {
		if (item != null) {
			var index = this.UserPermittedBranches.indexOf(item);
			if (index > -1) {
				this.UserPermittedBranches.splice(index, 1);
				this.MarkAsDirty();
			}
		}
	}
	//public UserPermittedBranches: Array<UserPermittedBranchPMPM>= [];

	private userPermittedProducts: UserPermittedProductPM[];
	get UserPermittedProducts() {
		if (this.userPermittedProducts == null) {
			this.userPermittedProducts = [];
		}

		return this.userPermittedProducts;
	}
	set UserPermittedProducts(newValue: UserPermittedProductPM[]) {
		if (this.userPermittedProducts != newValue) {
			this.userPermittedProducts = newValue;
		}
	}
	public AddUserPermittedProductPM(item: UserPermittedProductPM) {
		if (item != null) {
			var index = this.UserPermittedProducts.indexOf(item);
			if (index == -1) {
				item.EntityParentPM = this;

				this.UserPermittedProducts.push(item);
				this.MarkAsDirty();
			}
		}
	}
	public RemoveUserPermittedProductPM(item: UserPermittedProductPM) {
		if (item != null) {
			var index = this.UserPermittedProducts.indexOf(item);
			if (index > -1) {
				this.UserPermittedProducts.splice(index, 1);
				this.MarkAsDirty();
			}
		}
	}
	//public UserPermittedProducts: Array<UserPermittedProductPMPM>= [];
	private isDistributor: boolean;
	public get IsDistributor() {
		return this.isDistributor;
	}
	public set IsDistributor(newValue: boolean) {
		if (this.isDistributor != newValue) {
			this.isDistributor = newValue;
			this.MarkAsDirty('IsDistributor');
		}
	}

	private distributorCode: string;
	public get DistributorCode() {
		return this.distributorCode;
	}
	public set DistributorCode(newValue: string) {
		if (this.distributorCode != newValue) {
			this.distributorCode = newValue;
			this.MarkAsDirty('DistributorCode');
		}
	}

	private entityChanged: boolean;
	public get EntityChanged() {
		return this.entityChanged;
	}
	public set EntityChanged(newValue: boolean) {
		if (this.entityChanged != newValue) {
			this.entityChanged = newValue;
			this.MarkAsDirty('EntityChanged');
		}
	}

	private activeModified: number;
	public get ActiveModified() {
		return this.activeModified;
	}
	public set ActiveModified(newValue: number) {
		if (this.activeModified != newValue) {
			this.activeModified = newValue;
			this.MarkAsDirty('ActiveModified');
		}
	}

	private hasPassword: boolean;
	public get HasPassword() {
		return this.hasPassword;
	}
	public set HasPassword(newValue: boolean) {
		if (this.hasPassword != newValue) {
			this.hasPassword = newValue;
			this.MarkAsDirty('HasPassword');
		}
	}

	private isCustomerCare: boolean;
	public get IsCustomerCare() {
		return this.isCustomerCare;
	}
	public set IsCustomerCare(newValue: boolean) {
		if (this.isCustomerCare != newValue) {
			this.isCustomerCare = newValue;
			this.MarkAsDirty('IsCustomerCare');
		}
	}

	private displayGettingStarted: boolean;
	public get DisplayGettingStarted() {
		return this.displayGettingStarted;
	}
	public set DisplayGettingStarted(newValue: boolean) {
		if (this.displayGettingStarted != newValue) {
			this.displayGettingStarted = newValue;
			this.MarkAsDirty('DisplayGettingStarted');
		}
	}

	private userRolesNamesList: string;
	public get UserRolesNamesList() {
		return this.userRolesNamesList;
	}
	public set UserRolesNamesList(newValue: string) {
		if (this.userRolesNamesList != newValue) {
			this.userRolesNamesList = newValue;
			this.MarkAsDirty('UserRolesNamesList');
		}
	}

	private userRolesNamesList_db: string;
	public get UserRolesNamesList_db() {
		return this.userRolesNamesList_db;
	}
	public set UserRolesNamesList_db(newValue: string) {
		if (this.userRolesNamesList_db != newValue) {
			this.userRolesNamesList_db = newValue;
			this.MarkAsDirty('UserRolesNamesList_db');
		}
	}

	private documentFilingInbox: string;
	public get DocumentFilingInbox() {
		return this.documentFilingInbox;
	}
	public set DocumentFilingInbox(newValue: string) {
		if (this.documentFilingInbox != newValue) {
			this.documentFilingInbox = newValue;
			this.MarkAsDirty('DocumentFilingInbox');
		}
	}

	private showLogBoxToolTip: boolean;
	public get ShowLogBoxToolTip() {
		return this.showLogBoxToolTip;
	}
	public set ShowLogBoxToolTip(newValue: boolean) {
		if (this.showLogBoxToolTip != newValue) {
			this.showLogBoxToolTip = newValue;
			this.MarkAsDirty('ShowLogBoxToolTip');
		}
	}

	private showInboxToolTip: boolean;
	public get ShowInboxToolTip() {
		return this.showInboxToolTip;
	}
	public set ShowInboxToolTip(newValue: boolean) {
		if (this.showInboxToolTip != newValue) {
			this.showInboxToolTip = newValue;
			this.MarkAsDirty('ShowInboxToolTip');
		}
	}

	private showLocalNameInLOV: boolean;
	public get ShowLocalNameInLOV() {
		return this.showLocalNameInLOV;
	}
	public set ShowLocalNameInLOV(newValue: boolean) {
		if (this.showLocalNameInLOV != newValue) {
			this.showLocalNameInLOV = newValue;
			this.MarkAsDirty('ShowLocalNameInLOV');
		}
	}

	private userRoles: string;
	public get UserRoles() {
		return this.userRoles;
	}
	public set UserRoles(newValue: string) {
		if (this.userRoles != newValue) {
			this.userRoles = newValue;
			this.MarkAsDirty('UserRoles');
		}
	}

	private additionalPackagesOnly: boolean;
	public get AdditionalPackagesOnly() {
		return this.additionalPackagesOnly;
	}
	public set AdditionalPackagesOnly(newValue: boolean) {
		if (this.additionalPackagesOnly != newValue) {
			this.additionalPackagesOnly = newValue;
			this.MarkAsDirty('AdditionalPackagesOnly');
		}
	}

	private layoutDirection: string;
	public get LayoutDirection() {
		return this.layoutDirection;
	}
	public set LayoutDirection(newValue: string) {
		if (this.layoutDirection != newValue) {
			this.layoutDirection = newValue;
			this.MarkAsDirty('LayoutDirection');
		}
	}

	private signatureImageId: string;
	public get SignatureImageId() {
		return this.signatureImageId;
	}
	public set SignatureImageId(newValue: string) {
		if (this.signatureImageId != newValue) {
			this.signatureImageId = newValue;
			this.MarkAsDirty('SignatureImageId');
		}
	}

	public OldEntityPM: UserPM;

	public IsDirty: boolean;
	public DisableMarkAsDirty: boolean = false;
	MarkAsDirty(propertyName: string = null) {
		if (!this.DisableMarkAsDirty) {
			this.IsDirty = true;

			if (propertyName != null) {
				//
				ServiceLocator.RulesValidator.ApplyEntityChangedRules(propertyName, this, 'User');
			}
		}
	}
	private MyClone: UserPM;

	public CloneMe() {
		ServiceHelper.CloneEntityPM(this);
	}

	public RejectChanges() {
		ServiceHelper.RejectEntityPMChanges(this);
	}
}