import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'; // Убедитесь, что Bootstrap CSS импортирован

const StyledApp = styled.div`
  padding: 20px; // Добавьте некоторые стили, если нужно
`;

const App = () => {
    return (
      <StyledApp>
        <div className="container">
          <h1 className="text-center mt-5">Привет, Bootstrap!</h1>
          <p className="text-muted text-center">Это пример использования Bootstrap в вашем React-приложении.</p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary">Нажми меня</button>
          </div>
        </div>
      </StyledApp>
    );
};

export default App;
