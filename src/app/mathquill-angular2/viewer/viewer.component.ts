import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MathquillService} from '../mathquill.service';
import {IMathQuill} from 'mathquill-typescript';
import {MathquillEditorOptions} from '../mathquill-editor-options.model';
import { ChangeDetectionStrategy } from '@angular/core';
import {equal} from "assert";

@Component({
  selector: 'mq-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewerComponent implements OnInit, OnChanges {


  mq: IMathQuill;
  @Input() equation:string;

  @ViewChild('viewerMath')
  viewerMath: ElementRef;

  latexSource: string;

  constructor(
    private mqService: MathquillService
  ) {
    if (!this.equation) this.equation = '';
    mqService.mqpromise.then((mq: IMathQuill) => {
      this.mq = mq.getInterface(2);
      this.mq.MathField(this.viewerMath.nativeElement);
      this.refreshLatex();
    });
  }

  ngOnChanges() {
    // create header using child_id
    console.log("VIEWER", this.equation);
    if(this.equation) {
      this.refreshLatex();
    }

  }

  clicked(insert: string) {
    this.mq.MathField(this.viewerMath.nativeElement).write(insert);
    this.refreshLatex();
  }

  refreshLatex() {
    console.log("FIRE!!!");
      const innerLatexMath = this.mq.MathField(this.viewerMath.nativeElement);
      const latex = innerLatexMath.latex(this.equation);
      this.latexSource = latex;
      console.log(this.latexSource);
  };

  ngOnInit() {
  }

}
