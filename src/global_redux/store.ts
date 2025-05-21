'use client';

import {configureStore} from "@reduxjs/toolkit";
import { newChatLoadingReducer } from "./features/loading/loadingSlice";
import { chatPromptSubmittedReducer } from "./features/chat/chatPromptSlice";


export const store = configureStore({
    reducer:{

        newChatLoading: newChatLoadingReducer,
        chatPromptSubmitted: chatPromptSubmittedReducer

    } 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

