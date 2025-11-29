import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type {
    IChangeAllUserPurchasePayload,
    IUserPurchase,
} from "./userPurchases.type";

const initialState: IUserPurchase[] = [
    { id: 1, name: "Course A", totalCount: 3 },
    { id: 2, name: "Course B", totalCount: 5 },
];
const userPurchasesSlice = createSlice({
    name: "userPurchases",
    initialState,
    reducers: {
        changeAllUserPurchase: (
            state,
            action: PayloadAction<IChangeAllUserPurchasePayload[]>
        ) => {
            if (state.length) {
                action.payload.forEach(({ id, value }) => {
                    const eachPurchaseIndex = state.findIndex(
                        (purchase) => purchase.id === id
                    );
                    if (eachPurchaseIndex !== -1) {
                        state[eachPurchaseIndex].totalCount = value;
                    }
                });
            }
        },
    },
});

export const { changeAllUserPurchase } = userPurchasesSlice.actions;
export default userPurchasesSlice.reducer;
