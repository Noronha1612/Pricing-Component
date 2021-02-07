import React, { useCallback, useEffect, useState } from 'react';
import Background from './components/Background';
import Title from './components/Title';

import { GlobalStyleComponent } from "./Global";
import { ContentContainer, MainContent, TopContent } from './AppStyles';
import Slider from './components/Slider';
import BillingButton from './components/BillingButton';
import { Benefit, BenefitsContainer, BottomContent, ButtonWrapper, StartButton } from './BottomContentStyles';

function App() {
  const [ amountViews, setAmountViews ] = useState(100000);
  const [ valueToPay, setValueToPay ] = useState(16);

  const [ isYearBilling, setIsYearBilling ] = useState(false); 

  const setProcessedValue = useCallback(( value: number ) => {
      if( !isYearBilling ) setValueToPay(value);
      else {
        const discountedValue = value - ( value / 4 );

        setValueToPay(discountedValue);
      }
  }, [ isYearBilling ]);

  useEffect(() => {
    if ( amountViews <= 50000 ) setProcessedValue(8);
    else if ( amountViews <= 100000 ) setProcessedValue(12);
    else if ( amountViews <= 500000 ) setProcessedValue(16);
    else if ( amountViews < 1000000 ) setProcessedValue(24);
    else if ( amountViews === 1000000 ) setProcessedValue(32);
  }, [ amountViews, setProcessedValue ]);

  return (
    <>
      <GlobalStyleComponent />
      <ContentContainer>
        <Title />
        <MainContent>
          <TopContent>
            <Slider
              setAmountViews={ setAmountViews }
              amountViews={ amountViews }
              valueToPay={ valueToPay }
            />

            <BillingButton 
              setIsYearBilling={ setIsYearBilling }
              isYearBilling={ isYearBilling }
            />
          </TopContent>

          <BottomContent>
            <BenefitsContainer>
              <Benefit>Unlimited websites</Benefit>
              <Benefit>100% data ownership</Benefit>
              <Benefit>Email reports</Benefit>
            </BenefitsContainer>

            <ButtonWrapper>
              <StartButton>Start my trial</StartButton>
            </ButtonWrapper>
          </BottomContent>
        </MainContent>
      <Background />
      </ContentContainer>
    </>
  )
}

export default App;
