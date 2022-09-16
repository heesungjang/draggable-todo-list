import { AddNewItem } from './AddNewItems';
import { Column } from './Column';
import { AppContainer } from './styles';

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo:" />
      <AddNewItem
        toggleButtonText="+ 카드 추가하기"
        onAdd={() => console.log('item added')}
      />
    </AppContainer>
  );
};
