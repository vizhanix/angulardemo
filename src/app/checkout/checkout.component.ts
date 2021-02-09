import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Student } from '../model/student.model';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;

  studentList: Student[];


  //create a form builder with form group 
  //of same name fields form the form  with formControlName
  //and create formControl() object
  constructor(private formBuilder: FormBuilder, public myService: MyServiceService) {
    // this.checkoutForm = formBuilder.group(
    //   {
    //     emailAddress: new FormControl(),
    //     quantity: new FormControl(),
    //     terms: new FormControl()
    //   });


    this.checkoutForm = formBuilder.group({

      emailAddress: ['', [Validators.minLength(5), Validators.maxLength(10), Validators.required, Validators.email]],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue],

      mobiles:this.formBuilder.array([
        this.formBuilder.control('',Validators.required)
      ])

      // items:this.formBuilder.group({
      //   email:['DefaultValue',Validators.email]
      // })


      // items:this.formBuilder.array([
      //   this.formBuilder.group({
      //     itemId:['1'],
      //     itemName:['ARC'],
      //     itemDesc:['Tutorials'],
      //     itemDone:['',Validators.requiredTrue]
      //   })
      // ])
    });
  }

  formSubmit() {
    console.log(this.checkoutForm.get(['mobiles','0']).value);
    

  }

  get mobiles(){
    return this.checkoutForm.get('mobiles') as FormArray;
  }

  addNewMobile(){
    this.mobiles.push(this.formBuilder.control(''));
  }

 

  // public trackedEmailData: string;

  ngOnInit(): void {


    // this.checkoutForm.get('emailAddress').valueChanges.subscribe(data => {
    //   this.trackedEmailData = data;
    // });


    // this.checkoutForm.valueChanges.subscribe(data => {
    //   console.log(data);

    // });

    //setValue and PatchValue
    this.checkoutForm.patchValue({
      emailAddress: 'asd@email.com',
      quantity: 10
    });

    /*this.checkoutForm.setValue({
     emailAddress:'asd@email.com',
     quantity: 10,
     terms: true
   });*/

    this.myService.getStudents().subscribe(data => {
      this.studentList = data;
    })

  }


  //resetting form
  resetForm() {
    this.checkoutForm.reset();
  }





}
