import { useSelector } from "react-redux";
import Pagimagic from "react-pagimagic";
import styled from "styled-components";
import Card from "../components/Cards/Card";

const StyledCardsPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.5rem;

    .Pagimagic__nav {
        display: flex;
        justify-content: center;
    }

    .Pagimagic__nav-item {
        text-decoration: none;
        font-size: 1.1rem;
        color: var(--color-light--1) !important;

        opacity: 0.8;
        border: 1px solid var(--color-light--1) !important;
        background-color: var(--color-dark--1) !important;
    }

    .Pagimagic__nav-item--active {
        opacity: 1;
        color: var(--color-light--2) !important;
    }
`;

const CardsPage = () => {
    const { cars } = useSelector(state => state.app);

    return (
        <StyledCardsPage>
            <Pagimagic
                list={cars}
                itemsPerPage={1}
                currentPageIndex={0}
                maximumVisiblePaginators={5}
                renderChildren={car => <Card car={car[0]} />}
                useDefaultStyles
            />
        </StyledCardsPage>
    );
};

export default CardsPage;
