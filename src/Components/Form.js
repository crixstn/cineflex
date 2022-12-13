import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Form(props){
    const {ids, setIds, hour, title, number, weekday, day, seatsChoise} = props;

    const [name, setName] = useState("");
    const [cpf, setCPF] = useState("");

    const navigate = useNavigate();


    function fillForm(e){
        e.preventDefault();

        let reservation = 
        {ids, 
        name, 
        cpf};

        let tickets = { ...reservation, title, day, hour, seatsChoise};

       
        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', reservation);
        promise.then(() => navigate("/Finish", {state: {tickets}}));
        promise.catch(e => alert(`Ocorreu um erro: ${e.response.data}`));
    }

    return(
            <form onSubmit={fillForm}>
                <FormLayout>
                <label htmlFor='Nome do comprador'> Nome do Comprador: </label>
                <input data-test="client-name" type="text" 
                    placeholder='Digite seu nome...'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />

                <label htmlFor="CPF do comprador"> CPF do comprador: </label>
                    <input data-test="client-cpf" type="number"
                    placeholder="Digite seu CPF..."
                    onChange={(e) => setCPF(e.target.value)}
                    value={cpf}
                    required
                />

                <button data-test="book-seat-btn" type="submit" > Reservar assento(s) </button>
                </FormLayout>
            </form>
    )
}

const FormLayout = styled.div`
    display: flex;
    flex-direction: column;
    margin: 45px auto 147px auto;
    align-itens: center;
    width:70%;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    label {
        width: 327px;
        height: 25px;
        font-style: normal;
        display: flex;
        align-items: center;
    }

    input {
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-style: italic;
        padding: 10px;
       
        display: flex;
        align-items: center;
        justify-: center;
        color: #AFAFAF;
        margin-bottom: 7px;
    }

    button {
        width: 80%;
        height: 42px;
        margin: 50px auto 0 auto;
        background: #E8833A;
        border-radius: 3px;

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
    }

`