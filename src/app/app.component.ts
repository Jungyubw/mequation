import { Component } from '@angular/core';
import { MathquillService } from './mathquill-angular2/index';
import {MathquillEditorOptions} from './mathquill-angular2/mathquill-editor-options.model';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Equation Editor for Matlab';

  mScriptLines: string[] = [];
  eScriptLines: any[] = [];
  envLines: any[];

  modes: SelectItem[];
  selectedMode = 'Script';
  display: boolean = false;
  showViewer:boolean = false;

  options: MathquillEditorOptions = {
    buttonLatexContents: [
      '+', '-', '*', '\\frac{}{}',
      'x^2', '\\sqrt{}', 'x^{}', '\\sqrt[]{}',
      '\\pi', '\\infty', '\\pm', 'x_{}',
      '\\sum', '\\lim', '\\frac{d}{dx}', '\\int'
    ]
  };

  private selectedLine: any;

  constructor(public mqs: MathquillService) {
    this.modes = [
      {label: 'Script', value: 'Script', icon: 'fa fa-fw fa-cc-paypal'},
      {label: 'Equation', value: 'Equation', icon: 'fa fa-fw fa-cc-visa'}
    ];
  }


  generateMScriptLine(eScriptLine:any){}
  generateEScriptLine(mScriptLine:string, lineEnv:any) {}
  importMScript() {};
  importEScript() {};

  exportMScript() {};
  saveEScript() {};

  addLine() {
    this.mScriptLines.push('');
    this.eScriptLines.push({editText:'', scriptText:''});
  };
  removeLine() {};
  openEquationDialog() {};
  submitEquation() {};
  iconClickHandler() {};

  validation() {};

  openEQEditor(line) {
    this.selectedLine = line;
    this.display = true;
  }

  displayChange(value) {
    this.showViewer = false;
    console.log(value);
    this.selectedLine.eq = value;
    this.display = false;
    this.showViewer = true;
  }

  interpretLine(line: any) {
    if(line.editText.indexOf('$EQ$') > 0) {
      line.preText = line.editText.substring(0, line.editText.indexOf('$EQ$') );
      line.postText = line.editText.substring(line.editText.indexOf('$EQ$')+4);
      line.scriptText = line.preText + this.generateScriptFromEq(line.eq) + line.postText;
    }else {
      line.preText = line.editText;
      line.postText = "";
      line.scriptText = line.editText;
    }
  }

  myUploader($event: any) {
    console.log($event);
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      let lines:string[] = fileReader.result.toString().split('\n');
      this.eScriptLines = [];

      for(const l of lines){
        console.log(l);
        let lineObj = {editText:l,scriptText:l};
        this.interpretLine(lineObj);

        this.eScriptLines.push(lineObj);

      }

    }
    fileReader.readAsText($event.files[0]);
  }

  private generateScriptFromEq(eq: any) {
    return '[ToBeImplemented]';
  }
}
