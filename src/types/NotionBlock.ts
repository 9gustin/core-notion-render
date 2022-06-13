import { Text } from './Text';
import { blockEnum } from './BlockTypes';

interface Title {
  id: 'title';
  type: 'title';
  title: Text[];
}

interface BlockTypeContent {
  text: Text[];
  checked?: boolean;
  children?: Block[];
  rich_text: Text[];
  caption?: Text[];
  type?: 'external' | 'file';
  external?: {
    url: string;
  };
  file?: {
    url: string;
  };
  url?: string;
  icon?: {
    type: 'emoji';
    emoji: string;
  };
  language?: string;
  has_column_header?: boolean;
  has_row_header?: boolean;
  cells?: Text[][];
}

export interface Block {
  id: string;
  type: blockEnum | string;
  object: 'block' | 'database' | 'page' | string;
  created_time: Date | string;
  last_edited_time: Date | string;
  has_children: boolean;
  [blockEnum.HEADING1]?: BlockTypeContent;
  [blockEnum.HEADING2]?: BlockTypeContent;
  [blockEnum.HEADING3]?: BlockTypeContent;
  [blockEnum.PARAGRAPH]?: BlockTypeContent;
  [blockEnum.DOTS_LIST]?: BlockTypeContent;
  [blockEnum.ENUM_LIST]?: BlockTypeContent;
  [blockEnum.CHECK_LIST]?: BlockTypeContent;
  [blockEnum.TOGGLE_LIST]?: BlockTypeContent;
  [blockEnum.TABLE]?: BlockTypeContent & {
    has_column_header: boolean;
    has_row_header: boolean;
    table_width: number;
  };
  [blockEnum.TABLE_ROW]?: BlockTypeContent & {
    cells: Text[];
  };
  [blockEnum.TITLE]?: BlockTypeContent;
  [blockEnum.VIDEO]?: BlockTypeContent;
  [blockEnum.IMAGE]?: BlockTypeContent;
  [blockEnum.EMBED]?: BlockTypeContent;
  [blockEnum.FILE]?: BlockTypeContent;
  [blockEnum.PDF]?: BlockTypeContent;
  [blockEnum.BOOKMARK]?: BlockTypeContent;
  [blockEnum.CODE]?: BlockTypeContent;
  [blockEnum.SYNCED_BLOCK]?: BlockTypeContent;
  [blockEnum.TABLE_OF_CONTENTS]?: BlockTypeContent;
  [blockEnum.PDF]?: BlockTypeContent;
  [blockEnum.CALLOUT]?: BlockTypeContent;
  [blockEnum.QUOTE]?: BlockTypeContent;
  [blockEnum.DIVIDER]?: BlockTypeContent;
}

export type NotionBlock = Block | Title;
