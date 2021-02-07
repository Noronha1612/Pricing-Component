import React from 'react';
import { Content, Price } from './PriceStyles';

import { Container, SliderTitle, SliderInput } from './styles';

interface SliderProps {
    setAmountViews: (number: number) => void;
    amountViews: number;
    valueToPay: number;
}

const Slider: React.FC<SliderProps> = ({ amountViews, setAmountViews, valueToPay }) => {

    return (
        <Container>
            <SliderTitle>
                { amountViews === 1000000 ? `1M` : `${Math.floor(amountViews / 1000)}K` } Pageviews
            </SliderTitle>

            <SliderInput
                type="range"
                min={10000}
                max={1000000}
                activeBarLength={ 100 * ( amountViews / 1000000 ) }
                defaultValue={amountViews}
                onChange={event => { setAmountViews(Number(event.target.value)) }}
            />
            
            <Price>
              <Content>${valueToPay.toFixed(2)}</Content> / month
            </Price>

        </Container>
    );
}

export default Slider;