import { useSelector } from "react-redux";
import Pagimagic from "react-pagimagic";
import styled from "styled-components";
import Card from "../components/Cards/Card";
import MapButton from "../components/Inputs/MapButton";

const StyledCardsPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.5rem;

    .Pagimagic {
        display: flex !important;
        flex-direction: column;
        align-items: center;
    }

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
    const { cars, searchOption } = useSelector(state => state.app);

    return (
        <StyledCardsPage>
            {cars.length > 0 ? (
                <Pagimagic
                    list={cars}
                    itemsPerPage={1}
                    currentPageIndex={0}
                    maximumVisiblePaginators={5}
                    renderChildren={car => <Card car={car[0]} />}
                    useDefaultStyles
                />
            ) : (
                <h2>No cars to show...</h2>
            )}
            {cars.length > 0 && ["Number", "VIN"].includes(searchOption) && (
                <MapButton />
            )}
        </StyledCardsPage>
    );
};

export default CardsPage;
