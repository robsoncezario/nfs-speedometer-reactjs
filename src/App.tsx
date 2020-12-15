import React, { Suspense } from 'react';

import {RecoilRoot} from 'recoil';
import Speedometer from './components/Speedometer';

const App = () => {
  return (
    <RecoilRoot>
      <Speedometer />
    </RecoilRoot>
  );
}

export default App;
