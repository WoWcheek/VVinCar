import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import styled from "styled-components";

const BackButtonContainer = styled.div`
    position: absolute;
    top: 6.5rem;
    left: 6.5rem;

    button {
        font-weight: 600;
        color: darkblue !important;
    }
`;

const BackButtonTable = () => {
    const navigate = useNavigate();

    return (
        <BackButtonContainer>
            <Button variant="warning" onClick={() => navigate(-1)}>
                ← Back
            </Button>
        </BackButtonContainer>
    );
};

export default BackButtonTable;
