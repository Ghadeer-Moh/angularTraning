import { PayrollRegisterComponent } from './component/payroll-register/payroll-register.component';
import { LedgerMappingComponent } from './component/ledger-mapping/ledger-mapping.component';
import { PayrollProcessComponent } from './component/payroll-process/payroll-process.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenceMangementComponent } from './component/absence-mangement/absence-mangement.component';
import { AttendanceReportComponent } from './component/attendance-report/attendance-report.component';
import { BusinessTripComponent } from './component/business-trip/business-trip.component';
import { CallInOnComponent } from './component/call-in-on/call-in-on.component';
import { EosBalanceComponent } from './component/eos-balance/eos-balance.component';
import { EOSReportComponent } from './component/eos-report/eos-report.component';
import { ExpenseClaimComponent } from './component/expense-claim/expense-claim.component';
import { HousingAdvanceComponent } from './component/housing-advance/housing-advance.component';
import { HrAllowancesComponent } from '../hr-core/component/hr-allowances/hr-allowances.component';
import { IncrementComponent } from './component/increment/increment.component';
import { LeaveEncashmentComponent } from './component/leave-encashment/leave-encashment.component';
import { IncrementReportComponent } from './component/increment-report/increment-report.component';
import { IncrementTransComponent } from './component/increment-trans/increment-trans.component';
import { ProfessionalGroupComponent } from './component/professional-group/professional-group.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { ResignationComponent } from './component/resignation/resignation.component';
import { StopSalaryComponent } from './component/stop-salary/stop-salary.component';
import { TransactionsComponent } from './component/transactions/transactions.component';
import { VacationComponent } from './component/vacation/vacation.component';
import { VacationAccrualComponent } from './component/vacation-accrual/vacation-accrual.component';
import { WpsComponent } from './component/wps/wps.component';
import { PayslipComponent } from './component/payslip/payslip.component';
import { HrAllowancesPayrollComponent } from './component/hr-allowances-payroll/hr-allowances-payroll.component';
import { PayrollHomeComponent } from './component/payroll-home/payroll-home.component';
import { PayrollComponent } from './payroll.component';

const routes: Routes = [
  {path: '', component: PayrollComponent,
  children: [
  { path: '', component: PayrollHomeComponent, data: { breadcrumb: 'Payroll' } },
  { path: 'payrollprocess', component: PayrollProcessComponent, data: { breadcrumb: 'payroll process' } },
  { path: 'transaction', component: TransactionsComponent, data: { breadcrumb: 'Tansaction' } },
  { path: 'ledgermapping', component: LedgerMappingComponent, data: { breadcrumb: 'ledgermapping' } },
  { path: 'payrollregister', component: PayrollRegisterComponent, data: { breadcrumb: 'Payroll Register' } },
  { path: 'payslip', component: PayslipComponent, data: { breadcrumb: 'Payslip' } },
  { path: 'eosreport', component: EOSReportComponent, data: { breadcrumb: 'EOS' } },
  { path: 'absencemangement', component: AbsenceMangementComponent, data: { breadcrumb: 'Absence Mange' } },
  { path: 'attendancereport', component: AttendanceReportComponent , data: { breadcrumb: 'attendance report' } },
  { path: 'businesstrip', component: BusinessTripComponent , data: { breadcrumb: 'business trip' } },
  { path: 'callinon', component: CallInOnComponent , data: { breadcrumb: 'call in/on call' } },
  { path: 'eosblance', component: EosBalanceComponent , data: { breadcrumb: 'EOS Blance' } },
  { path: 'eoscalculation', component: EosBalanceComponent , data: { breadcrumb: 'EOS Calculation' } },
  { path: 'expenseclaim', component: ExpenseClaimComponent , data: { breadcrumb: 'Expense Claim' } },
  { path: 'housingadvance', component: HousingAdvanceComponent , data: { breadcrumb: 'housing advance' } },
  { path: 'hrallowancespay', component: HrAllowancesPayrollComponent , data: { breadcrumb: 'Hr Allowances Pay' } },
  { path: 'increment', component: IncrementComponent , data: { breadcrumb: 'increment' } },
  { path: 'incrementconfig', component: LeaveEncashmentComponent , data: { breadcrumb: 'leave encashment' } },
  { path: 'incrementreport', component: IncrementReportComponent , data: { breadcrumb: 'Increment Report' } },
  { path: 'incrimenttrans', component: IncrementTransComponent , data: { breadcrumb: 'Incriment trans' } },
  { path: 'leaveencashment', component: LeaveEncashmentComponent , data: { breadcrumb: 'leave encashment' } },
  { path: 'professionalgroub', component: ProfessionalGroupComponent , data: { breadcrumb: 'professional group' } },
  { path: 'promotion', component: PromotionComponent , data: { breadcrumb: 'Promotion ' } },
  { path: 'resignation', component: ResignationComponent , data: { breadcrumb: 'Resignation' } },
  { path: 'stopsalary ', component: StopSalaryComponent , data: { breadcrumb: 'Stop Salary' } },
  { path: 'Transactions', component: TransactionsComponent , data: { breadcrumb: 'Transection' } },
  { path: 'vacation', component: VacationComponent , data: { breadcrumb: 'vacation' } },
  { path: 'vacationaccrual', component: VacationAccrualComponent , data: { breadcrumb: 'vacation accrual' } },
  { path: 'wps', component: WpsComponent , data: { breadcrumb: 'WPS' } }

  ]}

];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
