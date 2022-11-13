import { FunctionTypes } from '../enums';
import { IButton } from '../interfaces';

const buttonConfigs: IButton[][] = [
  [
    {
      displyType: 'text',
      displayText: 'ac',
      behavior: { functionType: FunctionTypes.ALLCLEAR, value: '' },
    },
    {
      displyType: 'text',
      displayText: '<-',
      behavior: { functionType: FunctionTypes.BACKSPACE, value: '' },
    },
    {
      displyType: 'text',
      displayText: '%',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '%' },
    },
    {
      displyType: 'text',
      displayText: '/',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '/' },
    },
  ],
  [
    {
      displyType: 'text',
      displayText: '7',
      behavior: { functionType: FunctionTypes.DIGIT, value: '7' },
    },
    {
      displyType: 'text',
      displayText: '8',
      behavior: { functionType: FunctionTypes.DIGIT, value: '8' },
    },
    {
      displyType: 'text',
      displayText: '9',
      behavior: { functionType: FunctionTypes.DIGIT, value: '9' },
    },
    {
      displyType: 'text',
      displayText: 'X',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '*' },
    },
  ],
  [
    {
      displyType: 'text',
      displayText: '4',
      behavior: { functionType: FunctionTypes.DIGIT, value: '4' },
    },
    {
      displyType: 'text',
      displayText: '5',
      behavior: { functionType: FunctionTypes.DIGIT, value: '5' },
    },
    {
      displyType: 'text',
      displayText: '6',
      behavior: { functionType: FunctionTypes.DIGIT, value: '6' },
    },
    {
      displyType: 'text',
      displayText: '-',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '-' },
    },
  ],
  [
    {
      displyType: 'text',
      displayText: '1',
      behavior: { functionType: FunctionTypes.DIGIT, value: '1' },
    },
    {
      displyType: 'text',
      displayText: '2',
      behavior: { functionType: FunctionTypes.DIGIT, value: '2' },
    },
    {
      displyType: 'text',
      displayText: '3',
      behavior: { functionType: FunctionTypes.DIGIT, value: '3' },
    },
    {
      displyType: 'text',
      displayText: '+',
      behavior: { functionType: FunctionTypes.OPERATOR, value: '+' },
    },
  ],
  [
    { displyType: '', displayText: '' },
    {
      displyType: 'text',
      displayText: '0',
      behavior: { functionType: FunctionTypes.DIGIT, value: '0' },
    },
    {
      displyType: 'text',
      displayText: '.',
      behavior: { functionType: FunctionTypes.DOT, value: '' },
    },
    {
      displyType: 'text',
      displayText: '=',
      behavior: { functionType: FunctionTypes.CALCULATE, value: '' },
    },
  ],
];
export default buttonConfigs;
