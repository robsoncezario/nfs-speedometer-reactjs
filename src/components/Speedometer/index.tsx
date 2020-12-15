import React, { useEffect } from 'react';
import {useRecoilState} from 'recoil';
import styled from 'styled-components';

import RPM from './index.rpm';
import KMH from './index.kmh';
import TextMarker from './index.marker';
import Needle from './index.needle';
import Gear from './index.gear';



import {speedometerState} from './atoms';

const styles = {
  container: {
    position: 'relative',
    width: '22.5vh',
    height: '22.5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center'
  } as React.CSSProperties
}

const Wrapper = styled.div`
  position: absolute;
  right: 2vw;
  bottom: 2vh;
`;

const Container = styled.div`
  position: relative;
  width: 22.5vh;
  height: 22.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-self: center;
`;

const Speedometer = () => {
  const [speedometer, setSpeedometer] = useRecoilState(speedometerState);

  const handleEvents = () => {
    const intervalId = setInterval(() => setSpeedometer(prevState => ({
      ...prevState, ...{
        kmh: Math.min(300, prevState.kmh + 20),
        rpm: Math.min(1, prevState.rpm + 0.1)
      }})
    ), 1000)

    return () => {
      clearInterval(intervalId);
    }
  }

  useEffect(handleEvents, []);

  return (
    <>
      {speedometer.isVisible && (
        <Wrapper>
          <Container>
            <RPM />
            <Needle />
            <Gear />
            <KMH />
            <TextMarker />
          </Container>
        </Wrapper>
      )}
    </>
  )
}

export default Speedometer;