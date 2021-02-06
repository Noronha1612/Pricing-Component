import React from 'react';

import { Container, SliderTitle, SliderInput } from './styles';

interface SliderProps {
    setAmountViews: (number: number) => void;
    amountViews: number
}

const Slider: React.FC<SliderProps> = ({ amountViews, setAmountViews, ...props }) => {

    return (
        <Container>
            <SliderTitle>
                { amountViews === 1000000 ? `1M` : `${Math.floor(amountViews / 1000)}K` } Pageviews
            </SliderTitle>

            <SliderInput
                type="range"
                min={10000}
                max={1000000}
                defaultValue={amountViews}
                activeBarLength={ 100 * (amountViews / 1000000) }
                onChange={event => { setAmountViews(Number(event.target.value)) }}
            />

        </Container>
    );
}

export default Slider;