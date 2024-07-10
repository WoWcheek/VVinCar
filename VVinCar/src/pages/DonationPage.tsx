import styled from "styled-components";
import { MAX_SEARCH_COUNT } from "../data/constants";
import { useSelector } from "react-redux";

const StyledDonationPage = styled.div`
    margin-top: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 2.2rem;
    }

    h3 {
        font-size: 2.1rem;
        text-decoration: underline double;
    }

    .container {
        margin-top: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            gap: 1rem;
        }

        a {
            font-size: 2rem;
            color: var(--color-light--2);
        }
    }
`;

const DonationPage = () => {
    const { searchCount } = useSelector(state => state.app);

    return (
        <StyledDonationPage>
            {searchCount >= MAX_SEARCH_COUNT && (
                <h2>Limit of {MAX_SEARCH_COUNT} search queries expired</h2>
            )}
            <h3>Instead of searching for cars help ЗСУ</h3>
            <div className="container">
                <img
                    src="https://i.lb.ua/011/06/647d8a56beaf8.jpeg"
                    height={300}
                />
                <div>
                    <a href="https://prytulafoundation.org">
                        Фонд Сергія Притули
                    </a>
                    <a href="https://koloua.com/targeted/campaigns">
                        Фонд Коло
                    </a>
                    <a href="https://savelife.in.ua/">Фонд Повернись Живим</a>
                </div>
            </div>
        </StyledDonationPage>
    );
};

export default DonationPage;
