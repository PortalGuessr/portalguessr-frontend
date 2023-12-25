import { createSlice } from "@reduxjs/toolkit";
import { GuessrQuestion } from "../../types/utiltypes/GuessrGameTypes";

const INITIAL_VALUE: GuessrQuestion[] = [];

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    value: INITIAL_VALUE,
  },
  reducers: {
    fillQuestions: (_state, action) => {
      return {
        value: action.payload.questions,
      };
    },

    clearQuestions: () => {
      return {
        value: INITIAL_VALUE,
      };
    },
  },
});

export const { fillQuestions, clearQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
