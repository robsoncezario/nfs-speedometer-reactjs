import React from 'react';
import {useRecoilValue} from 'recoil';
import {kmhState} from './atoms';

import styled from 'styled-components';

const KMH = () => {
  const kmh = useRecoilValue(kmhState)

  return (
    <Container>
      <Value>{kmh}</Value>

      <Label>KMH</Label>
    </Container>
  )
}

export default KMH;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  padding: 1vh;
  height: 4vh;
  background: radial-gradient(circle, transparent 20%, rgb(4, 4, 7) 20%, rgb(4, 4, 7) 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, rgb(4, 4, 7) 20%, rgb(4, 4, 7) 80%, transparent 80%, transparent) 12px 12px, linear-gradient(rgb(64, 64, 67) 2px, transparent 2px) 0 -1px, linear-gradient(90deg, rgb(64, 64, 67) 2px, transparent 2px) -1px 0;
  background-color: rgb(4, 4, 7);
  background-size: 75px 75px, 75px 75px, 12px 12px, 12px 12px;
  clip-path: polygon(30% 0, 70% 0, 100% 50%, 100% 100%, 0 100%, 0 50%);
  box-sizing: border-box;
  margin-top: -6vh;
`;

const Value = styled.div`
  font-family: 'Oxygen', sans-serif;
  font-weight: 300;
  font-size: 2.25vh;
  line-height: 2.75vh;
  margin-top: -4px;
  text-align: center;
  color: #bfbfbf;
`;

const Label = styled.div`
  font-family: 'Oxygen', sans-serif;
  font-weight: 300;
  font-size: 1vh;
  margin-top: -4px;
  color: #bfbfbf;
`;