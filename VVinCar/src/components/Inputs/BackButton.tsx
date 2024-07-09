import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import styled from "styled-components";

const BackButtonContainer = styled.div`
    position: absolute;
    top: 4.6rem;
    left: 10rem;

    button {
        font-weight: 600;
        color: darkblue !important;
    }
`;

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <BackButtonContainer>
            <Button variant="warning" onClick={() => navigate(-1)}>
                ← Back
            </Button>
        </BackButtonContainer>
    );
};

export default BackButton;
