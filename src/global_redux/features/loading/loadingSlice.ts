'use client';

import {createSlice} from "@reduxjs/toolkit";

export interface NewChatLoadingState{
    isLoading: boolean;
}

const initialNewChatLoadingState: NewChatLoadingState = {
    isLoading: false
};

export const newChatLoadingSlice = createSlice({
    name: "newChatLoading",
    initialState: initialNewChatLoadingState,
    reducers: {

        setNewChatLoading: (state) => {state.isLoading = true},
        setNewChatLoaded: (state) => {state.isLoading = false},
    }

});




export const {setNewChatLoading, setNewChatLoaded} = newChatLoadingSlice.actions;


export const newChatLoadingReducer = newChatLoadingSlice.reducer;
