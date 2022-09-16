import { CardContainer, ColumnContainer, ColumnTitle } from './styles';
import { Card } from './Card';
import { AddNewItem } from './AddNewItems';
import { useAppState } from './state/AppStateContext';

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId } = useAppState();

  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => {
        return <Card text={task.text} key={task.id} id={task.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ 할 일 추가하기"
        onAdd={() => console.log('added')}
        dark
      />
    </ColumnContainer>
  );
};
