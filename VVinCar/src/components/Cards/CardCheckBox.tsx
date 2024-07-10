import { FormCheck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToCompare, removeFromCompare } from "../../redux/appSlice";

const StyledCardCheckBox = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

const CardCheckBox = ({ value }) => {
    const dispatch = useDispatch();
    const { compare } = useSelector(state => state.app);

    const isValueInCompare = compare.includes(value);

    return (
        <StyledCardCheckBox>
            <FormCheck
                checked={isValueInCompare}
                onChange={() => {
                    dispatch(
                        isValueInCompare
                            ? removeFromCompare(value)
                            : addToCompare(value)
                    );
                }}
            />
        </StyledCardCheckBox>
    );
};

export default CardCheckBox;
