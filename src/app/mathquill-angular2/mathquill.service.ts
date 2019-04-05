import { Injectable } from '@angular/core';

import {IMathQuill, MathQuillLoader} from 'mathquill-typescript';

@Injectable()
export class MathquillService {

  mqpromise: Promise<IMathQuill>;

  constructor() {
    this.mqpromise = new Promise(resolve => {
      MathQuillLoader.loadMathQuill({}, (mq: IMathQuill) => {
        resolve(mq);
      });
    });
  }

}
