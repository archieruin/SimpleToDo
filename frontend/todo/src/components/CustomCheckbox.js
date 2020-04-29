import React, {useContext} from "react";
import {TaskContext} from "../contexts/TaskContext";
import {Checkbox} from "antd";

export const CustomCheckbox = ({item}) => {
    const {tasks, setTasks, setUpdatedTask} = useContext(TaskContext);
    const changeHandler = (event) => {
        setTasks(
            tasks.map(task => {
                if (task.id === event.target._id) {
                    task.done = event.target.checked;
                    setUpdatedTask(task);
                    return task
                }
                return task
            })
        );
    };

    if (item.done) {
        return (<Checkbox className="Checkbox CheckboxDone"
                          checked={true}
                          onChange={changeHandler}
                          key={item.id}
                          _id={item.id}>{item.description}</Checkbox>)
    }
    return (<Checkbox className="Checkbox" checked={false}
                      onChange={changeHandler}
                      key={item.id}
                      _id={item.id}>{item.description}</Checkbox>)
};