import React, {createContext} from "react";

const noop = () => {};

export const TaskContext = createContext({
    task: [],
    setTasks: noop(),
    setUpdatedTask: noop()
});


