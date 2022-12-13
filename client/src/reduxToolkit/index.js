import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import globalSlice from "./globalSlice";


const store = configureStore({

    reducer: {
        global: globalSlice,
        [api.reducerPath]: api.reducer,
    },

    middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
