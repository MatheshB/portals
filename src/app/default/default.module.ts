import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultRoutingModule } from './default-routing.module';
import { DefaultsComponent } from './defaults/defaults.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { ProfileComponent } from '../modules/profile/profile.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { SalesorderComponent } from '../modules/salesorder/salesorder.component';
import { DeliverylistComponent } from '../modules/deliverylist/deliverylist.component';
import { UpdprofileComponent } from '../modules/updprofile/updprofile.component';
import { CreditDebitComponent } from '../modules/credit-debit/credit-debit.component';
import { PaymentComponent } from '../modules/payment/payment.component';
import { InquiryComponent } from '../modules/inquiry/inquiry.component';
import { FinanceordComponent } from '../modules/financeord/financeord.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterdataComponent } from '../modules/masterdata/masterdata.component';
import { OverallsalesComponent } from '../modules/overallsales/overallsales.component';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DefaultsComponent,
    DashboardComponent,
    ProfileComponent,
    SalesorderComponent,
    DeliverylistComponent,
    PaymentComponent,
    CreditDebitComponent,
    UpdprofileComponent,
    FinanceordComponent,
    InquiryComponent,
    MasterdataComponent,
    OverallsalesComponent



  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatCardModule,
    MatExpansionModule,
    NgxPaginationModule







  ]
})
export class DefaultModule { }
