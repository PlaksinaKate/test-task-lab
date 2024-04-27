import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../helpers/api";
import { IForm, IUser } from "./form-slice.interfaces";

const initialState: IForm & IUser = {
  name: "",
  phone: "",
  status: null,
  error: null,
};

export const fetchAddUser = createAsyncThunk(
  "form/fetchForm",
  async function (_, { getState }) {
    const { name, phone } = getState().form;
    const data = await api.sendForm({ name, phone });
    return data;
  }
);

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
    builder.addCase(fetchAddUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAddUser.fulfilled, (state, action) => {
      state.status = "resolved";
      state.name = action.payload;
    });
    builder.addCase(fetchAddUser.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    });
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
