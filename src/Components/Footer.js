import styled from "styled-components";

export default function Footer(props){

    return(
        <FooterStyle data-test="footer">
            <Movie>
                <img src={props.img} alt={props.name} />
            </Movie>
            <Texts>
                <h3>{props.name} <br />
                {props.day && props.hour !== undefined ? `${props.day} - ${props.hour}` : ""}
                </h3>
            </Texts>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    position:fixed;
    bottom: 0;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    padding:12px;
    gap: 15px ;
`
const Movie = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display:flex;
    align-items: center;
    justify-content:center;
    cursor:pointer;

    img{
        width: 48px;
        height: 72px;
    }&:hover{
        opacity: 1;
      }
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

        h3{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            line-height: 30px;
            color: #293845;
        }
`