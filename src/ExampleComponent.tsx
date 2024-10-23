import { useEffect, useState } from "react"

export const ExampleComponent = () => {
    console.log('Component rendered');
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component unmounted');
        }
    }, []);

    return (
        <>
            <h2>Example component</h2>
            <p>Count: {count}</p>
            <button type="button" onClick={()=> setCount(c => ++c)}>
                Increment count
            </button>
        </>
    )
}