import { stores, StoreContext } from '@/store/index';

const App = ({ children }) => {
  return (
    <StoreContext.Provider
      value={stores}>
      {children}
    </StoreContext.Provider>
  );};
export default App;
