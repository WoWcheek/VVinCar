import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { setRegionsAndFuels } from "../../redux/appSlice";
import { fetchRegionsAndFuels } from "../../helpers/fetchInfo";
import Header from "./Header";
import CardsPage from "../../pages/CardsPage";
import SearchPage from "../../pages/SearchPage";
import AdvancedCardsPage from "../../pages/AdvancedCardsPage";
import MapPage from "../../pages/MapPage";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRegionsAndFuels().then(res => dispatch(setRegionsAndFuels(res)));
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Header />
            <Container fluid style={{ margin: 0 }}>
                <Routes>
                    <Route index element={<SearchPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="cards" element={<CardsPage />} />
                    <Route
                        path="advancedCards"
                        element={<AdvancedCardsPage />}
                    />
                    <Route path="map" element={<MapPage />} />
                    <Route path="*" element={<SearchPage />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
