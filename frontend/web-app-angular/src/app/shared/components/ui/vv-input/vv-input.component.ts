import {
  Component,
  Input,
  forwardRef
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'app-vv-input',
  standalone: true,
  imports: [],
  templateUrl: './vv-input.component.html',
  styleUrl: './vv-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VvInputComponent),
      multi: true
    }
  ]
})
export class VvInputComponent
  implements ControlValueAccessor {

  @Input() label = '';

  @Input() placeholder = '';

  @Input() type = 'text';

  value = '';

  disabled = false;

  onChange = (value: string) => { };

  onTouched = () => { };

  writeValue(value: string): void {

    this.value = value ?? '';

  }

  registerOnChange(fn: any): void {

    this.onChange = fn;

  }

  registerOnTouched(fn: any): void {

    this.onTouched = fn;

  }

  setDisabledState(isDisabled: boolean): void {

    this.disabled = isDisabled;

  }

  updateValue(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    this.value = input.value;

    this.onChange(this.value);

    this.onTouched();

  }

}