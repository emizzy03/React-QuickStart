import React from 'react';
import { useState, useCallback } from 'react';

export default function Form() {
    const [value, setValue] = useState("Change me");

    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
        setValue(event.currentTarget.value);
    }, [setValue])

    return (
        <>
            <input value={value} onChange={handleChange} />
            <p>Value: {value}</p>
        </>
    );
}