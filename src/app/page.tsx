"use client";

import Counter from "@/component/counter";
import Total from "@/component/total";
import UserPurchase from "@/component/userPurchase";

export default function Home() {
    return (
        <>
            {Array.from({ length: 2 }).map((_, index) => (
                <Counter
                    key={index}
                    value={0}
                    onIncrement={() => {}}
                    onDecrement={() => {}}
                />
            ))}
            <Total />
            <div className="mx-20">
                <UserPurchase />
            </div>
        </>
    );
}
