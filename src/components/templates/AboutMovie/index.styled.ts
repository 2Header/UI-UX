import styled from 'styled-components';


export const Details = styled.section`
    display: flex; 
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    justify-content: center;
    background-color: ${props => props.theme.bachgroundColor};
    transition: 0.1s;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1400px;
    padding: 0px 20px;
    margin: 0px 0px;
    box-sizing: border-box;
    z-index: 1;
    @media (max-width: 576px)  {
        padding: 0px 20px;
        margin: 0px 0px;
        width: 100%;
    }
`;

export const ContentTitle = styled.span`
    letter-spacing: 1px;
    font-weight: 500;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin: 50px 0px;
    align-items: center;
    box-sizing: border-box;
    font-size: ${props => props.theme.textSizeTitle};
    @media (max-width: 576px)  {
        font-size: ${props => props.theme.textSizeTitle500};
    }
    & a{
        font-family: Roboto;
        font-size:  ${props => props.theme.textSizeTitle};
        font-weight: 500;
        letter-spacing: 1px;
        transition: 0.3s;
        &:hover{
            transition: 0.3s;
            color: ${props => props.theme.accentColor1};
        }
    }
`;

export const Data = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 2fr ;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    // @media (min-width: 1200px){   
    // }
    // @media (max-width: 1200px) and (min-width: 992px)  {     
    // }
    // @media (max-width: 992px) and (min-width: 768px)  {     
    // }
    @media (max-width: 992px)  {   
        grid-template-columns: 1fr; 
    }
    // @media (max-width: 576px)  {
    //     grid-template-columns: 1fr;
    // }
`;


export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 600px;
    object-fit: cover;
    opacity: 0.3;
`;

export const Image = styled.div`
    display: grid;
    grid-template-rows: 1fr 50px 50px;
    grid-gap: 20px;
    width: 100%;
    height: 100%;
    // flex-direction: column;
`;

export const Img = styled.img`
    aspect-ratio: 1/1/5;
    display: flex;
    // height: 100%;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
    transition: 0.5s;
    box-shadow: 0px 3px 5px ${props=>props.theme.shadowColor};;
    margin: 0px 0px 20px 0px;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    grid-template-columns: 1fr;
`;

export const Button = styled.a`
    cursor: pointer;
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    color:white;
    background-color: aqua;
    border: 0px;
    border-radius:10px;
    font-size: ${props=>props.theme.textSizeTextM};
    &:hover{
        opacity: 0.9;
    }
`;

export const DownloadButton = styled(Button)`
    background-color: ${props=>props.theme.accentColor1};
`;

export const WatchButton = styled(Button)`
    background-color:${props=>props.theme.accentColor2};
`;

export const DescriptionContent = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 100px ;
    grid-gap: 20px;
    border-top: 1px solid ${props => props.theme.accentColor1};
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    padding: 20px 0px;
    box-sizing: border-box; 
    @media (min-width: 768px)  {
        grid-template-columns: 1fr 100px ;
    }
    @media (max-width: 768px)  {
        align-items: center;
        justify-content: top;
        display: flex;
        // grid-template-rows: 100px 1fr;
        flex: 100px 100%;
        flex-direction: column-reverse;
    }
`;

export const Description = styled.div`
    display: grid;
    align-items: flex-start;
    align-self: flex-start;
    grid-template-columns: 1fr;
    background-color: ${props => props.theme.bachgroundColorDown};  
    grid-gap: 20px;
    width: 100%;

`;

export const Title = styled.div`
    display: flex;
    font-size: ${props=> props.theme.textSizeTitle};
    letter-spacing: 1px;
    font-weight: 500;
`;

export const Year = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};


`;

export const DescriptionFull = styled.div`
]   align-item: start;
    font-size: ${props=> props.theme.textSizeTextM};
    line-height: 25px;
    letter-spacing: 1px;
    line-height: 30px;
    overflow-y:auto;
    max-height: 440px;
    text-align: justify;
    padding: 5px;
    // background-color: ${props => props.theme.bachgroundColor};  

`;

export const Genres = styled.div`
    display: grid;
    font-size: ${props=> props.theme.textSizeTextM};
    grid-template-columns: repeat(5,1frpx);
    grid-gap:10px;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr  ;
    }
`;

export const Statistic = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;
    // align-items: start;
    justify-Content: end;
    @media (max-width: 768px) and (min-width: 576px)  {
        grid-template-columns: 1fr 1fr  1fr 1fr;
        height:50px;
    }
    @media (max-width: 576px)  {
        grid-template-columns: 1fr 1fr  ;
        height:100px;
    }
`;

export const TorrentsTitle = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    justify-content: center;
    margin: 10px 0;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;

export const Torrents = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    border-bottom: 1px solid ${props=> props.theme.accentColor1};
    padding: 20px;
`;



export const CommentsTitle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.textColor};
`;

export const CommentItem = styled.div`
    display: flex;
    grid-template-columns: 1fr;
    grid-gap: 10px;    
    width: 100%;
    font-size: ${props=> props.theme.textSizeTextL};
    color: ${props=> props.theme.accentColor1};
`;

export const YourNameLabel = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextM};
    color: ${props=> props.theme.textColor};
`;

export const CommentTextLabel = styled.div`
    display: flex;
    width: 100%;
    flex: 0 0 auto;
    font-weight: 600;
    font-size: ${props=> props.theme.textSizeTextM};
    color: ${props=> props.theme.textColor};
`;

export const ButtonCustom = styled.button`
    cursor: pointer;
    margin: 10px 0 ;
    width: 100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 0px;
    border-radius:10px;
    color: ${props=> props.theme.textColor}; 
    background-color: ${props => props.theme.iconColor};
    font-size: ${props=>props.theme.textSizeTextM};
    box-shadow: 0px 3px 5px ${props=>props.theme.shadowColor};;
    &:hover{
        transition: 0.3s;
        background-color:  ${props => props.theme.accentColor1};
    }
`; 

export const InputUser = styled.input`
    border-radius: 15px;
    padding: 10px;
    box-shadow: inset 0px 1px 2px ${props=>props.theme.shadowColor};;
    background-color:  ${props => props.theme.commentColor};
    font-size: ${props=>props.theme.textSizeTextM};
`

export const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    box-shadow: inset 0px 1px 2px ${props=>props.theme.shadowColor};;
    border-radius: 15px;
    padding: 10px;
    background-color:  ${props => props.theme.commentColor};
    font-size: ${props=>props.theme.textSizeTextM};
`;

export const CommentArea = styled.div`
    width: 95%;
`;