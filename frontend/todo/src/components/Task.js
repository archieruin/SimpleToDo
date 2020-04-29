import React from "react";


const Task = ({task, ...props}) => {
    return (
        <li className="ant-list-item">{task.description}</li>
    )
};

export default Task;