import { Link, useLocation} from "react-router-dom";
import styled from "styled-components";

export default function Finish(){
   const location = useLocation();
   const infos = location.state.tickets;

   const {cpf, name, title,  hour, day, weekday, seatsChoise} = infos

   return(
        <FinishPage>
            <h2>Pedido feito <br/> com sucesso!</h2>
            <Infos>
                <h3>Filme e sessão</h3>
                <p>{title}</p>
                <p>{day} - {hour}</p>

                <h3>Ingressos</h3>
                {seatsChoise.map((value,index) => (<p key={index}> Assento {value} </p>))}

                <h3>Comprador</h3>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </Infos>

            <Link to="/">
                <HomeButtom>
                   <p>  Voltar para Home </p>
                </HomeButtom>
            </Link>

        </FinishPage>
   )
}

const FinishPage = styled.div`
    display:flex;
    flex-direction: column;

    h2{
        font-family: 'Roboto';
        margin:117px auto 50px auto;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #247A6B;
        text-align: center;
    }
`
const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start ;
    margin-left: 50px;

    h3 {
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        font-weight: 400;
        font-size: 22px;
    }

`

const HomeButtom = styled.div`
    width: 50%;
    height: 42px;

    background: #E8833A;
    border-radius: 3px;
    align-items: center;

    display: flex;
    justify-content: center;

    color: #FFFFFF;
    margin: 50px auto 0 auto;

    p, a{
    text-decoration: none;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    }
`