import {
  atom,
  selector
} from 'recoil'

export const speedometerState = atom({
  key: 'speedometerAtom',
  default: {
    kmh: 0,
    rpm: 0.1,
    gear: 0,
    fuel: 10,
    health: 100,
    withSeatbelt: true,
    isVisible: true
  } 
})

export const kmhState = selector({
  key: 'kmhState',
  get: ({get}) => get(speedometerState).kmh,
});

export const rpmState = selector({
  key: 'rpmState',
  get: ({get}) => get(speedometerState).rpm,
});

export const speedoIsVisibleState = selector({
  key: 'speedoIsVisibleState',
  get: ({get}) => get(speedometerState).isVisible,
});

export const gearState = selector({
  key: 'gearState',
  get: ({get}) => {
    const data = get(speedometerState)

    return {
      gear: data.gear,
      isNeutral: data.kmh === 0
    }
  },
});
