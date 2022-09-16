import { CardContainer, ColumnContainer, ColumnTitle } from './styles';
import { Card } from './Card';
import { AddNewItem } from './AddNewItems';
import { useAppState } from './state/AppStateContext';

import { addTask } from './state/actions';

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => {
        return <Card text={task.text} key={task.id} id={task.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ 할 일 추가하기"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
