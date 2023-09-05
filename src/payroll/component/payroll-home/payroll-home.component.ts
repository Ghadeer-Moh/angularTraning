import { Component } from '@angular/core';

@Component({
  selector: 'app-payroll-home',
  templateUrl: './payroll-home.component.html',
  styleUrls: ['./payroll-home.component.scss']
})
export class PayrollHomeComponent {

  paymenulist = [{
    title: 'Transactions',
    cardList: [{
      title: 'payroll Process',
      routerLink: 'payrollprocess',
      imagePath: 'assets/icons/default.svg',
      url: '',
      id: 1,
    },
    {
      title: 'Transaction',
      routerLink: 'transaction',
      imagePath: 'assets/icons/Dependents.svg',
      url: '',
      id: 2,
    },
    {
      title: 'Call In/On Call',
      routerLink: 'callinon',
      imagePath: 'assets/icons/Contracts.svg',
      url: '',
      id: 3,
    },
    {
      title: 'Stop Salary',
      routerLink: 'stopsalary',
      imagePath: 'assets/icons/Contracts.svg',
      url: '',
      id: 4,
    }
    ,
    {
      title: 'Leave Encashment',
      routerLink: 'leaveencashment',
      imagePath: 'assets/icons/Contracts.svg',
      url: '',
      id: 5,
    }
    ,
    {
      title: 'Absence Mangement',
      routerLink: 'absencemangement',
      imagePath: 'assets/icons/Contracts.svg',
      url: '',
      id: 6,
    }
    ,
    {
      title: 'EOS Calculation',
      routerLink: 'eoscalculation',
      imagePath: 'assets/icons/Contracts.svg',
      url: '',
      id: 7,
    }
    ,
    {
      title: 'Promotion',
      routerLink: 'promotion',
      imagePath: 'assets/icons/Contracts.svg',
      url: '',
      id: 8,
    }
    ,
    {
      title: 'Incriment',
      routerLink: 'incrimenttrans',
      imagePath: 'assets/icons/Contracts.svg',
      url: '',
      id: 9,
    }


    ]
  },
  {
    title: 'Configuration Data',
    cardList: [{
      title: 'HR Alowances',
      routerLink: 'hrallowancespay',
      imagePath: 'assets/icons/Department.svg',
      url: '',
      id: 1,
    },
    {
      title: 'Ledger Mapping',
      routerLink: 'ledgermapping',
      imagePath: 'assets/icons/SubDepartment.svg',
      url: '',
      id: 2,
    },
    {
      title: 'Increment-config',
      routerLink: 'incrementconfig',
      imagePath: 'assets/icons/JobTitle.svg',
      url: '',
      id: 3,
    }, {
      title: 'Professional Groub',
      routerLink: 'professionalgroub',
      imagePath: 'assets/icons/InsuranceClass.svg',
      url: '',
      id: 4,
    }
    ]
  },
  {
    title: 'Reports',
    cardList: [
      {
        title: 'Payroll Register',
        routerLink: 'payrollregister',
        imagePath: 'assets/icons/LeaveValidation.svg',
        url: '',
        id: 1,
      },
      {
        title: 'Payslip',
        routerLink: 'payslip',
        imagePath: 'assets/icons/CashAdvance.svg',
        url: '',
        id: 2,
      },
      {
        title: 'Vacation Accrual',
        routerLink: 'vacationaccrual',
        imagePath: 'assets/icons/Insurance.svg',
        url: '',
        id: 3,
      },
      {
        title: 'WPS',
        routerLink: 'wps',
        imagePath: 'assets/icons/BusinessTripPerDiem.svg',
        url: '',
        id: 4,
      },
      {
        title: 'Expense Claim',
        routerLink: 'expenseclaim',
        imagePath: 'assets/icons/BusinessTripAdditional.svg',
        url: '',
        id: 5,
      },
      {
        title: 'Housing Advance',
        routerLink: 'housingadvance',
        imagePath: 'assets/icons/BusinessTripTravelClass.svg',
        url: '',
        id: 6,
      },
      {
        title: 'Business Trip',
        routerLink: 'businesstrip',
        imagePath: 'assets/icons/HousingAllowance.svg',
        url: '',
        id: 7,
      },
      {
        title: 'Business Trip',
        routerLink: 'businesstrip',
        imagePath: 'assets/icons/HousingAllowance.svg',
        url: '',
        id: 8,
      },
      {
        title: 'EOS',
        routerLink: 'eosreport',
        imagePath: 'assets/icons/HousingAllowance.svg',
        url: '',
        id: 9,
      },
      {
        title: 'Vacation',
        routerLink: 'vacation',
        imagePath: 'assets/icons/HousingAllowance.svg',
        url: '',
        id: 10,
      },
      {
        title: 'Resignation',
        routerLink: 'resignation',
        imagePath: 'assets/icons/HousingAllowance.svg',
        url: '',
        id: 11,
      },

    ]
  },

  ];

}
