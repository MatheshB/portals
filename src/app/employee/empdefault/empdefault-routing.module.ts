import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploginComponent } from '../emplogin/emplogin.component';
import { EmpPayslipDetComponent } from '../empmodules/emp-payslip-det/emp-payslip-det.component';
import { EmpdashboardComponent } from '../empmodules/empdashboard/empdashboard.component';
import { EmpleaveDetComponent } from '../empmodules/empleave-det/empleave-det.component';
import { EmpleaveReqComponent } from '../empmodules/empleave-req/empleave-req.component';
import { EmppayrepComponent } from '../empmodules/emppayrep/emppayrep.component';
import { EmpprofileComponent } from '../empmodules/empprofile/empprofile.component';
import { EmpsettleComponent } from '../empmodules/empsettle/empsettle.component';
import { EmpupdprofileComponent } from '../empmodules/empupdprofile/empupdprofile.component';
import { EmpdefaultComponent } from './empdefault/empdefault.component';



const routes: Routes = [
  { path: '', component: EmpdefaultComponent ,children :[
    { path : 'empdashboard', component : EmpdashboardComponent },
    { path : 'empprofile', component : EmpprofileComponent },
    { path : 'empupdprofile', component : EmpupdprofileComponent },
    { path : 'empleave-req', component : EmpleaveReqComponent },
    { path : 'empleave-det', component : EmpleaveDetComponent },
    { path : 'emp-payslip-det', component : EmpPayslipDetComponent },
    { path : 'emppayrep', component : EmppayrepComponent },
    { path : 'empsettle', component : EmpsettleComponent },
    { path : '', redirectTo : 'empdefault', pathMatch : 'full' }
  ] },
  {path:'emplogin',component: EmploginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpdefaultRoutingModule { }
