import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { setRegionsAndFuels } from "../../redux/appSlice";
import { fetchRegionsAndFuels } from "../../helpers/fetchInfo";
import Header from "./Header";
import MapPage from "../../pages/MapPage";
import CardsPage from "../../pages/CardsPage";
import SearchPage from "../../pages/SearchPage";
import ComparePage from "../../pages/ComparePage";
import AdvancedCardsPage from "../../pages/AdvancedCardsPage";

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
                    <Route path="compare" element={<ComparePage />} />
                    <Route path="*" element={<SearchPage />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
