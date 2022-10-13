import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, FormControl } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { COMMA, ENTER} from '@angular/cdk/keycodes'

@Component({
  selector: 'app-user-invite',
  templateUrl: './user-invite.component.html',
  styleUrls: ['./user-invite.component.scss']
})
export class UserInviteComponent implements OnInit {

  userForm!:FormGroup;
  public seperatorKeysCodes:number[]=[ENTER, COMMA];
  public emailList=[];
  removable=true;

  constructor(private formBuilder:FormBuilder,private userService:UserService, private dialogRef:MatDialogRef<UserInviteComponent>) { }

  paste(event: ClipboardEvent): void {
    event.preventDefault();
    event.clipboardData
    .getData('Text')
    .split(/;|,|\n/)
    .forEach(value => {
    if(value.trim()){
    this.emailList.push({ value: value.trim() });
    return
    }
    })
    }

  add(event): void {
    console.log(event.value)
  
    if (event.value) {
       
      if (this.validateEmail(event.value)) {
        this.emailList.push({ value: event.value, invalid: false });
      } else {
        this.emailList.push({ value: event.value, invalid: true });
        
      }
    }
    if (event.input) {
      event.input.value = '';
    }
  }

  removeEmail(data: any): void {
    console.log('Removing ' + data)
    if (this.emailList.indexOf(data) >= 0) {
      this.emailList.splice(this.emailList.indexOf(data), 1);
    }
  }


  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      email:[''],
      role:['']
    })
  }
  invite(){
    if(this.userForm.valid){
      this.userService.postUser(this.userForm.value)
      .subscribe({
        next:(res)=>{
          alert("user added");
          this.userForm.reset(); 
          this.dialogRef.close();
        },
        error:()=>{
          alert("something went wrong");
        }
      })
    }
   
  }

  private validateArrayNotEmpty(c: FormControl) {
    if (c.value && c.value.length === 0) {
      return {
        validateArrayNotEmpty: { valid: false }
      };
    }
    return null;
  }

  private validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

 


}
