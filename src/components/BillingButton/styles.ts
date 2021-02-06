import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    & > span {
        color: #848ba8;
        font-weight: 500;

        & > span {
            font-size: 12px;
            font-weight: 600;
            color: #e28b6f;

            border-radius: 20px;
            background: #ffebed;
            padding: 4px 8px;
        }
    }
`;

export const AnimatedCheck = styled.label<{ checked: boolean }>`
    position: relative;

    margin: 0 12px;
    padding: 4px;

    width: 60px;
    height: 30px;
    background: ${ props => !props.checked ? '#d0d8ef' : '#7eeadd' };
    border-radius: 40px;
    transition: .4s;

    cursor: pointer;

    &::after {
        content: '';
        height: 22px;
        width: 22px;
        border-radius: 50%;

        background: #fff;

        position: absolute;
        left: ${ props =>  !props.checked ? '4px' : '34px'};
        top: 50%;
        transform: translateY(-50%);

        transition: .4s;
    }
`
