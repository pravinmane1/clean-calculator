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
  public preView: string = '';
  public answer: string = '= 0';
  title = 'clean-calculator';

  public onButtonClick(behavior: IBehavior | undefined) {
    if (!behavior) {
      return;
    }

    switch (behavior.functionType) {
      case FunctionTypes.ALLCLEAR:
        this.preView = '';
        this.answer = '= 0';
        break;
      case FunctionTypes.BACKSPACE:
        this.preView = this.preView.slice(0, this.preView.length-1);

        break;
      case FunctionTypes.CALCULATE:
        this.preView = 'todo';
        this.answer = '= todo';
        break;
      case FunctionTypes.DIGIT:
        this.preView +=behavior.value;
        this.answer = '= 0';
        break;
      case FunctionTypes.DOT:
        this.preView +='.';
        this.answer = this.preView;
        break;
      case FunctionTypes.OPERATOR:
        this.preView +=behavior.value;
        this.answer = '= 0';
        break;
    }
  }
}
