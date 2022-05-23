import React from 'react';
export type User = {
  name: string; // nickname
  email: string;
  likeNum: number;
  likeList: Subscription[];
};

export type tempSub = {
  1: number; //공고번호
  2: string; //주택명
  3: string; //공급위치
  4: number; //공급규모
  5: string; //모집공고일
  6: string; //청약접수시작일
  7: string; //청약접수종료일
  8: string; //홈페이지
  9: string; //특별공급 접수시작일
  10: string; //특별공급 접수 종료일
  11: string; //1순위 접수일 해당지역
  12: string; //1순위 접수일 경기지역
  13: string; //1순위 접수일 기타지역
  14: string; //2순위 접수일 해당지역
  15: string; //2순위 접수일 경기지역
  16: string; //2순위 접수일 기타지역
  17: string; //당첨자발표일
  18: string; //계약시작일
  19: string; //계약종료일
};

export type Subscription = {
  id: number;
  houseName: string;
  houseLocation: string;
  applyStartDate: string;
  applyEndDate: string;
};

export type SummarizedSubscription = {
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
export type SearchCardItemProps = { subscription: SummarizedSubscription };

export const CARD_WIDTH = 260;
export const CARD_HEIGHT = 194;
export const CARD_MARGIN = 6;
export const CARD_BORDER_RADIUS = 8;
