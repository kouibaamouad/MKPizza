import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Data: []
}

const PanierSlice = createSlice({
    name: "Panier",
    initialState,
    reducers: {
        Add: (state, { payload }) => {
            state.Data.filter(p => p.idPizza === payload.idPizza).length === 0 && state.Data.push(payload);
        },
        Delete: (state, { payload }) => {
            state.Data = state.Data.filter(p => p.idPizza !== payload);
        },
        IncrementQuantite: (state, { payload }) => {
            state.Data.filter(p => p.idPizza === payload)[0].Quantite++;
        },
        DecrementQuantite: (state, { payload }) => {
            state.Data.filter(p => p.idPizza === payload)[0].Quantite !== 1 && state.Data.filter(p => p.idPizza === payload)[0].Quantite--;
        },
        AddSauce: (state, { payload }) => {
            state.Data.filter(p => p.idPizza === payload.id)[0].Sauces.push(payload.Sauce);
        },
        DeleteSauce: (state, { payload }) => {
            state.Data.filter(p => p.idPizza === payload.id)[0].Sauces = state.Data.filter(p => p.idPizza === payload.id)[0].Sauces.filter(s => s !== payload.Sauce);
        },
        Clear: state => {
            state.Data = [];
        }
    }
})

export default PanierSlice.reducer;
export const { Add, Delete, IncrementQuantite, DecrementQuantite, AddSauce, DeleteSauce, Clear } = PanierSlice.actions;