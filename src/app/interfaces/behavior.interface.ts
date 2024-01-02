import { FunctionTypes } from '../enums';

export default interface IBehavior {
  functionType: FunctionTypes;
  value:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '+'
    | '-'
    | '/'
    | '*'
    | '%'
    | ''
    | 'Backspace'
    | 'Enter'
    | '.';
}
