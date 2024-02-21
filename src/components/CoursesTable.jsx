import { useState } from "react";
import { useEffect } from "react";

const CoursesTable = () => {

    // Using useEffect to handle data fetching as side effect
    useEffect( () => {
        fetch("/courseData.json")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    } , [])

    // Using useState to store fetched data
    const [data, setData] = useState([])
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default CoursesTable;