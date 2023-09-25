import React from 'react';
import { createContext, useContext, useState, useMemo } from 'react';

// This is a simpler example, but you can imagine a more complex object here
type ComplexObject = {
    kind: string
};

// The context is created with `| null` in the type, to accurately reflect the default value.
const Context = createContext<ComplexObject | null>(null);

// The `| null` will be removed via the check in the hook.
const useGetComplexObject = () => {
    const object = useContext(Context);
    if (!object) { throw new Error("useGetComplexObject must be used within a Provider") }
    return object;
}

export default function MyApp() {
    const object = useMemo(() => ({ kind: "complex" }), []);

    return (
        <Context.Provider value={object}>
            <MyComponent />
        </Context.Provider>
    )
}

function MyComponent() {
    const object = useGetComplexObject();

    return (
        <div>
            <p>Current object: {object.kind}</p>
        </div>
    )
}