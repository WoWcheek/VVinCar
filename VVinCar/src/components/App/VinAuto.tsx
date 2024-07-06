import { useState } from 'react';
import ReactPaginate from 'react-paginate';

interface Car {
    model: string;
    description: string;
    // Добавьте другие поля, если они есть в ответе API
}

type PageClickEvent = {
    selected: number;
};

function SearchVIN() {
    const [vin, setVin] = useState('');
    const [data, setData] = useState<Car[]>([]); // Теперь data типизирован как массив объектов Car
    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 1;

    function handlePageClick({ selected: selectedPage }: PageClickEvent) {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;
    const currentPageData = data.slice(offset, offset + PER_PAGE);
    const pageCount = Math.ceil(data.length / PER_PAGE);

    const searchVin = async () => {
        const response = await fetch(`https://baza-gai.com.ua/api/?key=5890dd555c71190ad5f04e5ecc93a146&vin=${vin}`);
        const jsonData = await response.json();
        setData(jsonData.cars); // Предположим, что jsonData.cars - это массив объектов Car
    };

    return (
        <div>
            <input
                type="text"
                value={vin}
                onChange={e => setVin(e.target.value)}
                placeholder="Введите VIN"
            />
            <button onClick={searchVin}>Поиск</button>
            {currentPageData.map((car: Car, index: number) => (
                <div key={index}>
                    <h3>{car.model}</h3>
                    <p>{car.description}</p>
                    {/* Другая информация об авто */}
                </div>
            ))}
            <ReactPaginate
                previousLabel={"← Предыдущая"}
                nextLabel={"Следующая →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
        </div>
    );
}

export default SearchVIN;
