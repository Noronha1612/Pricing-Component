import React from 'react';
import Background from './components/Background';
import Title from './components/Title';

import { GlobalStyleComponent } from "./Global";
import { ContentContainer } from './AppStyles';

function App() {
  return (
    <>
      <GlobalStyleComponent />
      <Background />
      <ContentContainer>
        <Title />
      </ContentContainer>
      
      {/* <Main></Main> */}
    </>
  )
}

export default App;
