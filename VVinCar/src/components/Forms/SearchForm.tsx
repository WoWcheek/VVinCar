import { useRef } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { setCars } from "../../redux/appSlice";
import {
    fetchCarsByBrandAndModel,
    fetchCarsByNumber,
    fetchCarsByRegion,
    fetchCarsByVin
} from "../../helpers/fetchCars";
import { capitalize } from "../../helpers/stringFunctions";
import AdvancedForm from "./AdvancedForm";

const optionStyle = {
    color: "var(--color-dark--2)"
};

const SearchForm = () => {
    const dispatch = useDispatch();
    const refs = [useRef(null), useRef(null)];

    const navigate = useNavigate();
    const { searchOption, regions } = useSelector(state => state.app);

    if (searchOption === "Advanced") {
        return <AdvancedForm />;
    }

    const handleSearch = async e => {
        e.preventDefault();

        let cars = [{}];

        if (searchOption === "Region") {
            cars = await fetchCarsByRegion(refs[0].current.value);

            dispatch(setCars({ cars }));
            navigate("/advancedCards");
            return;
        }

        if (searchOption === "Number") {
            cars = await fetchCarsByNumber(refs[0].current.value);
        } else if (searchOption === "VIN") {
            cars = await fetchCarsByVin(refs[0].current.value);
        } else if (searchOption === "Model") {
            cars = await fetchCarsByBrandAndModel(
                refs[0].current.value,
                refs[1].current.value
            );
        }

        dispatch(setCars({ cars }));
        navigate("/cards");
    };

    const inputFields =
        searchOption === "Number"
            ? ["Car number"]
            : searchOption === "VIN"
            ? ["VIN number"]
            : searchOption === "Model"
            ? ["Car brand", "Car model"]
            : searchOption === "Region"
            ? ["Region"]
            : [];

    return (
        <Form style={{ width: "clamp(10rem, 50%, 30rem)" }}>
            <h3 className="mb-5">Lets look for a car you need</h3>
            {inputFields.map((field, i) => (
                <Form.Group className="mb-4" controlId={field} key={field}>
                    <Form.Label>{field}</Form.Label>
                    {field === "Region" ? (
                        <Form.Select ref={refs[i]}>
                            {regions.map((reg, i) => (
                                <option
                                    key={reg.name.ua}
                                    style={optionStyle}
                                    value={reg.slug}
                                >
                                    {i === 0
                                        ? reg.name.ua
                                        : capitalize(reg.name.ua)}
                                </option>
                            ))}
                        </Form.Select>
                    ) : (
                        <Form.Control
                            type="text"
                            placeholder={`Enter ${field.toLowerCase()}...`}
                            ref={refs[i]}
                        />
                    )}
                </Form.Group>
            ))}
            <Button
                style={{
                    backgroundColor: "var(--color-dark--1)",
                    border: "1px solid black"
                }}
                onClick={handleSearch}
                className="mt-3"
            >
                Search
            </Button>
        </Form>
    );
};

export default SearchForm;
