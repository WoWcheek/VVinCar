import { NavLink } from "react-router-dom";
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

const Header = () => {
    return (
        <StyledHeader>
            <NavLink to="search">
                <FaSearch />
                Search
            </NavLink>
            <NavLink to="compare">
                <MdCompare />
                Compare
            </NavLink>
        </StyledHeader>
    );
};

export default Header;
