import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './common/guards/auth.guard';
import { LogoutComponent } from '../shared/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'manage',
        canActivate: [AuthGuard],
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
          },
          
        ],
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    //   {
    //     path: 'page/not-found',
    //     component: PageNotFoundComponent,
    //   },
    ]),
  ],
  exports: [RouterModule],
})
export class AdminRouteModule {}
