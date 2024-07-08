import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const SearchForm = () => {
    const { searchOption } = useSelector(state => state.app);

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
            {inputFields.map(field => (
                <Form.Group className="mb-3" controlId={field}>
                    <Form.Label>{field}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder={`Enter ${field.toLowerCase()}...`}
                    />
                </Form.Group>
            ))}
            <Button
                style={{
                    backgroundColor: "var(--color-dark--1)",
                    border: "1px solid black"
                }}
                onClick={() => console.log("clicked")}
            >
                Search
            </Button>
        </Form>
    );
};

export default SearchForm;
