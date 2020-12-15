import React from 'react';
import {useRecoilValue} from 'recoil';
import {rpmState} from './atoms';

//
// I've used direct styling on this cuz it is something that should change everyframe frame 

const style = (rpm: any) => ({
  gauge: {
    position: 'relative',
    width: '22.5vh',
    height: '22.5vh',
    borderRadius: '50%',
    WebkitMask: 'radial-gradient(transparent 0, transparent 50%, #000 52.5%)',
    background: 'conic-gradient(rgb(4, 4, 7), rgb(4, 4, 7) 40%, transparent 40%, transparent 60%, rgb(4, 4, 7) 60%)', 
    willChange: 'background'
  } as React.CSSProperties,

  level: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '22.5vh',
    height: '22.5vh',
    borderRadius: '50%',
    WebkitMask: 'radial-gradient(transparent 0, transparent 67.5%, #000 67.5%)',
    background: (() => {
      const left = 40 * (Math.min(.5, Math.max(0, rpm - .5)) * 2);
      const right = 60 + (40 * (Math.min(.5, Math.max(0, rpm)) * 2));
      
      return `conic-gradient(#540f1a 0%, #540f1a ${left}%, transparent ${left}%, transparent 60%, #540f1a 60%, #540f1a ${right}%, transparent ${right}%, transparent 100%)` 
    })(), 
    willChange: 'background'
  } as React.CSSProperties
})

const RPM = () => {
  const rpm = useRecoilValue(rpmState);
  const styles = style(rpm)

  return (
    <div style={styles.gauge}>
      <div style={styles.level} />
    </div>
  )
}

export default RPM;