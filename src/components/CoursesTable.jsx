import { useState } from "react";
import { useEffect } from "react";

const CoursesTable = () => {
  // Using useEffect to handle data fetching as side effect
  useEffect(() => {
    fetch("/courseData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  // Using useState to store fetched data
  const [data, setData] = useState([]);

  return (
    <div className="table-container">
      {data.map((each, index) => (
        <div key={index} className="course-container">
          <span>{each?.CourseName}</span>
          <span>{each?.Date}</span>
          <span>{each?.Author}</span>
          <span>{each?.Status}</span>
        </div>
      ))}
    </div>
  );
};

export default CoursesTable;
