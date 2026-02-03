import React, { useState } from "react";
import '../../styles/index.css'


export function ToDoList() {

    const [inputTask, setInputTask] = useState("");
    const [list, setList] = useState([]);

    const addTask = (e) => {
        if (e) { e.preventDefault(); }

        if (inputTask.trim() !== "") {
            const newTask = { id: Date.now(), texto: inputTask };
            setList([...list, newTask]);
            setInputTask("");
        }

    }

    const deleteTask = (id) => {
        const newList = list.filter(task => task.id !== id);
        setList(newList);

    };

    return (

        <div className="container">
            <h3 className="titulo">To Do List</h3>
            <p className="description">  Create your tasks and get organized today.</p>

            <div className="InputTask">
                <input type="text" value={inputTask} onChange={(e) => setInputTask(e.target.value)} placeholder="Add a task" onKeyDown={(e) => e.key === 'Enter' && addTask()}></input>
                <button className="addTask_btn" onClick={addTask} disabled={inputTask.trim() === ""}><i className="iconAdd fa-solid fa-plus"></i></button>
            </div>

            <div className="TaskList">
                <ul className="List">
                    {list.length === 0 ? (<li className="noItems">There are no pending tasks</li>) : (list.map((task) => (
                        <li className="elemList" key={task.id}>{task.texto}
                            <button className="delete-btn" onClick={() => deleteTask(task.id)}><i className="iconDelete fa-regular fa-trash-can"></i></button>
                        </li>
                    )))}


                </ul>

            </div>

            <div className="TaskCounter">
                <footer><p>Total tasks: {list.length}</p></footer>

            </div>


        </div>


    )



}








