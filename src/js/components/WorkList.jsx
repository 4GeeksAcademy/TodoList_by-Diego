import React, { useState } from "react";
import '../../styles/index.css'


export function ToDoList() {

    const [inputTask, setInputTask] = useState("");
    const [list, setList] = useState([]);
    const [check, setCheck] = useState("")

    const addTask = (e) => {
        if (e) { e.preventDefault(); }

        if (inputTask.trim() !== "") {
            const newTask = { id: Date.now(), texto: inputTask, check: false, isEditing: false, };
            setList([...list, newTask]);
            setInputTask("");
        }

    }

    const deleteTask = (id) => {
        const newList = list.filter(task => task.id !== id);
        setList(newList);

    };


    const checkTask = (id) => {

        const taskChecked = list.map(task => task.id === id ? { ...task, check: !task.check } : task);
        setList(taskChecked);

    }


    const editTask = (id) => {
        const editarTask = list.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task)
        setList(editarTask)


    }

    const updateTaskText = (id, newText) => {
        const taskUpdate = list.map(task => task.id === id ? { ...task, texto: newText } : task)
        setList(taskUpdate)
    }


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
                    {list.length === 0 ? <li className="noItems">There are no pending tasks</li> : list.map((task) => (
                        <li className="elemList" key={task.id}>
                            <div className="left">
                                <button className="checkBox" onClick={() => checkTask(task.id)}>

                                    {task.check ? <i className="iconCheck fa-regular fa-circle-check"></i> : <i className="iconCheck fa-regular fa-circle"></i>}


                                </button>

                                <div className="text">
                                    {task.isEditing ?
                                        (<input className="EditTaskText" onChange={(e) => updateTaskText(task.id, e.target.value)}
                                            value={task.texto} onBlur={() => editTask(task.id)} onKeyDown={(e) => e.key === 'Enter' && editTask(task.id)} />) :

                                        (<span onClick={() => editTask(task.id)}> {task.texto}</span>)

                                    }
                                </div>
                            </div>

                            < button className="delete-btn" onClick={() => deleteTask(task.id)}><i className="iconDelete fa-regular fa-trash-can"></i></button>
                        </li>
                    ))}


                </ul>

            </div >

            <div className="TaskCounter">
                <footer><p>Total tasks: {list.length}</p></footer>

            </div>


        </div >


    )



}








