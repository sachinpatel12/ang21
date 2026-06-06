import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, AbstractControl } from "@angular/forms";
import { validateTree } from '@angular/forms/signals';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  
registration! : FormGroup;

  ngOnInit(){
    this.registration = new FormGroup({
      name: new FormControl('',[Validators.required, this.nameNotAllowed])
    })
  }

  nameNotAllowed(Control:AbstractControl){
    let control = Control.value;
    
    if(control == 'sachin'){
      return {invalidName : true};
    }else{
      return null;
    }
  }
  
  registerUser(){
    console.log(this.registration.get('name')?.value)
  }
}
