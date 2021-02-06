import styled from 'styled-components';

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const MainContent = styled.section`
    width: calc(100% - 60px);
    max-width: 600px;
    padding: 40px 0;
    margin: 0 30px;
    
    border-radius: 12px;
    box-shadow: 0px 8px 12px 0px #eff0f5;
    background: #fff;
`

export const TopContent = styled.section`
    width: 100;
    padding-bottom: 40px;
    border-bottom: 2px solid #efeff9;
`

export const BottomContent = styled.section`
    
`