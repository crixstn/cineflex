import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Constants/Loading";
import Footer from "../Components/Footer";

export default function MovieSection(){
    const {idMovie} = useParams()
    const [section, setSection] = useState(undefined)
   
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`;
        const promise = axios.get(URL);
        promise.then(r => setSection(r.data))
        promise.catch(e => alert(e.response.data))
    }, [idMovie])

    if (section === undefined) {
        return <Loading/> 
      }

    return(
        <SectionPage>
             <h2>Selecione o horário</h2>
             {section?.days.map(s =>(
             <Days key={s.id}>
                <p>{s.weekday} - {s.date}</p>
                <Options>
                    {s.showtimes.map(st => (
                        <Link to = {`/MovieSeats/${st.id}`}>
                            <div key = {st.id}>
                               <p>{st.name}</p>
                            </div>
                        </Link>
                    ))}
                </Options>
             </Days>))}
             <Footer key={section.id} img={section.posterURL} name={section.title}/>
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

const Days = styled.div`
        display: flex;
        flex-direction: column;
        margin: auto;
        width:80%;
        justify-content:flex-start;

        p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #293845;
        }
        div{

        }

`
const Options = styled.div`
        display: flex;
        gap: 10px;

        div, a{
            width: 83px;
            height: 43px;
            background: #E8833A;
            border-radius: 3px;
            display:flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0;
            cursor:pointer;
            text-decoration: none;

           p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            color: white;
            text-align: center;
           }
        }
`
