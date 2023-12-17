import { Component } from '@angular/core';
import { buttonConfigs } from './const';
import { FunctionTypes } from './enums';
import { IBehavior, IButton } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public buttonConfigs: IButton[][] = buttonConfigs;
  public preView = '';
  public answer = '0';
  public operators = ['+', '-', '/', '*', '%'];
  title = 'clean-calculator';

  public onButtonClick(behavior: IBehavior | undefined): void {
    if (!behavior) {
      return;
    }
    const lastChar = this.preView[this.preView.length - 1];

    if (lastChar === '.' && behavior.functionType !== FunctionTypes.DIGIT) {
      return;
    }

    switch (behavior.functionType) {
      case FunctionTypes.ALLCLEAR:
        this.preView = '';
        break;
      case FunctionTypes.BACKSPACE:
        this.preView = this.preView.slice(0, this.preView.length - 1);
        break;
      case FunctionTypes.CALCULATE:
        this.answer = 'todo';
        break;
      case FunctionTypes.DIGIT:
        this.preView += behavior.value;
        break;
      case FunctionTypes.DOT:
        if (!this.preView.length) {
          this.preView += '0.';
        } else {
          if (this.operators.includes(lastChar)) {
            this.preView += '0.';
          } else if (lastChar !== '.') {
            this.preView += '.';
          }
        }
        break;
      case FunctionTypes.OPERATOR:
        if (this.operators.includes(lastChar)) {
          return;
        }
        this.preView += behavior.value;
        break;
    }
  }
}
