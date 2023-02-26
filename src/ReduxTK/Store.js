import { configureStore } from "@reduxjs/toolkit"
import PizzaReducer from "./PizzaSlice"
import TopPizzaReducer from "./TopPizzaSlice";
import SauceReducer from "./SauceSlice";
import PanierReducer from "./PanierSlice";

const store = configureStore({
    reducer: {
        Pizza: PizzaReducer,
        TopPizza: TopPizzaReducer,
        Sauce: SauceReducer,
        Panier: PanierReducer
    }
});

export default store;