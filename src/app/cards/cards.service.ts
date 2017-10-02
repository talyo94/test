import { Injectable } from '@angular/core';
import {ICard} from "./shared/interfaces/icard";

@Injectable()
export class CardsService {
  cards: ICard[];
  index: number = 1;
  // private cards = new Beha
  constructor() {
    if (localStorage.getItem('cards')) {
      this.cards = JSON.parse(localStorage.getItem('cards'));
      this.index = this.cards[this.cards.length-1].id + 1;
    }
    else {
      // this.cards = [];
      this.index = 1;
    }
  }

  create(card: ICard) {
    card.id = this.index;
    this.index ++ ;
    if(this.cards) {
      this.cards.push(card);
    } else {
      this.cards = [card];
    }
    localStorage.setItem('cards', JSON.stringify(this.cards));
  }

  update(card: ICard) {
    let i = null;
    this.cards.filter((value, index) => {
      console.log(value, index);
      if(value.id == card.id) {
        i = index;
      }
    });
    this.cards[i] = card;

    localStorage.setItem('cards', JSON.stringify(this.cards));

  }

  list() {
    return this.cards;
  }

  get(id: any): any {
    let card = null;

    this.cards.forEach((value, index) => {
      if (id.toString() == value.id.toString()) {
        card = value;
      }

    })
    return card;
  }

}
