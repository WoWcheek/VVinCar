import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import styled from "styled-components";

const MapButtonContainer = styled.div`
    position: absolute;
    bottom: 4.6rem;
    right: 10rem;

    button {
        font-weight: 600;
        color: darkblue !important;
    }
`;

const MapButton = () => {
    const navigate = useNavigate();

    return (
        <MapButtonContainer>
            <Button variant="warning" onClick={() => navigate("/map")}>
                Show on map
            </Button>
        </MapButtonContainer>
    );
};

export default MapButton;
