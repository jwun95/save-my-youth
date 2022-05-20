import { useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import PALETTE from '../../constants/palette';
import { CARD_WIDTH, SubscriptionUsedMainPage } from '../../types';

const DOT_RADIUS = '6px';

const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  transition: ease-in-out 0.4s;
`;

const StyledDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 1.5rem 0;
`;

const StyledDot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  min-width: ${DOT_RADIUS};
  min-height: ${DOT_RADIUS};
  border-radius: 50%;
  padding: 0;
  margin: 0 2px;
  background: ${(props) => (props.active ? PALETTE.PRI_MAIN : PALETTE.LIGHT_030)};
`;

// TODO: 스크롤 맨 오른쪽까지 되게 수정
const StyledCardConatiner = styled.div`
  width: 100%;
  overflow-x: scroll; // PC
  //-webkit-overflow-scrolling: touch; // mobile */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const StyledCardSlider = styled.div<{ slideIndex: number; todaySubscriptionsLength: number }>`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(
    ${(props) =>
      props.slideIndex * -CARD_WIDTH + (CARD_WIDTH * (props.todaySubscriptionsLength - 1)) / 2}vw
  );
`;

// TODO: 사용될 예정 (화살표 누르면 이동)
const StyledArrow = styled.div<{ direction: string }>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'}; //direction이 left면 left에서부터 10px
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export type CardSliderProps = {
  todaySubscriptions: SubscriptionUsedMainPage[];
};

// ref: https://github.com/Ziratsu/slider-react/tree/a44cc92f02b0e4995cc661e04c32724fc946ac59
const CardSlider = ({ todaySubscriptions }: CardSliderProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  // const handleClick = (direction: slidDirection) => {
  //   if (direction === 'left') {
  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
  //   } else {
  //     setSlideIndex(slideIndex < subscriptionList.length ? slideIndex + 1 : 0);
  //   }
  // };

  const onDotClick = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <section>
      <StyledCardConatiner>
        <StyledCardSlider
          slideIndex={slideIndex}
          todaySubscriptionsLength={todaySubscriptions.length}
          onScroll={() => console.log('drag')}
        >
          {todaySubscriptions.map((todaySubscription) => (
            <Card
              key={todaySubscription.id}
              title={todaySubscription.houseName}
              likeNum={todaySubscription.likeNum}
            />
          ))}
        </StyledCardSlider>
      </StyledCardConatiner>

      <StyledDotsContainer>
        {Array.from({ length: todaySubscriptions.length }).map((item, index) => (
          <StyledDot
            key={`${index}-${item}`}
            active={slideIndex === index}
            onClick={() => onDotClick(index)}
          />
        ))}
      </StyledDotsContainer>
    </section>
  );
};

export default CardSlider;
