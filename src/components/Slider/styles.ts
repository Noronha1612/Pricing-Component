import styled from 'styled-components';
import SliderIconURL from '../../assets/images/icon-slider.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SliderTitle = styled.h3`
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #8b90a4;
    font-size: 18px;
`

export const SliderWrapper = styled.div`
`

export const SliderInput = styled.input`
    width: calc(100% - 80px);
    position: relative;
    margin: 40px auto 0;
    height: 12px;

    background: #e1effa;
    border-radius: 20px;
    z-index: 10;
    -webkit-appearance: none;

    // Chrome
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-image: url(${ SliderIconURL });
        background-repeat: no-repeat;
        background-size: 35px;
        background-position: center;
        background-color: #12d5c5;
        
        cursor: grab;

        transition: .4s;
    }
    &::-webkit-slider-thumb:hover {
        background-color: #7aeade;
    }
    &::-webkit-slider-thumb:active {
        background-color: #24afa8;
        cursor: grabbing;
    }

    // FF
    &::-moz-range-thumb {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-image: url(${ SliderIconURL });
        background-repeat: no-repeat;
        background-size: 35px;
        background-position: center;
        background-color: #12d5c5;
        border: none;
        
        cursor: grab;

        transition: .4s;
    }
    &::-moz-range-thumb:hover {
        background-color: #7aeade;
    }
    &::-moz-range-thumb:active {
        background-color: #24afa8;
        cursor: grabbing;
    }
`