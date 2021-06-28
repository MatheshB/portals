import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CreditDebitComponent } from '../modules/credit-debit/credit-debit.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { DeliverylistComponent } from '../modules/deliverylist/deliverylist.component';
import { FinanceordComponent } from '../modules/financeord/financeord.component';
import { InquiryComponent } from '../modules/inquiry/inquiry.component';
import { MasterdataComponent } from '../modules/masterdata/masterdata.component';
import { OverallsalesComponent } from '../modules/overallsales/overallsales.component';
import { PaymentComponent } from '../modules/payment/payment.component';
import { ProfileComponent } from '../modules/profile/profile.component';
import { SalesorderComponent } from '../modules/salesorder/salesorder.component';
import { UpdprofileComponent } from '../modules/updprofile/updprofile.component';
import { DefaultsComponent } from './defaults/defaults.component';

const routes: Routes = [
  { path: '', component: DefaultsComponent ,children :[
    { path : 'dashboard', component : DashboardComponent },
    { path : 'profile', component : ProfileComponent },
    { path : 'updprofile', component : UpdprofileComponent },
    { path : 'salesorder', component : SalesorderComponent },
    { path : 'inquiry', component : InquiryComponent },
    { path : 'deliverylist', component : DeliverylistComponent },
    { path : 'financeord', component : FinanceordComponent },
    { path : 'credit-debit', component : CreditDebitComponent },
    { path : 'payment', component : PaymentComponent },
    { path : 'masterdata', component : MasterdataComponent },
    { path : 'overallsales', component : OverallsalesComponent },
    { path : '', redirectTo : 'defaults', pathMatch : 'full' }
  ] },
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
