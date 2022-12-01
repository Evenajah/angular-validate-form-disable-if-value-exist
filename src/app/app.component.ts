import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  eiei = {
    name: 'eveZa',
    lastName: '',
  };

  form = new FormGroup({
    name: new FormControl(null),
    lastName: new FormControl(null),
  });

  ngOnInit() {
    this.form.valueChanges.subscribe((form) => {
      this.validateDisableForm(this.form);
    });
  }

  test() {
    this.form.patchValue(this.eiei);
  }

  validateDisableForm(form: FormGroup) {
    Object.entries(form.controls).forEach(([name, { value }]) => {
      value && form.controls[name]?.disable({ emitEvent: false });
    });
  }
}
