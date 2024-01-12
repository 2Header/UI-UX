import styled from 'styled-components';

export const StatisticItem = styled.div`
    // aspect-ratio: 1/1;
    width:100px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // padding: 0 0px;
    // margin: 10px;
    background-color: ${props => props.theme.iconColor};
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
    border-radius: 10px;
`;

export const Icon = styled.div`
    color: ${props => props.theme.accentColor1};
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle};
    }
`;

export const Text = styled.span`
    font-size: ${props => props.theme.textSizeTextM};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM700};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextM500};
    }
`;