'use client';

import {createSlice} from "@reduxjs/toolkit";

export interface ChatPromptSubmitted{

    isProcessing : boolean;
}


const initialChatPromptSubmitted: ChatPromptSubmitted = {

    isProcessing: false
}


export const chatPromptSubmittedSlice = createSlice({
    name: "chatPromptSubmitted",
    initialState: initialChatPromptSubmitted,
    reducers: {

        setChatPromptSubmitted: (state) => {state.isProcessing = true},
        resolveChatPromptSubmitted: (state) => {state.isProcessing = false},
    }

});

export const {setChatPromptSubmitted, resolveChatPromptSubmitted} = chatPromptSubmittedSlice.actions;
export const chatPromptSubmittedReducer = chatPromptSubmittedSlice.reducer;