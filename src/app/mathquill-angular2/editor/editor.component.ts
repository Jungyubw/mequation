import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MathquillService} from '../mathquill.service';
import {IMathQuill} from 'mathquill-typescript';
import {MathquillEditorOptions} from '../mathquill-editor-options.model';

@Component({
  selector: 'mq-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @Input()
  options: MathquillEditorOptions;

  mq: IMathQuill;

  @ViewChild('editableMath')
  editableMath: ElementRef;

  latexSource: string;

  constructor(
    private mqService: MathquillService
  ) {
    mqService.mqpromise.then((mq: IMathQuill) => {
      this.mq = mq.getInterface(2);
      this.mq.MathField(this.editableMath.nativeElement);
      this.refreshLatex();
    });
  }

  clicked(insert: string) {
    this.mq.MathField(this.editableMath.nativeElement).write(insert);
    this.refreshLatex();
  }

  refreshLatex() {
    const innerLatexMath = this.mq.MathField(this.editableMath.nativeElement);
    const latex = innerLatexMath.latex();
    this.latexSource = latex;
  };

  ngOnInit() {
  }

}
