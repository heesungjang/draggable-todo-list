import { DragItem } from '../components/DragItem';

interface AddListAction {
  type: 'ADD_LIST';
  payload: string;
}

interface AddTaskAction {
  type: 'ADD_TASK';
  payload: {
    text: string;
    listId: string;
  };
}

interface SetDragItem {
  type: 'SET_DRAGGED_ITEM';
  payload: DragItem | null;
}

export type Action = AddListAction | AddTaskAction | SetDragItem;

export const addTask = (text: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: {
    text,
    listId,
  },
});

export const addList = (text: string): Action => ({
  type: 'ADD_LIST',
  payload: text,
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: 'SET_DRAGGED_ITEM',
  payload: draggedItem,
});
