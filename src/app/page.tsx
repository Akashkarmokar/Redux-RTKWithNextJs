"use client";

import Counter from "@/component/counter";
import Total from "@/component/total";
import Post from "@/component/post";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/features/counters/counterSlice";
import { RootState, AppDispatch } from "@/store/store";

export default function Home() {
    const Counters = useSelector((state: RootState) => state.counters);
    const CounterDispatch = useDispatch<AppDispatch>();

    const handleOnIncrement = (id: number) => {
        // Dispatch increment action
        CounterDispatch(increment(id));
    };
    const handleOnDecrement = (id: number) => {
        // Dispatch decrement action
        CounterDispatch(decrement(id));
    };
    return (
        <>
            {Counters.map((counter) => (
                <Counter
                    key={counter.id}
                    value={counter.value}
                    onIncrement={() => {
                        handleOnIncrement(counter.id);
                    }}
                    onDecrement={() => {
                        handleOnDecrement(counter.id);
                    }}
                />
            ))}
            <Total />
            <Post />
        </>
    );
}
