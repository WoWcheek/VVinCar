import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import SearchPage from "../../pages/SearchPage";
import CardsPage from "../../pages/CardsPage";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container fluid style={{ margin: 0 }}>
                <Routes>
                    <Route index element={<SearchPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="cards" element={<CardsPage />} />
                    <Route path="*" element={<SearchPage />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default App;
