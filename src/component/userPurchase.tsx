import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";

import { changeAllUserPurchase } from "@/features/user/userPurchases.slice";

const UserPurchase = () => {
    const dispatch = useDispatch();
    const users_purchases = useSelector(
        (state: RootState) => state.userPurchase
    );
    const [purchaseValues, setPurchaseValues] = useState(
        Array.from({ length: users_purchases.length }).map((_, idx) => ({
            id: users_purchases[idx].id,
            value: 0,
        }))
    );

    const NewPurchaseValueHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: number
    ) => {
        const newValue = e.target.value;
        // console.log("New Value", newValue);
        // console.log("State Value: ", purchaseValues);
        setPurchaseValues((prevValues) => {
            const updatedValues = [...prevValues];
            const index = users_purchases.findIndex(
                (purchase) => purchase.id === id
            );
            if (index !== -1) {
                updatedValues[index].value = parseInt(newValue);
            }
            return updatedValues;
        });
    };

    const ApplyHandler = () => {
        dispatch(changeAllUserPurchase([...purchaseValues]));
    };

    return (
        <div className="m-10">
            {users_purchases.map((purchase, index) => (
                <>
                    <h2> Course Name {purchase.name}</h2>
                    <p> Prev Purchases Value: {purchase.totalCount}</p>
                    <input
                        type="number"
                        name="purchase value"
                        id=""
                        value={purchaseValues[index].value}
                        className="border"
                        onChange={(e) => {
                            NewPurchaseValueHandler(e, purchase.id);
                        }}
                    />
                    <br />
                </>
            ))}

            <button onClick={ApplyHandler}>Apply</button>
        </div>
    );
};

export default UserPurchase;
