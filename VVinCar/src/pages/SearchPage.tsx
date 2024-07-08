import styled from "styled-components";
import SelectRow from "../components/Inputs/SelectRow";
import SearchForm from "../components/Forms/SearchForm";

const StyledSearchPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;

    padding-top: 2rem;

    min-height: 80dvh;
`;

const SearchPage = () => {
    return (
        <StyledSearchPage>
            <SelectRow />
            <SearchForm />
        </StyledSearchPage>
    );
};

export default SearchPage;
