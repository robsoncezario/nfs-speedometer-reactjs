import React from 'react';
import {useRecoilValue} from 'recoil';
import {kmhState} from './atoms';

//
// same as RPM, directly styling case
const style = (rotation: number) => ({
  wrapper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -100%)',
    zIndex: 300
  } as React.CSSProperties,

  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    transformOrigin: 'bottom',
    transform: `rotate(${rotation}deg)`,
    transition: 'transform .2s'
  } as React.CSSProperties,

  pointer: {
    width: '1.5vh',
    height: '5vh',
    clipPath: 'polygon(50% 0, 50% 0, 100% 40%, 60% 100%, 40% 100%, 0 40%)',
    backgroundColor: 'white'
  } as React.CSSProperties,

  fork: {
    width: 1,
    height: '6vh',
    backgroundColor: 'rgb(106, 106, 106)',
    boxShadow: '1px 1px 0 rgb(64, 64, 64, 1)'
  } as React.CSSProperties,

  circle: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 100,
    width: '1.5vh',
    height: '1.5vh',
    backgroundColor: 'rgb(4, 4, 7)',
    borderRadius: '50%',
    boxShadow: 'inset 0 0 2px rgba(255, 255, 255, .2)'
  } as React.CSSProperties
})

const Needle = () => {
  const kmh = useRecoilValue(kmhState);
  const currentKmh = Math.min(280, kmh)
  const minAngle = 225;
  const maxAngle = 495;
  const scale = currentKmh / 280
  const angle = minAngle + ((maxAngle - minAngle) * scale)
  const styles = style(angle)

  return (
    <>
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <div style={styles.pointer} />
          <div style={styles.fork} />
        </div>
      </div>

      <div style={styles.circle} />
    </>
  )
}

export default Needle;