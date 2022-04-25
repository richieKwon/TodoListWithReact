import React from "react";

const todoItems = [
    {id: 1, title: "React", isDone: true},
    {id: 2, title: "C#", isDone: true},
    {id: 3, title: "Javascript", isDone: true}
];

function TodoItem(props) {
    return (
        <li>
            <input type="checkbox" checked={props.item.isDone}></input>
            {props.item.title}
        </li>
    );  
};

function TodoListInMemory() {
    const todos = todoItems.map((todo) => <TodoItem key={todo.id} item={todo}/>);
    return (
        <>
            <h3>simple todo list</h3>
            <ul>
                {todos}               
            </ul>
        </>
);
}

export default TodoListInMemory;