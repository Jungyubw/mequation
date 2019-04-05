import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MathquillService} from '../mathquill.service';
import {IMathQuill} from 'mathquill-typescript';

@Component({
  selector: 'mq-math-button',
  templateUrl: './math-button.component.html',
  styleUrls: ['./math-button.component.css']
})
export class MathButtonComponent implements OnInit {

  @Input()
  mytext: string;

  @Input()
  color: string;

  @Input()
  background: string;

  @ViewChild('mathButton')
  mathButton: ElementRef;

  mq: IMathQuill;

  constructor(
    private mqService: MathquillService
  ) {
    mqService.mqpromise.then((mq: IMathQuill) => {
      this.mq = mq.getInterface(2);
      this.mq.StaticMath(this.mathButton.nativeElement);
      this.mq.StaticMath(this.mathButton.nativeElement).latex(this.mytext);
    })
  }

  ngOnInit() {
  }

}
