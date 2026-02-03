import React from "react";
import ReactDOM from 'react-dom/client';
import { ToDoList } from "./components/WorkList.jsx";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


  <React.StrictMode>

    <div className="ToDoList">
      <ToDoList />

    </div>


  </React.StrictMode>


)