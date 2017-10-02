import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CardsService} from "../cards.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {
  cardForm: any;
  constructor(private cardsService: CardsService, private router: Router) { }

  ngOnInit() {
    this.cardForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'phoneNumber':  new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        this.phoneValidator
      ]),
      'image': new FormControl(null, Validators.required),
      'address': new FormControl()
    })
  }

  phoneValidator(control: FormControl) {
    let phone = /^\d+$/.test(control.value);
    return phone ? null : {
        validatePhone: {
          valid: false
        }
      }
  }


  create(form) {
    this.cardsService.create(form);
    this.router.navigate(['/cards'])

  }



}
