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

interface MoveListAction {
  type: 'MOVE_LIST';
  payload: {
    draggedId: string;
    hoverId: string;
  };
}

interface SetDraggedItem {
  type: 'SET_DRAGGED_ITEM';
  payload: DragItem | null;
}

export type Action =
  | AddListAction
  | AddTaskAction
  | SetDraggedItem
  | MoveListAction;

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

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: 'MOVE_LIST',
  payload: {
    draggedId,
    hoverId,
  },
});

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: 'SET_DRAGGED_ITEM',
  payload: draggedItem,
});
