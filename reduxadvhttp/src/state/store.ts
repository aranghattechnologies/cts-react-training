import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { cartMiddleWare } from "./cartMiddleWare";
import { logger } from "./loggerMiddleWare";

const store = configureStore({
   reducer: {
        todo : todoReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(cartMiddleWare)
        .concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
