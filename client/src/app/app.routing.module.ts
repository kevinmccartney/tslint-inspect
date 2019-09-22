import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundViewComponent } from './modules/shared/components';

const routes: Routes = [
  {
    path: 'rules',
    loadChildren: () =>
      import('./modules/rules/rules.routed.module').then(
        m => m.RulesRoutedModule,
      ),
    data: { animation: 'FilterPage' },
  },
  {
    path: 'configs',
    loadChildren: () =>
      import('./modules/configs/configs.routed.module').then(
        m => m.ConfigsRoutedModule,
      ),
    data: { animation: 'FilterPage' },
  },
  {
    path: 'coverage',
    loadChildren: () =>
      import('./modules/coverage/coverage.routed.module').then(
        m => m.CoverageRoutedModule,
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'rules',
    data: { animation: 'FilterPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
