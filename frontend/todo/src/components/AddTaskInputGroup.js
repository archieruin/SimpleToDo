import React, {useContext, useEffect, useState} from "react";
import {TaskContext} from "../contexts/TaskContext";
import API from "../utils/API";
import {Button, Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import Group from "antd/es/input/Group";

export const AddTaskInputGroup = ({placeholder}) => {
    const [newTask, setNewTask] = useState(null);
    const {tasks, setTasks} = useContext(TaskContext);

    useEffect(() => {
        const some_func = async (event) => {
            if (event.key === "Enter") {
                await submitHandler();
            }
        };
        window.addEventListener('keypress', some_func);
        return () => window.removeEventListener("keypress", some_func)
    });

    const changeHandler = event => {
        setNewTask(event.target.value);
    };

    const submitHandler = async () => {
        if (newTask) {
            const res = await API.post('/api/', {description: newTask});
            setTasks([res.data, ...tasks]);
            setNewTask("");
        }
    };

    return (
        <Group compact>
            <Input placeholder={placeholder} value={newTask} style={{width: '90%'}} autoFocus={true} onChange={changeHandler}/>
            <Button type="primary" icon={<PlusOutlined/>} style={{width: '10%'}} onClick={submitHandler}/>
        </Group>
    );
};