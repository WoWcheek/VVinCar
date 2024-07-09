import { API_URL, requestConfig } from "../data/constants";

export const fetchRegionsAndFuels = async () => {
    const resp = await fetch(`${API_URL}/plate_fields`, requestConfig);
    const json = await resp.json();

    return {
        fuels: json.fuels,
        regions: json.regions
    };
};
