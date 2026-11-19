
import {
    createContext,
    useContext,
    useEffect,
    useId
} from "react";

// Create Context
const StudentContext = createContext();

// Student Provider
function StudentProvider({ children }) {

    const students = [
        { id: 1, name: "Razik", department: "CSE" },
        { id: 2, name: "Arun", department: "ECE" },
        { id: 3, name: "Kumar", department: "IT" }
    ];

    return (
        <StudentContext.Provider value={students}>
            {children}
        </StudentContext.Provider>
    );
}

// Student Item
function StudentItem({ student }) {
    return (
        <div>
            <h3>{student.name}</h3>
            <p>Department: {student.department}</p>
        </div>
    );
}

// Student List
function StudentList() {

    const students = useContext(StudentContext);

    const headingId = useId();

    useEffect(() => {
        console.log("Student list loaded");
    }, []);

    return (
        <section aria-labelledby={headingId}>

            <h2 id={headingId}>Student Directory</h2>

            {students.map((student) => (
                <StudentItem
                    key={student.id}
                    student={student}
                />
            ))}

        </section>
    );
}

// Main Q11 Component
function Q11() {
    return (
        <div>
            <h1>Q11 - Student Directory</h1>

            <StudentProvider>
                <StudentList />
            </StudentProvider>
        </div>
    );
}

export default Q11;
