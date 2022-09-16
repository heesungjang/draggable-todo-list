import { toEditorSettings } from 'typescript';
import { AddNewItem } from './AddNewItems';
import { Column } from './Column';
import { AppContainer } from './styles';

import { useAppState } from './state/AppStateContext';

export const App = () => {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => {
        return <Column text={list.text} key={list.id} id={list.id} />;
      })}

      <AddNewItem
        toggleButtonText="+ 카드 추가하기"
        onAdd={() => console.log('item added')}
      />
    </AppContainer>
  );
};
