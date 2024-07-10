import { FC } from "react";
import styled from "styled-components";
import { formatUah } from "../../helpers/stringFunctions";
import CardCheckBox from "./CardCheckBox";

const StyledCard = styled.div`
    height: fit-content;
    width: 350px;

    padding: 10px 20px;
    margin-bottom: 30px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-dark--1);
    border: 1px solid var(--color-light--2);
    border-radius: 10px;

    h2 {
        font-size: 1.8rem;
        color: var(--color-light--1);
        text-align: center;
        letter-spacing: 2px;
    }

    img {
        width: 100%;
        margin: 10px 0;

        border-radius: 10px;
    }
`;

const StyledInfo = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    font-size: 1.3rem;
`;

interface Car {
    vendor: string;
    model: string;
    img: string;
    kind: string;
    year: string;
    fuel: string;
    price: number;
    weight: string;
    region: string;
    registered: string;
}

interface CardProps {
    car: Car;
}

const Card: FC<CardProps> = ({ car }) => {
    return (
        <StyledCard>
            <CardCheckBox value={`${car.vendor} ${car.model}`} />
            <h2>{`${car.vendor} ${car.model}`}</h2>
            <img src={car?.img} />
            <StyledInfo>
                {car.kind && <p>Type: {car.kind}</p>}
                {car.year && <p>Model year: {car.year}</p>}
                {car.fuel && <p>Fuel type: {car.fuel}</p>}
                {car.weight && <p>Car weight: {car.weight} kg</p>}
                {car.registered && <p>Registered at: {car.registered}</p>}
                {car.price && <p>Average price: {formatUah(car.price)}</p>}
            </StyledInfo>
        </StyledCard>
    );
};

export default Card;
