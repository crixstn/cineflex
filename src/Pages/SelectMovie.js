import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Constants/Loading";

export default function SelectMovie(){
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promise.then((r) => setMovies(r.data))
        promise.catch((e) => alert(e.response.data))
      }, [])

    if (movies === undefined) {
        return <Loading/> 
      }

    return(
        <Mainpage>
            <h2>Selecione o Filme</h2>
            <Movies>
                {movies?.map(m => (
                    <Link to={`/MovieSection/${m.id}`}>
                        <Movie data-test="movie" key={m.id}>
                            <img src={m.posterURL} alt={m.title}/>
                            <div>
                                <h3>{m.overview}</h3>
                            </div>
                        </Movie>
                    </Link>
                ))}
            </Movies>
        </Mainpage>
    )
}

const Mainpage = styled.div`
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
const Movies = styled.ul`
    display:flex;
    width: 80%;
    justify-content:center;
    flex-wrap: wrap;
    gap: 15px 20px;
`

const Movie = styled.li`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display:flex;
    align-items: center;
    justify-content:center;
    cursor:pointer;
    position:relative;

    img{
        width: 129px;
        height: 193px;
    }&:hover{
        opacity: 1;
      }

      div {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, .9), rgba(0, 0, 0, .3) 100%);
        padding: 15px;
        color: white;
        display: flex;
        align-items: center;
        justify-content:center;
        h3{
        font-size: 60%;
          font-family: 'Roboto';  
          text-shadow: 1px 1px 4px 3px rgba(0, 0, 0, 1);
          text-align:center;
          line-height: 10px;
        }
        &:hover{
          opacity: 1;
        }
      } 
`