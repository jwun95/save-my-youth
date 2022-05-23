import React from 'react';
export type User = {
  name: string; // nickname
  email: string;
  likeNum: number;
  likeList: Subscription[];
};

export type Subscription = {
  id: number;
  houseName: string;
  houseLocation: string;
  applyStartDate: string;
  applyEndDate: string;
};


export type SubscriptionUsedMainPage = SubscriptionUsedMainPageByAPI & SubscriptionUsedMainPageByDB;

export type SubscriptionUsedMainPageByAPI = {
  id: number;
  houseName: string;
  recNotice: string;
};

export type SubscriptionUsedMainPageByDB = {
  likeNum: number;
  imgLink: string;
};

export type Writing = '최신' | '인기';
export type Children = React.ReactNode;

export type slidDirection = 'left' | 'right';

export type ArrowDirection = 'right' | 'down' | 'up';

export type OptionDecoration = {
  fontSize?: string;
  fontWeight?: string;
  fontColor?: string;
  underlineHeight?: string;
  isUseBoldUnderline?: boolean;
  direction?: ArrowDirection | null;
  disabled?: boolean;
};

export type Option = {
  userName?: string;
  optionName: string;
  link: string;
  isShownAlways?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & OptionDecoration;

export type HelpType = { name: string; option: string };
export type HelpContents = Record<number, JSX.Element>;

export type AccordionType = { head: Option; tails: Option[] };

// serchCardlist
export type SearchCardListProps = { subData: Subscription[] };
export type SubscriptionList = { subData: SearchCardListProps };
export type SearchCardItemProps = { subscription: Subscription };

export const CARD_WIDTH = 260;
export const CARD_HEIGHT = 194;
export const CARD_MARGIN = 6;
export const CARD_BORDER_RADIUS = 8;
