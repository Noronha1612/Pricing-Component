import styled from 'styled-components';

export const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
    color: #8d909f;
    font-weight: 600;

    grid-area: price;
`

export const Content = styled.span`
    color: #22304d;
    font-size: 40px;
    font-weight: bold;
    margin-right: 12px;

    @media (min-width: 700px) {
        font-size: 48px;
    }
`