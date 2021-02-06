import React from 'react';

import { AnimatedCheck, Container } from './styles';

interface BillingButtonProps {
    setIsYearBilling: (bool: boolean) => void;
    isYearBilling: boolean
}

const BillingButton: React.FC<BillingButtonProps> = ({ setIsYearBilling, isYearBilling }) => { 
    return (
      <Container>
            <span>Monthly Billing</span>
            
            <AnimatedCheck 
                checked={ isYearBilling }
                htmlFor="billing-check"
            >
            <input  
                id="billing-check" 
                type="checkbox"
                style={{ display: 'none' }}
                onChange={event => { setIsYearBilling(event.target.checked) }}
            />
            </AnimatedCheck>
            <span>Yearly Billing <span>-25%</span></span>
      </Container>
  );
}

export default BillingButton;