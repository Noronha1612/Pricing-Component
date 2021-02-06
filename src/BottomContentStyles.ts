import styled from 'styled-components';
import CheckIconURL from './assets/images/icon-check.svg'

export const BottomContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BenefitsContainer = styled.ul`
    width: 100%;

    padding-top: 32px;

    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const StartButton = styled.button`
    margin-top: 30px;

    padding: 18px 60px;

    font-size: 18px;
    font-weight: bold;
    color: #fff;

    background: #293356;
    border-radius: 200px;
`
