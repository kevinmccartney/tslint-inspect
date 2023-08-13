import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundViewComponent } from './modules/shared/components';
import { SharedModule } from './modules/shared';

export const routes: Routes = [
  {
    path: 'rules',
    loadChildren: () =>
      import('./modules/rules/rules.routed.module').then(
        m => m.RulesRoutedModule,
      ),
    data: {
      name: 'rules',
    },
  },
  {
    path: 'configs',
    loadChildren: () =>
      import('./modules/configs/configs.routed.module').then(
        m => m.ConfigsRoutedModule,
      ),
    data: {
      name: 'configs',
    },
  },
  {
    path: 'coverage',
    loadChildren: () =>
      import('./modules/coverage/coverage.routed.module').then(
        m => m.CoverageRoutedModule,
      ),
    data: {
      name: 'coverage',
    },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'rules',
    data: {
      name: 'rules',
    },
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    data: {
      name: 'notFound',
    },
    component: NotFoundViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
})
export class AppRoutingModule {}
