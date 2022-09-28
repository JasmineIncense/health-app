import { createContext, useContext } from 'react';
import { default as authStore } from './auth';

// store集合
const stores = { authStore };

const StoreContext = createContext(stores);
const useStoreContext = () => useContext(StoreContext);

export {
  stores,
  StoreContext,
  useStoreContext,
};



