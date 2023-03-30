import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    Data: [],
}

export const fetchData = createAsyncThunk("Sauce/fetchData", () => {
    return axios.get("https://my-json-server.typicode.com/MouadKouibaa1/MKPizzaAPI/Sauces").then(r => r.data)
})

const SauceSlice = createSlice({
    name: "Sauce",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchData.fulfilled, (state, { payload }) => {
            state.Data = payload;
        })
    }
})

export default SauceSlice.reducer;
