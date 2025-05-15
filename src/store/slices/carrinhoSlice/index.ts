import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Pratos } from '../../../types';

interface PratosComKey extends Pratos {
    key: number;
}

type TypeInitialState = {
    itens: PratosComKey[]
}

const initialState: TypeInitialState = {
    itens: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Pratos>) => {
            const maiorKey = state.itens.reduce((maior, atual) =>
                atual.key > maior ? atual.key : maior, 0
            );
            const novoItem: PratosComKey = {
                ...action.payload,
                key: maiorKey + 1
            }
            state.itens.push(novoItem);
        },
        remover: (state, action: PayloadAction<PratosComKey>) => {
            state.itens = state.itens.filter(item => item.key !== action.payload.key);
        },
        limparCarrinho: (state) => {
            state.itens = [];
        }
    }
})

export const { adicionar, remover, limparCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
