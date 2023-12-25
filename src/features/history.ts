import { createSlice } from "@reduxjs/toolkit";
import { GuessrHistory } from "../../types/utiltypes/GuessrGameTypes";

const INITIAL_VALUE: GuessrHistory[] = [];

const historySlice = createSlice({
  name: "questions",
  initialState: {
    value: INITIAL_VALUE,
  },
  reducers: {
    addHistory: (state, action) => {
      return {
        value: [...state.value, action.payload.history],
      };
    },

    clearHistory: () => {
      return {
        value: INITIAL_VALUE
      }
    }

    saveHistory: (state, ) => {

    }
  },
});

export const {} = historySlice.actions;

export default historySlice.reducer;
