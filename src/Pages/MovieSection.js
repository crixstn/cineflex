import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingGif from "../Assets/loading.gif"

export default function MovieSection(){
    const {idMovie} = useParams()
    const [section, setSection] = useState(undefined)
   
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`;
        const promise = axios.get(URL);
        promise.then(r => setSection(r.data))
        promise.catch(e => alert(e.response.data))
    }, [])

    if (section === undefined) {
        return (<Loading> 
                    <img src={LoadingGif} alt="Loading Gif"/> 
                </Loading>
            )
      }

    return(
        <SectionPage>
             <h2>Selecione o horário</h2>
        </SectionPage>
    )
}

const SectionPage = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

        h2{
            font-family: 'Roboto';
            margin:117px 0 50px 0;
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            color: #293845;
        }
`

const Loading = styled.div`
      width: 100%;
      margin-top:15%;
      display: flex;
      align-itens: center;
      justify-content: center;
      img{
        height: 100px;
      }
`