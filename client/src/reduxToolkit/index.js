import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import themeSlice from "./themeSlice";


const store = configureStore({

    reducer: {
        theme: themeSlice,              // 🟩 at components by useSelector(), this "theme" name called as "state.theme" 
        [api.reducerPath]: api.reducer, // ✅ REST API calling from here...
    },

    middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
