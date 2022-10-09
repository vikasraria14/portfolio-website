import React from "react";
import './education.css'

const Education = () => {
    return <table className="table">
        <thead>
            <tr>
                <th>Course</th>
                <th>Institute</th>
                <th>Year</th>
                <th>Marks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>B.Tech [CSE]</td>
                <td>Lovely Professional Usiversity</td>
                <td>2017-2021</td>
                <td>7.0 CGPA</td>
            </tr>
            <tr>
                <td>10+2 [Science]</td>
                <td>Central Board of Secondary Education</td>
                <td>2016-2017</td>
                <td>73%</td>
            </tr>
            <tr>
                <td>10th</td>
                <td>Central Board of Secondary Education</td>
                <td>2014-2015</td>
                <td>8.6 CGPA</td>
            </tr>
        </tbody>
    </table>
}

export default Education;