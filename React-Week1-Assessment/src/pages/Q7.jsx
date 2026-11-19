import { useEffect } from "react";

function Q7() {
    useEffect(() => {
        console.log("Component Mounted");
    }, []);

    return (
        <div>
            <h2>Q7 - useEffect Hook</h2>
            <p>Check the browser console to see the message.</p>
        </div>
    );
}

export default Q7;