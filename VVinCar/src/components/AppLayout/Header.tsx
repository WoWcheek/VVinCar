import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdCompare } from "react-icons/md";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 7dvh;

    background-color: var(--color-dark--1);

    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;

    a {
        display: flex;
        gap: 0.2rem;
        align-items: center;

        color: var(--color-light--2);
        text-decoration: none;
        font-size: 1.2rem;
        letter-spacing: 1px;
    }
`;

const CompareCount = styled.div`
    height: 1.85rem;
    width: 1.85rem;

    margin-left: 0.8rem;

    text-align: center;

    border-radius: 50%;
    background-color: var(--color-light--2);
    color: darkblue;
    opacity: 0.5;
`;

const Header = () => {
    const { compare } = useSelector(state => state.app);
    const { pathname } = useLocation();

    return (
        <StyledHeader>
            <NavLink to="search">
                <FaSearch />
                Search
            </NavLink>
            <NavLink to={compare.length === 2 ? "compare" : pathname}>
                <MdCompare />
                Compare
                <CompareCount>{compare.length}</CompareCount>
            </NavLink>
        </StyledHeader>
    );
};

export default Header;
