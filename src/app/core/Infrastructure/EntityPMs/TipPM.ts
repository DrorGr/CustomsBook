﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a logitude.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

export class TipPM {
	constructor() {
		this.UIProperties = new UIProperties();
		this.IsDirty = false;
	}

	private code: string;
	public get Code() {
		return this.code;
	}
	public set Code(newValue: string) {
		this.code = newValue;
		this.MarkAsDirty();
	}

	private tenant: string;
	public get Tenant() {
		return this.tenant;
	}
	public set Tenant(newValue: string) {
		this.tenant = newValue;
		this.MarkAsDirty();
	}

	private visibilityDefaultValue: boolean;
	public get VisibilityDefaultValue() {
		return this.visibilityDefaultValue;
	}
	public set VisibilityDefaultValue(newValue: boolean) {
		this.visibilityDefaultValue = newValue;
		this.MarkAsDirty();
	}

	private shortTextCodeCode: string;
	public get ShortTextCodeCode() {
		return this.shortTextCodeCode;
	}
	public set ShortTextCodeCode(newValue: string) {
		this.shortTextCodeCode = newValue;
		this.MarkAsDirty();
	}

	private shortTextCodeId: string;
	public get ShortTextCodeId() {
		return this.shortTextCodeId;
	}
	public set ShortTextCodeId(newValue: string) {
		this.shortTextCodeId = newValue;
		this.MarkAsDirty();
	}

	private objectTableId: string;
	public get ObjectTableId() {
		return this.objectTableId;
	}
	public set ObjectTableId(newValue: string) {
		this.objectTableId = newValue;
		this.MarkAsDirty();
	}

	public OldEntityPM: TipPM;

	public IsDirty: boolean;
	MarkAsDirty() {
		this.IsDirty = true;
	}
}
