import styled from 'styled-components';
import CheckIconURL from './assets/images/icon-check.svg'

export const BottomContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ( min-width: 700px ) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export const BenefitsContainer = styled.ul`
    width: 100%;

    padding-top: 32px;

    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ( min-width: 700px ) {
        align-items: flex-start;
        padding-left: 80px;
    }
`

export const Benefit = styled.li`
    
    font-weight: 500;
    color: #82869f;

    & + & {
        margin-top: 12px;
    }

    &::before {
        content: url(${ CheckIconURL });
        margin-right: 18px;
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StartButton = styled.button`
    text-align: center;
    margin-top: 30px;

    width: 230px;
    padding: 18px 0;

    font-size: 18px;
    font-weight: bold;
    color: #fff;

    background: #293356;
    border-radius: 200px;
`
