import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'manage',
        component: AdminModuleComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'products',
            component: ProductsComponent
          },
          {
            path: 'categories',
            component: CategoriesComponent
          },
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          }
          
          
        ],
      },
    //   {
    //     path: 'page/not-found',
    //     component: PageNotFoundComponent,
    //   },
    ]),
  ],
  exports: [RouterModule],
})
export class AdminRouteModule {}
