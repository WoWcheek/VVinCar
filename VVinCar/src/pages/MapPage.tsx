import Ukraine from "@react-map/ukraine";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { regionIdFromSlug } from "../helpers/stringFunctions";

const MapContainer = styled.div`
    padding-top: 10rem;
    padding-left: 3rem;

    display: flex;
    justify-content: center;

    .map {
        height: 400px;
        overflow: hidden;
    }
`;

const MapPage = () => {
    const navigate = useNavigate();
    const { cars, searchOption } = useSelector(state => state.app);

    if (!["Number", "VIN"].includes(searchOption) || cars.length === 0)
        navigate("/");

    useEffect(() => {
        const paths = Array.from(document.getElementsByTagName("path")).filter(
            x => x.id
        );

        cars.forEach(car => {
            const region = regionIdFromSlug(car.region);

            paths.forEach(path => {
                if (path.id.replace("'", "") === region)
                    path.style.fill = "red";
            });
        });
    }, [cars]);

    return (
        <MapContainer>
            <Ukraine type="select-multiple" hints={true} size={600} />
        </MapContainer>
    );
};

export default MapPage;
