import React from 'react';

import { Container, Description, MainTitle } from './styles';

const Title: React.FC = () => {
    return (
        <Container>
            <MainTitle>Simple, traffic-based pricing</MainTitle>
            <Description>Sign-up for our 30-day trial.<br/>No credit card required</Description>
        </Container>
    );
}

export default Title;