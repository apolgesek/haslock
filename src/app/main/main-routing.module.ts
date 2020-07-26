import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenTypeGuard } from '../core/guards/open-type.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EntriesTableComponent } from './components/entries-table/entries-table.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ OpenTypeGuard ],
    children: [
      {
        path: '',
        component: EntriesTableComponent
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule {}