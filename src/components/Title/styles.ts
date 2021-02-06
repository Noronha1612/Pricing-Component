import styled from 'styled-components';
import svgBackground from '../../assets/images/pattern-circles.svg';

export const Container = styled.div`
    background: url(${svgBackground});
    background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 200px;

    margin-bottom: 40px;
`;

export const MainTitle = styled.h2`
    text-align: center;
    font-weight: 800;
    font-size: 28px;
    margin-bottom: 20px;
    color: #2a3458;
`

export const Description = styled.p`
    text-align: center;
    color: #828b9c;
    font-weight: 600;
`