import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators  } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form:FormGroup;
  success:boolean = false;
  error: boolean = false;
  constructor(private fb: FormBuilder, private _service:FormService) {
    this.form = this.fb.group({
      name: ['Alfredo',[Validators.required]],
      first_last_name: ['Cabrera', [Validators.required]],
      last_name: ['Resendiz', [Validators.required]],
      age: ['25', Validators.required],
      email: ['sed.silver@hotmail.com', [Validators.required, Validators.email]],
      gender: ['1', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get invalidName() {
    return this.form.get('name').invalid && this.form.get('name').touched
  }
  get invalidFirstLastName() {
    return this.form.get('first_last_name').invalid && this.form.get('first_last_name').touched
  }
  get invalidLastName() {
    return this.form.get('last_name').invalid && this.form.get('last_name').touched
  }
  get invalidAge() {
    return this.form.get('age').invalid && this.form.get('age').touched
  }
  get invalidEmail() {
    return this.form.get('email').invalid && this.form.get('email').touched
  }
  get invalidGender() {
    return this.form.get('gender').invalid && this.form.get('gender').touched
  }
  
  save(){
    console.log(this.form.value);
    if(this.form.valid){
      this._service._send_form(this.form.value).subscribe(
        (resp:any) => {
          console.log(resp)     
          if(resp.user){
            this.success = true; 
            this.form.reset(); 
          }                         
        },
        error => {
          console.log(error)
          this.error = true;
        }
      )
    } else 
        this.form.markAllAsTouched();    
  }
}
