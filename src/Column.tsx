import { CardContainer, ColumnContainer, ColumnTitle } from './styles';
import { Card } from './Card';
import { AddNewItem } from './AddNewItems';

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate app scaffold" />
      <Card text="Learn Typescript" />
      <Card text="Begin to use Static types" />
      <AddNewItem
        toggleButtonText="+ 할 일 추가하기"
        onAdd={() => console.log('added')}
        dark
      />
    </ColumnContainer>
  );
};
