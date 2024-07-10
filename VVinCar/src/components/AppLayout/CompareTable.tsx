import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatUah } from "../../helpers/stringFunctions";
import { fetchCarsByBrandAndModelAdvanced } from "../../helpers/fetchCars";

const StyledTable = styled.table`
    width: 70%;
    margin-top: 3rem;
    border-collapse: collapse;

    color: var(--color-light--1);
    font-size: 1rem;
    text-align: center;

    thead tr {
        background-color: var(--color-dark--1);

        font-size: 1.35rem;
        font-weight: bold;
    }

    th,
    td {
        padding: 12px 15px;
        border: 2px solid var(--color-light--1);
    }

    tbody tr {
        font-size: 1.1rem;
        border-bottom: 1px solid var(--color-light--1);

        td:first-child {
            text-align: left;
            font-size: 1.35rem;
        }
    }

    tbody tr:nth-of-type(even) {
        background-color: var(--color-dark--1);
        opacity: 0.8;
    }

    /* tbody tr:hover {
        opacity: 0.8;
    } */

    img {
        width: 150px;
        height: auto;
    }
`;
const CompareTable = () => {
    const { compare } = useSelector(state => state.app);
    const [car1, setCar1] = useState({});
    const [car2, setCar2] = useState({});

    useEffect(() => {
        const splitCar1 = compare[0].split(" ");
        const splitCar2 = compare[1].split(" ");

        fetchCarsByBrandAndModelAdvanced(
            splitCar1[0],
            splitCar1.filter((_, i) => i !== 0).join("-")
        ).then(setCar1);

        fetchCarsByBrandAndModelAdvanced(
            splitCar2[0],
            splitCar2.filter((_, i) => i !== 0).join("-")
        ).then(setCar2);
    }, [compare]);

    if (!car1?.fullTitle || !car2?.fullTitle) return null;

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th></th>
                    <th>First Car</th>
                    <th>Second Car</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Image</td>
                    <td>
                        <img src={car1.img} alt={car1.fullTitle} width="100" />
                    </td>
                    <td>
                        <img src={car2.img} alt={car2.fullTitle} width="100" />
                    </td>
                </tr>
                <tr>
                    <td>Full Title</td>
                    <td>{car1.fullTitle}</td>
                    <td>{car2.fullTitle}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>
                        {car1.description?.length > 0
                            ? car1.description
                            : "---"}
                    </td>
                    <td>
                        {car2.description?.length > 0
                            ? car2.description
                            : "---"}
                    </td>
                </tr>
                <tr>
                    <td>Plate Count</td>
                    <td>{car1.plateCount}</td>
                    <td>{car2.plateCount}</td>
                </tr>
                <tr>
                    <td>Min Price</td>
                    <td>
                        {car1.minPrice === 0 ? "---" : formatUah(car1.minPrice)}
                    </td>
                    <td>
                        {car2.minPrice === 0 ? "---" : formatUah(car2.minPrice)}
                    </td>
                </tr>
                <tr>
                    <td>Average Price</td>
                    <td>
                        {car1.averagePrice === 0
                            ? "---"
                            : formatUah(car1.averagePrice)}
                    </td>
                    <td>
                        {car2.averagePrice === 0
                            ? "---"
                            : formatUah(car2.averagePrice)}
                    </td>
                </tr>
                <tr>
                    <td>Max Price</td>
                    <td>
                        {car1.maxPrice === 0 ? "---" : formatUah(car1.maxPrice)}
                    </td>
                    <td>
                        {car2.maxPrice === 0 ? "---" : formatUah(car2.maxPrice)}
                    </td>
                </tr>
            </tbody>
        </StyledTable>
    );
};

export default CompareTable;
