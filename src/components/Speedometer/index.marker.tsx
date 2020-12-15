import React, {
  useState,
  useLayoutEffect
} from 'react';
import styled from 'styled-components';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  const handleWindowSize = () => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }

  useLayoutEffect(handleWindowSize, []);

  return size;
}

const TextMarker = () => {
  const [width, height] = useWindowSize()

  const steps = [0, 40, 80, 120, 160, 200, 240, 280]
  const size = steps.length
  const angle = (300 / size)
  const circleSize = height * 0.19;
  const radius = circleSize / 2;
  var rot = 140.0;

  return (
    <Wrapper>
      <Container>
        {steps.map((s, index) => {
          const angleRad = rot * Math.PI / 180;
          const x = radius * Math.cos(angleRad) + circleSize;
          const y = radius * Math.sin(angleRad) + circleSize;

          const item = (
            <Kmh style={{left: x, top: y}}>{s}</Kmh>
          )

          rot += angle;
          
          return item
        })}
      </Container>
    </Wrapper>
  )
}

export default TextMarker;

const Wrapper = styled.div`
  position: absolute;
  left: 4vh;
  top: 4.5vh;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  position: relative;
  width: calc(22.5vh + 8px);
  height: calc(22.5vh + 8px);
  margin-top: 3px;
`;

const Kmh = styled.div`
  position: absolute;
  font-size: 1.5vh;
  font-family: 'Oxygen', sans-serif;
  font-weight: 300;
  transform: translate(-35%, -35%);
  text-shadow: none;
  text-align: center;
  color: #bfbfbf;
`;