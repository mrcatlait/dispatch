import { ColDef, Module, ValueGetterParams } from '@ag-grid-community/core'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'

interface Order {
  status: 'pending' | 'in-progress' | 'complete'
  customer: {
    name: string
    email: string
    phone: string
  }
  paymentStatus: 'paid' | 'pending' | 'failed' | 'cancelled'
  address: {
    street: string
    city: string
    postcode: string
  }
  notes: string
  createDate: Date
  dueDate: Date
  products: [
    {
      name: string
      quantity: number
    },
  ]
}

@Component({
  selector: 'd-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderListComponent {
  rowData: any[] = [
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]
  columnDefs: ColDef[] = [
    {
      headerName: 'Make & Model',
      valueGetter: (p: ValueGetterParams) => p.data.make + ' ' + p.data.model,
      flex: 2,
    },
    { field: 'price', valueFormatter: (p) => '£' + Math.floor(p.value).toLocaleString(), flex: 1 },
    { field: 'electric', flex: 1 },
  ]
  themeClass: string = 'ag-theme-material'
  modules: Module[] = [ClientSideRowModelModule]
}
