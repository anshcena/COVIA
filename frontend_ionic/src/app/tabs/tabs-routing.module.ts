import { InfoPageModule } from './../info/info.module';
import { MythsPageModule } from './../myths/myths.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'updates',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../updates/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'care',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../care/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: () => 
            import('../info/info.module').then(m => m.InfoPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => 
            import('../news/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
