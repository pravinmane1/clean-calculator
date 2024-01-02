import { FunctionTypes } from '../enums';
import { IButton } from '../interfaces';

const buttonConfigs: IButton[][] = [
  [
    {
      displyType: 'text',
      displayText: 'ac',
      behavior: { functionType: FunctionTypes.ALLCLEAR, value: '' },
      class: 'bg-secondary-600',
    },
    {
      displyType: 'text',
      displayText: '<-',
      behavior: { functionType: FunctionTypes.BACKSPACE, value: 'Backspace' },
      class: 'bg-secondary-600',
    },

    {
      displyType: 'text',
      displayText: '/',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '/' },
      class: 'bg-secondary-600',
    },
    {
      displyType: 'text',
      displayText: 'X',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '*' },
      class: 'bg-secondary-600',
    },
  ],
  [
    {
      displyType: 'text',
      displayText: '7',
      behavior: { functionType: FunctionTypes.DIGIT, value: '7' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '8',
      behavior: { functionType: FunctionTypes.DIGIT, value: '8' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '9',
      behavior: { functionType: FunctionTypes.DIGIT, value: '9' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '-',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '-' },
      class: 'bg-secondary-600',
    },
  ],
  [
    {
      displyType: 'text',
      displayText: '4',
      behavior: { functionType: FunctionTypes.DIGIT, value: '4' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '5',
      behavior: { functionType: FunctionTypes.DIGIT, value: '5' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '6',
      behavior: { functionType: FunctionTypes.DIGIT, value: '6' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '+',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '+' },
      class: 'bg-secondary-600',
    },
  ],
  [
    {
      displyType: 'text',
      displayText: '1',
      behavior: { functionType: FunctionTypes.DIGIT, value: '1' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '2',
      behavior: { functionType: FunctionTypes.DIGIT, value: '2' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '3',
      behavior: { functionType: FunctionTypes.DIGIT, value: '3' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '=',
      behavior: { functionType: FunctionTypes.CALCULATE, value: 'Enter' },
      class: 'bg-primary-400',
    },
  ],
  [
    { displyType: '', displayText: '', class: '' },
    {
      displyType: 'text',
      displayText: '.',
      behavior: { functionType: FunctionTypes.DOT, value: '.' },
      class: 'bg-secondary-500',
    },
    {
      displyType: 'text',
      displayText: '0',
      behavior: { functionType: FunctionTypes.DIGIT, value: '0' },
      class: 'bg-secondary-500',
    },
  ],
];
export default buttonConfigs;
