import { Component, OnInit } from '@angular/core';
import {CardsService} from "../cards.service";
import {Router, ActivatedRoute} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ICard} from "../shared/interfaces/icard";

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  private routeSub: any;
  cardForm: any;
  card: any;

  id: number;
  constructor(private route: ActivatedRoute, private cardsService: CardsService, private router: Router) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.card = this.cardsService.get(this.id);
      console.log(this.card);

      if (this.card) {
        this.cardForm = new FormGroup({
          'name': new FormControl(this.card.name, Validators.required),
          'email': new FormControl(this.card.email, [
            Validators.required,
            Validators.email
          ]),
          'phoneNumber':  new FormControl(this.card.phoneNumber, [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            this.phoneValidator
          ]),
          'image': new FormControl(this.card.image, Validators.required),
          'address': new FormControl(this.card.address)
        })
      }
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




  update(form) {
    form.id = this.id;
    this.cardsService.update(form);
    this.router.navigate(['/cards'])

  }



}
