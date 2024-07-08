import { useSelector } from "react-redux";
import Pagimagic from "react-pagimagic";
import styled from "styled-components";
import AdvancedCard from "../components/Cards/AdvancedCard";

const StyledCardsPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2.5rem;

    .Pagimagic__nav {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Pagimagic__nav-item {
        text-decoration: none;
        font-size: 1.1rem;
        color: var(--color-light--1) !important;

        opacity: 0.8;
        border: 1px solid var(--color-light--1) !important;
        background-color: var(--color-dark--1) !important;
    }

    .Pagimagic-nav-arrow {
        height: 2rem !important;
        width: 2rem !important;

        margin-left: calc(50% - 1rem);
        margin-top: calc(50% - 1rem);

        filter: brightness(0) invert(1);
    }

    .Pagimagic__nav-item--active {
        opacity: 1;
        color: var(--color-light--2) !important;
    }
`;

const AdvancedCardsPage = () => {
    const { cars } = useSelector(state => state.app);

    return (
        <StyledCardsPage>
            <Pagimagic
                list={cars}
                itemsPerPage={1}
                currentPageIndex={0}
                maximumVisiblePaginators={5}
                renderChildren={car => <AdvancedCard car={car[0]} />}
                useDefaultStyles
            />
        </StyledCardsPage>
    );
};

export default AdvancedCardsPage;
