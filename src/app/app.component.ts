import { Component, HostListener } from '@angular/core';
import { buttonConfigs } from './const';
import { FunctionTypes } from './enums';
import { IBehavior, IButton } from './interfaces';
import { CalculateService } from './services/calculate.service';

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

  constructor(private calculateService: CalculateService) {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    let buttonConfig: IButton;
    for (const configList of buttonConfigs) {
      const config = configList.find(
        (config) => config.behavior?.value === event.key
      );

      if (config) {
        buttonConfig = config;
        this.onButtonClick(buttonConfig.behavior);
        break;
      }
    }
  }

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
        this.answer = '0';
        break;
      case FunctionTypes.BACKSPACE:
        this.preView = this.preView.slice(0, this.preView.length - 1);
        break;
      case FunctionTypes.CALCULATE:
        this.answer = this.calculateService.calculateExpression(this.preView);
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
