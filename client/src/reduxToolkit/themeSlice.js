import { createSlice } from "@reduxjs/toolkit";


// 🟩 ==> READ this initialState data from UI components... 
// const mode = useSelector(state => state?.theme?.mode);

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
};


export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {

    // 🟨 WRITE ==> this initialState data from UI components... 
    // onClick={() => dispatch(setMode())}
    // dispatch(setMode())

    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

  },

});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;
