import IBehavior from './behavior.interface';

export default interface IButton {
  displyType: 'text' | 'icon' | '';
  displayText?:
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
    | '.'
    | any;
  iconUrl?: string;
  behavior?: IBehavior;
  class: 'orange' | 'light-grey' | 'dark-grey' | '';
}
