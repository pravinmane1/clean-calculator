import { FunctionTypes } from '../enums';
import { IButton } from '../interfaces';

const buttonConfigs: IButton[][] = [
  [
    {
      displyType: 'text',
      displayText: 'ac',
      behavior: { functionType: FunctionTypes.ALLCLEAR, value: '' },
      class: 'dark-grey',
    },
    {
      displyType: 'text',
      displayText: '<-',
      behavior: { functionType: FunctionTypes.BACKSPACE, value: '' },
      class: 'dark-grey',
    },
    {
      displyType: 'text',
      displayText: '%',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '%' },
      class: 'dark-grey',
    },
    {
      displyType: 'text',
      displayText: '/',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '/' },
      class: 'dark-grey',
    },
  ],
  [
    {
      displyType: 'text',
      displayText: '7',
      behavior: { functionType: FunctionTypes.DIGIT, value: '7' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '8',
      behavior: { functionType: FunctionTypes.DIGIT, value: '8' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '9',
      behavior: { functionType: FunctionTypes.DIGIT, value: '9' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: 'X',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '*' },
      class: 'dark-grey',
    },
  ],
  [
    {
      displyType: 'text',
      displayText: '4',
      behavior: { functionType: FunctionTypes.DIGIT, value: '4' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '5',
      behavior: { functionType: FunctionTypes.DIGIT, value: '5' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '6',
      behavior: { functionType: FunctionTypes.DIGIT, value: '6' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '-',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '-' },
      class: 'dark-grey',
    },
  ],
  [
    {
      displyType: 'text',
      displayText: '1',
      behavior: { functionType: FunctionTypes.DIGIT, value: '1' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '2',
      behavior: { functionType: FunctionTypes.DIGIT, value: '2' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '3',
      behavior: { functionType: FunctionTypes.DIGIT, value: '3' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '+',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '+' },
      class: 'dark-grey',
    },
  ],
  [
    { displyType: '', displayText: '', class: '' },
    {
      displyType: 'text',
      displayText: '0',
      behavior: { functionType: FunctionTypes.DIGIT, value: '0' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '.',
      behavior: { functionType: FunctionTypes.DOT, value: '' },
      class: 'light-grey',
    },
    {
      displyType: 'text',
      displayText: '=',
      behavior: { functionType: FunctionTypes.CALCULATE, value: '' },
      class: 'orange',
    },
  ],
];
export default buttonConfigs;
