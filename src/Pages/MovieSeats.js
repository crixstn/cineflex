import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Loading from "../Constants/Loading";
import Colors from "../Constants/Colors";
import Form from "../Components/Form";

const { green, gray, yellow, greenBorder, grayBorder, yellowBorder } = Colors;
const seatsChoise = [];

function ChoiseSeats(props){
    const { status, number, id, ids, setIds } = props;

    const [color, setColor] = useState(gray)
    const [border, setBorder] = useState(grayBorder)
    const [selected, setSelected] = useState(false)

    if(status === false){
        return(
            <Seat data-test="seat"
                background={yellow}
                border={() => yellowBorder}
                onClick={() => alert("Esse assento não está disponivel :(")}
            >
                <span>{number}</span>
            </Seat>
        )
    }else if(status){
        return(
            <Seat data-test="seat"
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


    function ChangeColor(){
        if(selected === false){
            setColor(green);
            setBorder(greenBorder);
            seatsChoise.push(number)
        }else if(selected === true){
            setColor(gray);
            setBorder(grayBorder);
            Remove()
        }
    }

    function Remove(){
		for (let i=0; i<seatsChoise.length; i++){
			if (seatsChoise[i]===number)
				seatsChoise.splice(i,1)
		}
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

        <Subtitle>
                <span>
                    <Seat background={green} border={greenBorder}></Seat>
                    <p>Selecionado</p>
                </span>

                <span>
                    <Seat background={gray} border={grayBorder}></Seat>
                    <p>disponivel</p>
                </span>

                <span>
                    <Seat background={yellow} border={yellowBorder}></Seat>
                    <p>Indisponível</p>
                </span>
        </Subtitle>

        <Form
            ids={ids}
            setIdss={setIds}
            hour={seat.name}
            title={seat.movie.title}
            seatsChoise={seatsChoise}
            weekday={seat.day.weekday}
            day={seat.day.date}
        />

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
const Seats = styled.div`
    display:flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    gap: 20px 10px;
    flex-wrap: wrap;
    margin-bottom: 25px;
`
const Seat = styled.div`
    background: ${ props => props.background};
    border: 1px solid ${ props => props.border};
    border-radius: 12px;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
    }
`
const Subtitle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 60%;

    span{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p{
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            display: flex;
            text-align: center;
            color: #4E5A65;
        }
    }
`