import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  pages: any = ['Home page', 'Product Page', 'Password Page', 'Custom'];
  dynamicForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      rules: new FormArray([])
    });
  }

  get rules(): FormArray {
    return this.dynamicForm.get('rules') as FormArray;
  }

  addNewRule(): void {
    this.rules.push(this.formBuilder.group({
      url: ['', Validators.required],
    }));
  }

  removeRule(index: number): void {
    this.rules.removeAt(index);
  }

}
