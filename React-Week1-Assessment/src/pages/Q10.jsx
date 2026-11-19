
import { useMemo, useState } from "react";

function Q10() {

    const [numbers, setNumbers] = useState([2, 4, 6, 8]);

    const total = useMemo(() => {
        console.log("Calculating total...");

        return numbers.reduce((sum, num) => sum + num, 0);

    }, [numbers]);

    function addNumber() {
        setNumbers([...numbers, 10]);
    }

    return (
        <div>
            <h2>Q10 - useMemo Hook</h2>

            <h3>Numbers: {numbers.join(", ")}</h3>

            <h3>Total: {total}</h3>

            <button onClick={addNumber}>
                Add Number
            </button>
        </div>
    );
}

export default Q10;
