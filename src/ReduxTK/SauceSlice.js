import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    Data: [],
}

export const fetchData = createAsyncThunk("Sauce/fetchData", () => {
    return axios.get("https://mkpizzaapi.onrender.com/Sauces").then(r => r.data)
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