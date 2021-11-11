import React from 'react';
import TodoListModel from "../models/TodoListModel";
function Home() {
    const [todoList, settodoList] = React.useState<TodoListModel[]>([]);
    const [textValue, setTextValue] = React.useState("");
    const [isEdit, setEdit] = React.useState(false);
    const [editQuestion, setEditQuestion] = React.useState(false);

    React.useEffect(() => {
        let todoLists = JSON.parse(localStorage.getItem("todo"));
        if (todoLists) {
            settodoList(todoLists);
        }
    }, [])
    const addTodo = () => {
        let todoData: TodoListModel = {
            id: todoList.length,
            value: textValue
        };
        settodoList([...todoList, todoData]);
        localStorage.setItem("todo", JSON.stringify([...todoList, todoData]))
    }
    const onEditTodo = (item: TodoListModel) => {

    }
    const onDeleteTodo = (item: TodoListModel) => {
        settodoList(todoList.filter((val) => val.id != item.id));
        localStorage.setItem("todo", JSON.stringify([...todoList, todoList.filter((val) => val.id != item.id)]))
    }
    return <>
        <div className="container" style={{ marginTop: "15px" }}>
            <div className="row">
                <div className="col-6">
                    <input type="text" value={textValue} onChange={(e) => setTextValue(e.target.value)} className="form-control" placeholder="Type here a todo"></input>
                </div>
                <div className="col-6">
                    <button onClick={() => addTodo()} className="btn btn-primary">Add</button>
                </div>
            </div>
            <div style={{ marginTop: "15px" }}>
                <ol>
                    {todoList.map((item) => {
                        return <>
                            <li style={{ marginTop: "5px" }} key={item.id} >{item.value}</li>
                            <button onClick={() => onEditTodo(item)} className="btn btn-secondary">Edit</button>
                            <button onClick={() => onDeleteTodo(item)} className="btn btn-secondary">Delete</button>
                        </>
                    })}
                </ol>
            </div>

        </div>
    </>
}

export default Home;
