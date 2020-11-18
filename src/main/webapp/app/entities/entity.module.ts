import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'app-user',
        loadChildren: () => import('./app-user/app-user.module').then(m => m.TimeSheetAppUserModule),
      },
      {
        path: 'company',
        loadChildren: () => import('./company/company.module').then(m => m.TimeSheetCompanyModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.TimeSheetCustomerModule),
      },
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.TimeSheetProjectModule),
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.TimeSheetJobModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class TimeSheetEntityModule {}
