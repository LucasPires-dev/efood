import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "./slices/carrinhoSlice";



export const store = configureStore({
    reducer: {
        carrinho: carrinhoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch