import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import InstructorRoute from '../../../../components/routes/InstructorRoute'
import axios from 'axios'


const CourseView = () => {
    const [course, setCourses] = useState([])

    const router = useRouter()
    const { slug } = router.query

    useEffect(() => {
        // console.log(slug)
        loadCourse()
    }, [])

    const loadCourse = async () => {
        const { data } = await axios.get(`api/course/${slug}`)
        setCourses(data)
    }

    return (
        <>
            <InstructorRoute>
                <div className='container-fluid pt-3'>
                    <pre>{JSON.stringify(course, null, 4)}</pre>
                </div>
            </InstructorRoute>
        </>
    )
}


export default CourseView
