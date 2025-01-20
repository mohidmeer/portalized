import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';




const persistedCartReducer = persistReducer({ key: 'cart', storage }, cartReducer);
const persistedUserReducer = persistReducer({key:'user',storage}, userReducer);


const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    user:persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], 
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };