import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path: 'basics',
    component: BasicsPageComponent,
  },
  {
    path: 'numbers',
    component: NumberPageComponent,
  },
  {
    path: 'uncommon',
    component: UncommonPageComponent,
  },
  {
    path: 'custom',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: 'basics'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
