import { useState } from "react";

function Todo() {
    const [toDo, setTodo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => {
        setTodo(event.target.value);
        // console.log(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(toDo);
        if (toDo === "") return;

        setToDos((current) => [toDo, ...current]);
        setTodo("");
    }
    console.log(toDos);
    return <div>
        <h1>My To Do List({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input value={toDo} onChange={onChange} type="text" placeholder="to do..." />
            <button>Add to do</button>
        </form>
        <hr />
        <ul>
            {toDos.map((todo, idx) => (
                <li key={idx}>
                    {todo}
                </li>
            )
            )}
        </ul>
    </div>
}

export default Todo;