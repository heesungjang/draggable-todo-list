import { ColumnContainer, ColumnTitle } from '../styles';
import { Card } from './Card';
import { AddNewItem } from '../components/AddNewItems';
import { useAppState } from '../state/AppStateContext';

import { addTask, moveList } from '../state/actions';
import { useRef } from 'react';
import { useItemDrag } from '../hooks/useItemDrag';
import { useDrop } from 'react-dnd';
import { throttle } from 'throttle-debounce-ts';

type ColumnProps = {
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch, draggedItem } = useAppState();
  const tasks = getTasksByListId(id);

  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: 'COLUMN', id, text });
  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === id) {
          return;
        }

        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });
  drag(drop(ref));
  return (
    <ColumnContainer ref={ref}>
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
