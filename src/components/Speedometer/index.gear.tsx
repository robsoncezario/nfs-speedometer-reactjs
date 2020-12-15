import React from 'react';
import {useRecoilValue} from 'recoil';
import {gearState} from './atoms';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 75%;
  top: 50%;
  transform: translate(-50%, -100%);
  z-index: 100;
`;

const Container = styled.div`
  width: 2vh;
  height: 2vh;
  padding: .5vh;
  background-color: rgb(4, 4, 7);
  clip-path: polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px);
`;

const Value = styled.div`
  font-size: 2vh;
  font-family: 'Oxygen', sans-serif;
  font-weight: 300;
  line-height: 1.8vh;
  text-align: center;
  color: #bfbfbf;
`;

const Gear = () => {
  const data = useRecoilValue(gearState)
  var formattedGear;

  switch(true) {
    case data.isNeutral: 
      formattedGear = 'N';
      break;
    case data.gear === 0: 
      formattedGear = 'R';
      break;
    default: 
      formattedGear = data.gear;
      break;
  }

  return (
    <Wrapper>
      <Container>
        <Value>{formattedGear}</Value>
      </Container>
    </Wrapper>
  )
}

export default Gear;