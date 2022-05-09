import axios from "axios";
import { useEffect, useState, useSyncExternalStore } from "react";
import InstructorRoute from "../../components/routes/InstructorRoute";

const InstructorIndex = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        loadCourses()
    }, [])

    const loadCourses = async () => {
        try {
            const { data } = await axios.get("api/instructor-courses")
            setCourses(data)
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <InstructorRoute>
            <h1 className="jumbotron text-center square">Instructor Dashboard</h1>
            <pre>{JSON.stringify(courses, null, 4)}</pre>
        </InstructorRoute>
    );
}

export default InstructorIndex;