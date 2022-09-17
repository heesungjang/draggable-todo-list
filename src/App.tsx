import { AddNewItem } from './components/AddNewItems';
import { Column } from './components/Column';
import { AppContainer } from './styles';

import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => {
        return <Column text={list.text} key={list.id} id={list.id} />;
      })}

      <AddNewItem
        toggleButtonText="+ 카드 추가하기"
        onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  );
};
