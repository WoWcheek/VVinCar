import { useRef } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../../redux/appSlice";
import { capitalize } from "../../helpers/stringFunctions";
import { fetchCarsAdvanced } from "../../helpers/fetchCars";
import { useNavigate } from "react-router";

const optionStyle = {
    color: "var(--color-dark--2)"
};

const AdvancedForm = () => {
    const fuelRef = useRef(null);
    const brandRef = useRef(null);
    const modelRef = useRef(null);
    const regionRef = useRef(null);
    const yearToRef = useRef(null);
    const yearFromRef = useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { regions, fuels } = useSelector(state => state.app);

    const handleSearch = async e => {
        e.preventDefault();

        const yearToNum = Number(yearToRef.current.value);
        const yearFromNum = Number(yearFromRef.current.value);

        if (yearToNum && yearToNum && yearToNum <= yearFromNum) return;

        const cars = await fetchCarsAdvanced({
            fuel: fuelRef.current.value,
            brand: brandRef.current.value,
            model: modelRef.current.value,
            region: regionRef.current.value,
            yearTo: yearToRef.current.value,
            yearFrom: yearFromRef.current.value
        });

        console.log(cars);

        dispatch(setCars({ cars }));

        navigate("/advancedCards");
    };

    return (
        <Form style={{ width: "clamp(10rem, 50%, 30rem)", marginTop: "-2rem" }}>
            <h3 className="mb-3">Lets look for a car you need</h3>
            <Row>
                <Form.Group className="mb-4 w-50">
                    <Form.Label>From year</Form.Label>
                    <Form.Control
                        type="number"
                        min={1900}
                        placeholder="Enter year from..."
                        ref={yearFromRef}
                    />
                </Form.Group>
                <Form.Group className="mb-4 w-50">
                    <Form.Label>To year</Form.Label>
                    <Form.Control
                        type="number"
                        min={1900}
                        placeholder="Enter year to..."
                        ref={yearToRef}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-4 w-50">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter brand..."
                        ref={brandRef}
                    />
                </Form.Group>
                <Form.Group className="mb-4 w-50">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter model..."
                        ref={modelRef}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-4 w-100">
                    <Form.Label>Fuel type</Form.Label>
                    <Form.Select ref={fuelRef}>
                        <option style={optionStyle}></option>
                        {fuels.map(fuel => (
                            <option
                                key={fuel.title.ua}
                                style={optionStyle}
                                value={fuel.id}
                            >
                                {capitalize(fuel.title.ua)}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-4 w-100">
                    <Form.Label>Region</Form.Label>
                    <Form.Select ref={regionRef}>
                        <option style={optionStyle}></option>
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
                        ))}{" "}
                    </Form.Select>
                </Form.Group>
            </Row>
            <Button
                style={{
                    backgroundColor: "var(--color-dark--1)",
                    border: "1px solid black"
                }}
                onClick={handleSearch}
                className="mt-2"
            >
                Search
            </Button>
        </Form>
    );
};

export default AdvancedForm;
