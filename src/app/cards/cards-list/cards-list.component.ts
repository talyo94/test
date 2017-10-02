import { Component, OnInit } from '@angular/core';
import {CardsService} from "../cards.service";
import {ICard} from "../shared/interfaces/icard";

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  cardsList: ICard[];
  constructor(private cardsService: CardsService) {
  }

  ngOnInit() {
    this.cardsList = this.cardsService.list();
  }

}
