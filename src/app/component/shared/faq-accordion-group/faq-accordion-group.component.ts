import { Component, OnInit } from '@angular/core';
import { IFaqItemData } from "./IFaqItemData";

@Component({
  selector: 'app-faq-accordion-group',
  templateUrl: './faq-accordion-group.component.html',
  styleUrls: ['./faq-accordion-group.component.scss']
})
export class FaqAccordionGroupComponent implements OnInit {
  oneAtATime: boolean = true;
  faqItems: Array<IFaqItemData>;

  constructor() { }

  ngOnInit() {
    this.faqItems = [
      {
        question: 'Is my money safe?',
        answer: 'Yes'
      },
      {
        question: 'How will your system help me?',
        answer: 'Yes it will help you'
      },
      {
        question: 'Why isn\'t everyone doing this?',
        answer: 'they love it'
      },
      {
        question: 'Will i win every trade?',
        answer: 'Yes'
      },
      {
        question: 'How much does this system cost?',
        answer: '$1'
      },
      {
        question: 'How much are your workshops to attend and where are they?',
        answer: 'easy'
      },
      {
        question: 'Can i cancel?',
        answer: 'Yes'
      },
      {
        question: 'Why do i need to use a broker?',
        answer: 'You need to'
      },
      {
        question: 'What is a CFD?',
        answer: 'CFD'
      },
      {
        question: 'What is spreadbetting?',
        answer: 'SPD'
      },
      {
        question: 'Is income earned from CFD Trading Tax Free?',
        answer: 'You will be subject to capital gains tax on any profits made through CFD trading.'
      }
    ]
  }

}
