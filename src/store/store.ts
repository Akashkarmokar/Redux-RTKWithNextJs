import { configureStore } from "@reduxjs/toolkit";
import userPurchaseReducer from "@/features/user/userPurchases.slice";

const store = configureStore({
    reducer: {
        userPurchase: userPurchaseReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
