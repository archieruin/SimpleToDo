import React, {useEffect, useState} from 'react';
import API from "./utils/API";
import 'antd/dist/antd.css';
import {Button, List} from 'antd';
import {TaskContext} from "./contexts/TaskContext";
import {CustomCheckbox} from "./components/CustomCheckbox";
import {AddTaskInputGroup} from "./components/AddTaskInputGroup";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";


const App = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [updatedTask, setUpdatedTask] = useState(null);

    // useEffect(() => {
    //     API.get('/api/')
    //         .then(res => {
    //             localStorage.setItem('tasks', JSON.stringify(res.data));
    //         });
    // });

    useEffect(() => {
        API.get('/api/')
            .then(res => {
                localStorage.setItem('tasks', JSON.stringify(res.data.reverse()));
            });
    }, [API]);


    useEffect(() => {
        if (updatedTask) {
            API.patch(`/api/${updatedTask.id}/`, updatedTask);
        }
    }, [updatedTask]);


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    const deleteHandler = async (event) => {
        const item_id = event.target.getAttribute("item_id");
        if (item_id) {
            const res = await API.delete(`/api/${item_id}/`);
            console.log(res);
            setTasks(tasks.filter((item) => item.id.toString() !== item_id));
        }
    };


    return (
        <TaskContext.Provider value={{
            tasks, setTasks, setUpdatedTask
        }}>
            <div className="App">
                <h1 className="FullName">John Doe</h1>
                <div className="TasksListContainer">
                    <div>
                        <AddTaskInputGroup placeholder="Make sandwich"/>
                    </div>
                    <List
                        itemLayout="horizontal"
                        dataSource={tasks}
                        renderItem={item => (
                            <List.Item>
                                <CustomCheckbox item={item}/>
                                <Button type="dashed"
                                        shape="circle"
                                        icon={<DeleteOutlined/>}
                                        onClick={deleteHandler}
                                        item_id={item.id}/>
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </TaskContext.Provider>
    );
};

export default App;
