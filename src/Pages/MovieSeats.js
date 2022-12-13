import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Loading from "../Constants/Loading";
import Colors from "../Constants/Colors";

const { green, gray, yellow, greenBorder, grayBorder, yellowBorder } = Colors;

function ChoiseSeats(props){
    const { status, number, id, ids, setIds } = props;

    const [color, setColor] = useState(gray)
    const [border, setBorder] = useState(grayBorder)
    const [selected, setSelected] = useState(false)

    function ChangeColor(){
        if(color === gray){
            setColor(green);
            setBorder(greenBorder);
        }else if(color === green){
            setColor(gray);
            setBorder(grayBorder);
        }
    }

    if(status === false){
        return(
            <Seat
                background={yellow}
                border={() => yellowBorder}
                onClick={() => alert("Esse assento não está disponivel :(")}
            >
                <span>{number}</span>
            </Seat>
        )
    }else if(status === true){
        return(
            <Seat
                background={color}
                border={() => border}
                onClick={() => {
                    setSelected(!selected);
                    ChangeColor();
                    setIds([...ids, id]);
                }}
            >
                <span>{number}</span>
            </Seat>
        )
    }

}


export default function MovieSeats(){
    const {idSection} = useParams()
    const [seat, setSeat] = useState(undefined)
    const [ids, setIds]  = useState([])

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSection}/seats`;
        const promise = axios.get(URL);
        promise.then(r => setSeat(r.data))
        promise.catch(e => alert(e.response.data))
    }, [idSection])

    if (seat === undefined) {
        return <Loading/>
      }

      
    return(
    <SeatPage>
        <h2>Selecione o(s) assento(s) </h2>
        <Seats>
            {seat?.seats.map((value, index) => (
                <ChoiseSeats key={index} 
                status={value.isAvailable}
                number={value.name}
                id={value.id}
                ids={ids}
                setIds={setIds}
                >
                </ChoiseSeats>
            ))}
        </Seats>
        <Footer key={seat.id} img={seat.movie.posterURL} name={seat.movie.title} day={seat.day.weekday} hour={seat.name}/>
    </SeatPage>
    )
}

const SeatPage = styled.div`
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
const Seats = styled.ul`
    display:flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    gap: 20px 10px;
    flex-wrap: wrap;
`
const Seat = styled.li`
    background: ${ props => props.background};
    border: 1px solid ${ props => props.border};
    border-radius: 12px;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
    }
`