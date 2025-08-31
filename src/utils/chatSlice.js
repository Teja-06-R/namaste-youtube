import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVECHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.push(action.payload);
      
      if (state.messages.length > OFFSET_LIVECHAT) {
        state.messages.shift(); // remove first (oldest) message
      }
    },
  },
});
export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;
