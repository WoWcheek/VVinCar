import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSearchOption } from "../../redux/appSlice.ts";
import SelectItem from "./SelectItem";

const StyledSelectRow = styled.div`
    display: flex;
    width: fit-content;

    border: 1px solid var(--color-light--1);
    border-radius: 20px;

    overflow: hidden;
`;

const SEARCH_OPTIONS = ["Number", "VIN", "Model", "Region", "Advanced"];

const SelectRow = () => {
    const dispatch = useDispatch();
    const { searchOption } = useSelector(state => state.app);

    const [option, setOption] = useState(searchOption);

    useEffect(() => {
        if (option !== searchOption) {
            dispatch(setSearchOption({ searchOption: option }));
        }
    }, [option, searchOption, dispatch]);

    return (
        <StyledSelectRow>
            {SEARCH_OPTIONS.map(o => (
                <SelectItem
                    isActive={option === o}
                    onClick={() => setOption(o)}
                    key={o}
                >
                    {o}
                </SelectItem>
            ))}
        </StyledSelectRow>
    );
};

export default SelectRow;
