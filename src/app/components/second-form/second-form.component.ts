import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent implements OnInit {

  secondForm:FormGroup;
  success:boolean = false;
  error2:boolean = false;

  constructor(private fb:FormBuilder, private _service:FormService) {
    this.secondForm = this.fb.group({
      users: ['Daniel Ramon Lara,26,djbrush1122@gmail.com,1\nIsrael Reyes Lemus,25,israel@yahoo.com,1\nJorge Garcia Guerra,30,george@hotmail.com,1',
      [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  send(){
    console.log(this.secondForm)
    if(this.secondForm.valid){
      this._service._send_second_form(this.secondForm.value).subscribe((response:any) => {
        console.log(response)
        if(response.body)
          this.success = true;
      }, error => {
        console.log(error)
        this.error2 = true;
        this.success = false;
      })
    }
  }
}
