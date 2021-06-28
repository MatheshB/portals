import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpdefaultRoutingModule } from './empdefault-routing.module';
import { EmpdefaultComponent } from './empdefault/empdefault.component';
import { EmpsharedModule } from '../empshared/empshared.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmpdashboardComponent } from '../empmodules/empdashboard/empdashboard.component';
import { EmpleaveDetComponent } from '../empmodules/empleave-det/empleave-det.component';
import { EmpleaveReqComponent } from '../empmodules/empleave-req/empleave-req.component';
import { EmpprofileComponent } from '../empmodules/empprofile/empprofile.component';
import { EmpupdprofileComponent } from '../empmodules/empupdprofile/empupdprofile.component';
import { EmpleaveTypComponent } from '../empmodules/empleave-typ/empleave-typ.component';
import { EmppayrepComponent } from '../empmodules/emppayrep/emppayrep.component';
import { EmpPayslipDetComponent } from '../empmodules/emp-payslip-det/emp-payslip-det.component';
import { EmpsettleComponent } from '../empmodules/empsettle/empsettle.component';
import {MatAccordionHarness} from '@angular/material/expansion/testing';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    EmpdefaultComponent,
    EmpdashboardComponent,
    EmpleaveDetComponent,
    EmpleaveReqComponent,
    EmpprofileComponent,
    EmpupdprofileComponent,
    EmpleaveTypComponent,
    EmppayrepComponent,
    EmpPayslipDetComponent,
    EmpsettleComponent
  ],
  imports: [
    CommonModule,
    EmpdefaultRoutingModule,
    EmpsharedModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    NgxPaginationModule

  ]
})
export class EmpdefaultModule { }
