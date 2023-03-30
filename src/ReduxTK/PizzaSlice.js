import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    Pending: false,
    Data: [],
    Error: ""
}

export const fetchData = createAsyncThunk("Pizza/fetchData", () => {
    return axios.get("https://my-json-server.typicode.com/MouadKouibaa1/MKPizzaAPI/Pizzas").then(r => r.data)
})

const PizzaSlice = createSlice({
    name: "Pizza",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchData.pending, (state) => {
            state.Pending = true;
        })
        builder.addCase(fetchData.fulfilled, (state, { payload }) => {
            state.Pending = false;
            state.Data = payload;
            state.Error = "";
        })
        builder.addCase(fetchData.rejected, (state, { error }) => {
            state.Pending = false;
            state.Data = [];
            state.Error = error.message;
        })
    }
})

export default PizzaSlice.reducer;
