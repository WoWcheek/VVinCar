import { API_URL, requestConfig } from "../data/constants";
import { removeLastChar } from "./stringFunctions";

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
    const resp = await fetch(
        `${API_URL}/make/${brand.toLowerCase()}/${model.toLowerCase()}`,
        requestConfig
    );
    const json = await resp.json();

    console.log(json);

    const car = {
        img: json.catalog_model.photo_url,
        model: json.full_title,
        vendor: "",
        year: json.catalog_model.year_from,
        price: Number(json.catalog_model.price_avg)
    };

    return [car];
};

export const fetchCarsByRegion = async (region: string) => {
    const resp = await fetch(
        `${API_URL}/search?region=${region}`,
        requestConfig
    );
    const json = await resp.json();

    const cars = [];
    for (const car of json.plates) {
        try {
            const resp = await fetch(
                `${API_URL}/make/${car.vendor.toLowerCase()}/${car.model.toLowerCase()}`,
                requestConfig
            );
            const json = await resp.json();

            if (!json.catalog_model.photo_url) continue;

            cars.push({
                img: json.catalog_model.photo_url,
                model: car.model,
                vendor: car.vendor,
                digits: car.digits,
                year: car.model_year,
                registered: car.registered_at
            });
        } catch {}
    }

    return cars;
};

export const fetchCarsAdvanced = async (params: object) => {
    let query = "?";

    if (params.fuel) query += `fuel=${params.fuel}&`;
    if (params.region) query += `region=${params.region}&`;
    if (params.brand) query += `vendor=${params.brand.toLowerCase()}&`;
    if (params.model) query += `catalog_model=${params.model.toLowerCase()}&`;
    if (params.yearTo) query += `year_to=${params.yearTo.toLowerCase()}&`;
    if (params.yearFrom) query += `year_from=${params.yearFrom.toLowerCase()}&`;

    query = removeLastChar(query);

    const resp = await fetch(`${API_URL}/search${query}`, requestConfig);
    const json = await resp.json();

    const cars = [];
    for (const car of json.plates) {
        try {
            const resp = await fetch(
                `${API_URL}/make/${car.vendor.toLowerCase()}/${car.model.toLowerCase()}`,
                requestConfig
            );
            const json = await resp.json();

            if (!json.catalog_model.photo_url) continue;

            cars.push({
                img: json.catalog_model.photo_url,
                model: car.model,
                vendor: car.vendor,
                digits: car.digits,
                year: car.model_year,
                registered: car.registered_at
            });
        } catch {}
    }

    return cars;
};
