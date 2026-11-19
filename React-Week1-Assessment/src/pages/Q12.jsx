
import {
    useState,
    useReducer,
    useMemo,
    useCallback,
    useDeferredValue
} from "react";

// Technology Array
const technologies = [
    "React",
    "Angular",
    "Vue",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python"
];

// Reducer Function
function reducer(state, action) {

    if (action.type === "INCREMENT") {
        return state + 1;
    }
    else if (action.type === "DECREMENT") {
        return state - 1;
    }
    else if (action.type === "RESET") {
        return 0;
    }
    else {
        return state;
    }

}

// Child Button Component
function CounterButton({ text, onClick }) {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

// Main Component
function Q12() {

    // Counter State
    const [count, dispatch] = useReducer(reducer, 0);

    // Search State
    const [searchText, setSearchText] = useState("");

    // Deferred Search Value
    const deferredSearch = useDeferredValue(searchText);

    // Filter Technology List
    const filteredTechnologies = useMemo(() => {

        return technologies.filter((tech) =>
            tech.toLowerCase().includes(deferredSearch.toLowerCase())
        );

    }, [deferredSearch]);

    // Counter Event Handlers
    const handleIncrement = useCallback(() => {
        dispatch({ type: "INCREMENT" });
    }, []);

    const handleDecrement = useCallback(() => {
        dispatch({ type: "DECREMENT" });
    }, []);

    const handleReset = useCallback(() => {
        dispatch({ type: "RESET" });
    }, []);

    return (
        <div>
            <h2>Q12 - Search and Counter Dashboard</h2>

            <h3>Counter: {count}</h3>

            <CounterButton
                text="Increment"
                onClick={handleIncrement}
            />

            <CounterButton
                text="Decrement"
                onClick={handleDecrement}
            />

            <CounterButton
                text="Reset"
                onClick={handleReset}
            />

            <hr />

            <h3>Technology Search</h3>

            <input
                type="text"
                placeholder="Search technology..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <ul>
                {filteredTechnologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>

        </div>
    );
}

export default Q12;
