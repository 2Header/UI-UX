import styled from 'styled-components';


export const CommentItem = styled.div`
    border-radius: 20px 10px 10px 20px;
    grid-template-columns: 1fr 20px;
    display: grid;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 10px;
    height: 100px; /* Set a fixed height */
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.iconColor};
    // padding: 10px;
    box-shadow: 0px 0px 5px ${props => props.theme.shadowColor};
`;

export const CommentText = styled.div`
    display: flex;
    height: 30px;
    color: ${props => props.theme.textColor};
    font-size: ${props => props.theme.textSizeTextS};
    align-items: center;
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextS};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextS};
    }
`;

export const CommentContent = styled.div`
    // display: grid;
    // grid-template-columns: 1fr 20px;
    justify-content: space-between;   
    padding: 10px;
`;

export const UserName = styled.div`
    display: flex;
    height: 30px;
    color: ${props => props.theme.textColor};
    font-size: ${props => props.theme.textSizeTextS};
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    @media (max-width: 768px) and (min-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextS};
    }
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTextS};
    }
`;

export const deleteButton = styled.button`
    height: 100%;
    width: 30px;
    // padding: 5px;
    align-item: center;
    justify-content: center;
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.iconColor};
    border-color: none;
    hover-color: ${props => props.theme.commentColor};
    border-radius: 0 20px 20px 0 ;
    box-shadow: 4px 0 5px 0 ${props=>props.theme.shadowColor};;
    outline: none;
    border:none;
    &:hover{
        cursor: pointer;
        transition: 0.3s;
        background-color:  ${props => props.theme.accentColor1};
    }
`;