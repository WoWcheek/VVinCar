
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'; // Убедитесь, что Bootstrap CSS импортирован
import VinAuto from './VinAuto'; // Предполагаем, что VinAuto - это ваш компонент для поиска VIN

const StyledApp = styled.div`
  padding: 20px; // Немного паддинга для красоты
`;

const App = () => {
    return (
      <StyledApp>
        <div className="container">
          <h1 className="text-center mt-5">Поиск истории авто по VIN номеру</h1>
          <VinAuto /> 
          <p className="text-muted text-center">Используйте форму выше для поиска по VIN.</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary">Нажми меня</button> 
          </div>
        </div>
      </StyledApp>
    );
};

export default App;
