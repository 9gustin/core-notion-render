import { blockEnum } from '../types/BlockTypes';
import { Text } from '../types/Text';

const DEFAULT_COLOR = 'default';

export function getClassname(annotations: Text['annotations']) {
  return `
  ${annotations.bold ? 'rnr-bold' : ''}
  ${annotations.code ? 'rnr-inline-code' : ''}
  ${annotations.italic ? 'rnr-italic' : ''}
  ${annotations.strikethrough ? 'rnr-strikethrough' : ''}
  ${annotations.underline ? 'rnr-underline' : ''}
  ${annotations.color !== DEFAULT_COLOR ? `rnr-${annotations.color}` : ''}
`.trim();
}

export function blockTypeClassname(notionType: blockEnum) {
  return `rnr-${notionType}`;
}
