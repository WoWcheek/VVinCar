import React, { useEffect, useState } from 'react';
import { Ukraine } from '@svg-maps/ukraine';
import styled from 'styled-components';

// Стилизованный компонент для SVG
const StyledSvg = styled.svg`
  width: 100%;
  height: auto;
  max-width: 600px;

  path {
    fill: #eee; // Цвет фона
    stroke: #000; // Цвет границ
    transition: fill 0.3s; // Плавное изменение цвета

    &:hover {
      fill: #ccc; // Цвет при наведении
    }
  }

  path.highlighted {
    fill: red; // Цвет подсветки
  }
`;

// Пропсы компонента, если вы используете TypeScript
interface UkraineMapProps {
  regions: string[];
}

const UkraineMap: React.FC<UkraineMapProps> = ({ regions }) => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>(regions || []);

  // Обновляем выбранные регионы при изменении пропса
  useEffect(() => {
    setSelectedRegions(regions);
  }, [regions]);

  // Проверка, загружена ли карта корректно
  if (!Ukraine || !Ukraine.paths) {
    return <p>Ошибка загрузки карты Украины.</p>;
  }

  return (
    <StyledSvg viewBox={Ukraine.viewBox}>
      {Ukraine.paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          className={selectedRegions.includes(path.name) ? 'highlighted' : ''}
          title={path.name}
        />
      ))}
    </StyledSvg>
  );
};

export default UkraineMap;
