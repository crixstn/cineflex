import LoadingGif from "../Assets/loading.gif"
import styled from "styled-components"

export default function Loading(){
    return(
        <LoadingStyle> 
            <img src={LoadingGif} alt="Loading Gif"/> 
        </LoadingStyle>
    )
}

const LoadingStyle = styled.div`
      width: 100%;
      margin-top:15%;
      display: flex;
      align-itens: center;
      justify-content: center;
      img{
        height: 100px;
      }
`