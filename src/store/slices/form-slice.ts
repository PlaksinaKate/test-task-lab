import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../helpers/api";

export interface IForm {
  name: string,
  phone: string,
  status: string | null,
  error: unknown
}

const initialState: IForm = {
  name: "",
  phone: "",
  status: null,
  error: null,
};

export const fetchForm = createAsyncThunk("form/fetchForm", async function () {
  const data = await api.sendForm();
  return data;
});

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, action) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchForm.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchForm.fulfilled, (state, action) => {
      state.status = "resolved";
      state.name = action.payload;
    });
    builder.addCase(fetchForm.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
