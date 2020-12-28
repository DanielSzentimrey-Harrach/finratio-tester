import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { ratios } from '../finratios';

@Component({
  selector: 'app-ratio2def',
  templateUrl: './ratio2def.component.html',
  styleUrls: ['./ratio2def.component.css']
})

export class Ratio2defComponent implements OnInit {
  str_ratio: string = "";
  arr_alldefs: Array<string> = [];
  arr_defs: Array<DisplayDefinition> = [];
  answered: boolean = false;

  constructor() {
    this.init();
  }

  ngOnInit(): void {
  }

  init():void {
    this.arr_alldefs = Array.from(ratios.values());
    this.arr_defs = []

    // Getting ratio to define, and adding definitions to answers array
    let n = 0;
    do {
      n = Math.floor(Math.random()*ratios.size); 
    } while (this.str_ratio == Array.from(ratios.keys())[n]) // look for a new random ratio
    this.str_ratio = Array.from(ratios.keys())[n];
    this.arr_defs.push(new DisplayDefinition(this.arr_alldefs[n], true));
    this.arr_alldefs.splice(n, 1);
    
    // Pick 3 other potential answers
    for (let i = 3; i > 0; --i) {
      n = Math.floor(Math.random()*this.arr_alldefs.length);
      this.arr_defs.push(new DisplayDefinition(this.arr_alldefs[n], false));
      this.arr_alldefs.splice(n, 1);
    }

    // Pick a random starting point, split, then join the arrays
    n = Math.floor(Math.random()*this.arr_defs.length);
    this.arr_defs = this.arr_defs.slice(n).concat(this.arr_defs.slice(0,n));
  }

  checkAnswer(event: any, def: DisplayDefinition) {
    let target: HTMLUListElement | null = event.target || event.currentTarget;
    if (target !== null) {
      if (def.status === true) {
        def.highlight = "green";
      } else {
        def.highlight = "red";
        this.arr_defs.forEach(function (d) {
          if (d.status) {
            d.highlight = "yellow";
          }
        })
      }
    }
    this.answered = true;
  }

  nextQuestion() {
    this.init();
    this.answered = false;
  }
}

class DisplayDefinition {
  text: string;
  status: boolean;
  highlight: string;

  constructor(text: string, status: boolean) {
    this.text = text;
    this.status = status;
    this.highlight = "none";
  }
}
