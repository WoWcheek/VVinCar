import { FunctionComponent } from "react";
import styled from "styled-components";

interface Props extends React.PropsWithChildren {
    children: string;
    isActive?: boolean;
    onClick: VoidFunction;
}

const StyledSelectItem = styled.div`
    padding: 0.5rem;
    width: 6rem;

    text-align: center;
    font-size: 1.05rem;

    background-color: var(--color-dark--1);
    opacity: 0.8;

    cursor: pointer;

    transition: all 0.2s linear;

    &:hover {
        opacity: 0.9;
    }

    &.active {
        opacity: 1;
    }
`;

const SelectItem: FunctionComponent<Props> = ({
    children,
    isActive,
    onClick
}) => {
    return (
        <StyledSelectItem
            className={isActive ? "active" : ""}
            onClick={onClick}
        >
            {children}
        </StyledSelectItem>
    );
};

export default SelectItem;
