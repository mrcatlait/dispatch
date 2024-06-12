import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'd-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderFormComponent {
  readonly form = new FormGroup({
    customer: new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
    }),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      postcode: new FormControl('', [Validators.required]),
    }),
    notes: new FormControl(''),
    createDate: new FormControl(new Date(), [Validators.required]),
    dueDate: new FormControl(new Date(), [Validators.required]),
    products: new FormArray([
      new FormGroup({
        name: new FormControl('', [Validators.required]),
        quantity: new FormControl(1, [Validators.required]),
      }),
    ]),
  })
}
