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

export const SliderInput = styled.input<{ activeBarLength: number }>`
    -webkit-appearance: none;  /* Override default CSS styles */
    position: relative;
    width: calc(100% - 40px);
    height: 12px;
    margin: 55px auto 0;

    background: #e1effa;
    border-radius: 20px;
    z-index: 10;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        width: ${ props => props.activeBarLength }%;
        height: 100%;
        background: #a3f3ea;
        border-radius: 20px;

        z-index: 15;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: ${props => props.activeBarLength}%;
        transform: translate(-50%, -40%);

        width: 55px;
        height: 55px;
        
        border-radius: 50%;
        box-shadow: 0px 18px 20px 0px #a3f3ea;
        background-image: url(${ SliderIconURL });
        background-size: 30px;
        background-color: #0ed9c5;
        background-position: center;
        background-repeat: no-repeat;

        z-index: 20;

        cursor: pointer;
    }
    &:hover::after {
        background-color: #7be9de;
    }
    &:active::after {
        background-color: #24aea1;
        cursor: grabbing;
    }
`