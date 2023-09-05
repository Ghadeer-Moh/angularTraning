import { IncrementComponent } from './component/increment/increment.component';
import { IncrementConfigComponent } from './component/increment-config/increment-config.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as drilldown from 'highcharts/modules/drilldown.src';
import * as exporting from 'highcharts/modules/exporting.src';
import * as accessibility from 'highcharts/modules/accessibility.src';

//component
import { AbsenceMangementComponent } from './component/absence-mangement/absence-mangement.component';
import { PayrollHomeComponent } from './component/payroll-home/payroll-home.component';
import { DepartmentService } from '../hr-core/services/department.service';
import { SubdepartmentService } from '../hr-core/services/subdepartment.service';
import {  SharedModule } from "../shared-module/shared-module.module";
import { PayrollRoutingModule } from './payroll-routing.module';
import { AttendanceReportComponent } from './component/attendance-report/attendance-report.component';
import { BusinessTripComponent } from './component/business-trip/business-trip.component';
import { CallInOnComponent } from './component/call-in-on/call-in-on.component';
import { EosBalanceComponent } from './component/eos-balance/eos-balance.component';
import { EOSCalculationComponent } from './component/eos-calculation/eos-calculation.component';
import { EOSReportComponent } from './component/eos-report/eos-report.component';
import { ExpenseClaimComponent } from './component/expense-claim/expense-claim.component';
import { HousingAdvanceComponent } from './component/housing-advance/housing-advance.component';
//import { HrAllowancesComponent } from '../hr-core/component/hr-allowances/hr-allowances.component';
import { IncrementTransComponent } from './component/increment-trans/increment-trans.component';
import { LeaveEncashmentComponent } from './component/leave-encashment/leave-encashment.component';
import { LedgerMappingComponent } from './component/ledger-mapping/ledger-mapping.component';
import { PayrollRegisterComponent } from './component/payroll-register/payroll-register.component';
import { PayslipComponent } from './component/payslip/payslip.component';
import { ProfessionalGroupComponent } from './component/professional-group/professional-group.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { ResignationComponent } from './component/resignation/resignation.component';
import { StopSalaryComponent } from './component/stop-salary/stop-salary.component';
import { TransactionsComponent } from './component/transactions/transactions.component';
import { VacationComponent } from './component/vacation/vacation.component';
import { VacationAccrualComponent } from './component/vacation-accrual/vacation-accrual.component';
import { WpsComponent } from './component/wps/wps.component';
import { IncrementReportComponent } from './component/increment-report/increment-report.component';
import { HrAllowancesPayrollComponent } from './component/hr-allowances-payroll/hr-allowances-payroll.component';
import { PayrollComponent } from './payroll.component';


@NgModule({
    declarations: [

        PayrollComponent,
        PayrollHomeComponent,
        AbsenceMangementComponent,
        AttendanceReportComponent,
        BusinessTripComponent,
        CallInOnComponent,
        EosBalanceComponent,
        EOSCalculationComponent,
        EOSReportComponent,
        ExpenseClaimComponent,
        HousingAdvanceComponent,
        HrAllowancesPayrollComponent,
        IncrementComponent,
        IncrementConfigComponent,
        IncrementTransComponent,
        IncrementReportComponent,
        LeaveEncashmentComponent,
        LedgerMappingComponent,
        PayrollRegisterComponent,
        PayslipComponent,
        ProfessionalGroupComponent,
        PromotionComponent,
        ResignationComponent,
        StopSalaryComponent,
        TransactionsComponent,
        VacationComponent,
        VacationAccrualComponent,
        WpsComponent


    ],
    providers: [
        { provide: HIGHCHARTS_MODULES, useFactory: () => [drilldown, accessibility, exporting] },

    ],

    imports: [
        CommonModule,
        SharedModule,
        PayrollRoutingModule

    ]
})
export class ParollModuleModule { }

