import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header(){
    return(
        <HeaderStyle>
            <Link to="/">
                <h1> CINEFLEX </h1>
            </Link>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    width: 100%;
    height: 67px;
    background: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
        h1, a{
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 34px;
            line-height: 40px;
            color: #E8833A;
            text-align:center;
           text-decoration: none;
        }
`
