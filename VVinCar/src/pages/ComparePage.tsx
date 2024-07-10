import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CompareTable from "../components/AppLayout/CompareTable";
import BackButtonTable from "../components/Inputs/BackButtonTable";

const StyledComparePage = styled.div`
    display: flex;
    justify-content: center;
`;

const ComparePage = () => {
    const navigate = useNavigate();
    const { compare } = useSelector(state => state.app);

    useEffect(() => {
        if (compare.length !== 2) navigate(-1);
    }, [compare, navigate]);

    return (
        <StyledComparePage>
            <BackButtonTable />
            <CompareTable />
        </StyledComparePage>
    );
};

export default ComparePage;
