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

const styles = {
  wrapper: {
    position: 'absolute',
    left: '75%',
    top: '50%',
    transform: 'translate(-50%, -100%)',
    zIndex: 100
  } as React.CSSProperties,

  container: {
    width: '1.5vh',
    height: '1.5vh',
    padding: '.5vh',
    background: 'radial-gradient(circle, transparent 20%, rgb(4, 4, 7) 20%, rgb(4, 4, 7) 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, rgb(4, 4, 7) 20%, rgb(4, 4, 7) 80%, transparent 80%, transparent) 12px 12px, linear-gradient(rgb(64, 64, 67) 2px, transparent 2px) 0 -1px, linear-gradient(90deg, rgb(64, 64, 67) 2px, transparent 2px) -1px 0',
    backgroundColor: 'rgb(4, 4, 7)',
    backgroundSize: '75px 75px, 75px 75px, 12px 12px, 12px 12px',
    border: '1px solid rgba(191, 191, 161, .5)',
    clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)'
  } as React.CSSProperties,

  gear: {
    fontSize: '3vh',
    fontFamily: 'Dark Ministry',
    fontWeight: 400,
    lineHeight: '1.8vh',
    textAlign: 'center'
  } as React.CSSProperties
}

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