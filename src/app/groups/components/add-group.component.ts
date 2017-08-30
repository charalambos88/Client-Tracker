import { Component } from '@angular/core';
import { NgModel, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
	selector: 'add-group',
	template: `
	<div class="w3-card-4">

	<div class="w3-container w3-green">
		<h2>Add Group</h2>
	</div>
		<form [formGroup]="form" class="w3-container w3-padding-16">
			<div class="form-group">
				<label>Group Name</label>
				<input class="w3-input" type="text" name="groupname" [(ngModel)]="newGroup.name" ngControl="name">
			</div>
			<br />
			<div class="form-group">
				<button (click)="addGroup()" [disabled]="!form.valid" class="w3-btn w3-padding w3-teal">Submit Data</button>
			</div>
		</form>
	</div>
	`,
})
export class AddGroupComponent {
	form: FormGroup;
	name: FormControl;
	newGroup: any = {};

	constructor(private builder: FormBuilder){
		this.name = new FormControl(
			"",
			Validators.compose([
				Validators.required,
				Validators.minLength(3)
				])
			);
		this.form = builder.group({
			name: this.name
		});

	}

	addGroup(){
		console.log('adding group');
	}

}
