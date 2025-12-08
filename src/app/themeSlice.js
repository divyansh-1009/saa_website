  import { createSlice } from '@reduxjs/toolkit';
  // import Cookies from 'js-cookie';
  const initialState = {
    themeMode:"light"
  };

  const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {

      

      darkTheme: (state) => {
        state.themeMode = "dark"
        console.log("Dark-Mode")

      },
      lightTheme: (state) => {
        state.themeMode = "light"
        console.log("Light-Mode")

      },
    },
  });

  export const {darkTheme,lightTheme} = themeSlice.actions;
  export default themeSlice.reducer;