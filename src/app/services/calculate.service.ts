import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor() {}
  private operators = ['+', '-', '*', '/', '(', ')'];
  private operatorWeight: { [operator: string]: number } = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  public calculateExpression(expression: string): string {
    const expressionStack = this.getExpressionStack(expression);

    return this.processExpressionStack(expressionStack);
  }

  private getExpressionStack(expression: string): string[] {
    const expressionStack: string[] = [];
    const expressionByCharacter = expression.split('');
    let currentOperand = '';
    for (let i = 0; i < expressionByCharacter.length; i++) {
      const currentChar = expressionByCharacter[i];
      if (this.operators.includes(currentChar)) {
        if (currentOperand && currentOperand.length) {
          expressionStack.push(currentOperand);
          currentOperand = '';
        }
        expressionStack.push(currentChar);
        continue;
      }
      currentOperand = currentOperand + currentChar;
    }

    if (currentOperand && currentOperand.length) {
      expressionStack.push(currentOperand);
    }
    return expressionStack;
  }

  private processExpressionStack(expressionStack: string[]): string {
    const operands: string[] = [];
    const operators: string[] = [];

    for (let i = 0; i < expressionStack.length; i++) {
      const token = expressionStack[i];

      if (!this.operators.includes(token)) {
        operands.push(token);
        continue;
      }

      if (operands.length === 0) {
        operands.push(token);
        continue;
      }

      switch (token) {
        case '(':
          operators.push(token);
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          while (
            this.operatorWeight[operators[operators.length - 1]] >=
              this.operatorWeight[token] &&
            operators.length > 0 &&
            operators[operators.length - 1] !== '('
          ) {
            const num2 = Number.parseFloat(operands.pop()!);
            const num1 = Number.parseFloat(operands.pop()!);
            const operator = operators.pop();
            let result = this.performMathOperation(num1, num2, operator!);

            operands.push(result.toString());
          }
          operators.push(token);
          break;

        case ')':
          while (operators[operators.length - 1] !== ')') {
            const num2 = Number.parseFloat(operands.pop()!);
            const num1 = Number.parseFloat(operands.pop()!);
            const operator = operators.pop();
            let result = this.performMathOperation(num1, num2, operator!);
            operands.push(result.toString());
          }
          operators.pop();
      }
    }

    while (operands.length != 1) {
      const num2 = Number.parseFloat(operands.pop()!);
      const num1 = Number.parseFloat(operands.pop()!);
      const operator = operators.pop();
      let result = this.performMathOperation(num1, num2, operator!);
      operands.push(result.toString());
    }

    return operands[0];
  }

  private performMathOperation(
    num1: number,
    num2: number,
    operator: string
  ): string {
    let result = 0;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }
    return result.toString();
  }
}
