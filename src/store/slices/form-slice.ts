import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  phone: '',
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, action) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
