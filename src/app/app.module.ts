import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AddClientComponent } from './clients/components/add-client.component';
import { ClientDetailsComponent } from './clients/components/client-details.component';
import { ClientListComponent } from './clients/components/client-list.component';
import { EditClientComponent } from './clients/components/edit-client.component';

import { AddGroupComponent } from './groups/components/add-group.component';
import { EditGroupComponent } from './groups/components/edit-group.component';
import { GroupListComponent } from './groups/components/group-list.component';

import { DashboardComponent } from './dashboard/components/dashboard.component';
import { GroupService } from './groups/services/group.service';
import { ClientService } from './clients/services/client.service';

const appRoutes: Routes = [
{ path: '', component: DashboardComponent, pathMatch: 'full'},
{ path: 'clients', component:ClientListComponent},
{ path: 'groups', component: GroupListComponent },
{ path: 'client/add', component: AddGroupComponent },
{ path: 'group/add', component: AddGroupComponent },
{ path: 'client/details/:id', component: ClientDetailsComponent },
{ path: 'client/edit/:id', component: EditClientComponent },
{ path: 'group/edit/:id', component: EditGroupComponent }

];

@NgModule({
	declarations: [
	AppComponent,
	AddClientComponent,
	ClientDetailsComponent,
	ClientListComponent,
	EditClientComponent,
	AddGroupComponent,
	EditGroupComponent,
	GroupListComponent,
	DashboardComponent
	],
	imports: [
	BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
	],
	providers: [GroupService, ClientService],
	bootstrap: [AppComponent]
})
export class AppModule { }
