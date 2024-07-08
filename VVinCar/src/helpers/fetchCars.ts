import { API_URL, KEY } from "../data/constants";

const requestConfig = {
    headers: { Accept: "application/json", "X-Api-Key": KEY }
};

const fetchCarsWithOperations = async (endpoint: string) => {
    const resp = await fetch(`${API_URL}/${endpoint}`, requestConfig);
    const json = await resp.json();

    const cars = [];
    for (const car of json.operations) {
        const resp = await fetch(
            `${API_URL}/make/${car.vendor.toLowerCase()}/${car.model.toLowerCase()}`,
            requestConfig
        );
        const json = await resp.json();
        cars.push({
            img: json.catalog_model.photo_url,
            model: car.model,
            vendor: car.vendor,
            kind: car.kind.slug,
            fuel: car.fuel.slug,
            year: car.model_year,
            region: car.address,
            weight: car.total_weight,
            registered: car.registered_at
        });
    }

    return cars;
};

export const fetchCarsByNumber = (number: string) =>
    fetchCarsWithOperations(`nomer/${number}`);

export const fetchCarsByVin = async (vin: string) =>
    fetchCarsWithOperations(`vin/${vin}`);

export const fetchCarsByBrandAndModel = async (
    brand: string,
    model: string
) => {
    const resp = await fetch(`${API_URL}/${endpoint}`, requestConfig);
    const json = await resp.json();

    const cars = [];
    for (const car of json.operations) {
        const resp = await fetch(
            `${API_URL}/make/${car.vendor.toLowerCase()}/${car.model.toLowerCase()}`,
            requestConfig
        );
        const json = await resp.json();
        cars.push({
            img: json.catalog_model.photo_url,
            model: car.model,
            vendor: car.vendor,
            kind: car.kind.slug,
            fuel: car.fuel.slug,
            year: car.model_year,
            region: car.address,
            weight: car.total_weight,
            registered: car.registered_at
        });
    }

    return cars;
};
