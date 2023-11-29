import {NgModule} from '@angular/core';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminRouteModule } from './admin.route';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
         AdminModuleComponent,
         DashboardComponent,
         ProductsComponent,
         CategoriesComponent
    ],
    imports: [
        SharedModule,
        AdminRouteModule,
        MatSidenavModule,
    ],
    providers: [],
})
export class AdminModule {
}
