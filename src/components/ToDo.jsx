import React from 'react'

const ToDo = () => {

    const [list, setList] = React.useState('');
    const [todoList, setTodoList] = React.useState([]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (list.trim() === '') {
            alert('Please enter a task');
            return;
        }
        setTodoList([...todoList, { list, isCompleted: false }]);
        setList('');
    }

    const handleRemove = (index) => {
        const updatedList = todoList.filter((_, i) => i !== index);
        setTodoList(updatedList);
    }

    const handleStrike = (index) => {

        const updatedList = todoList.map((item, i) =>
            i == index ? { ...item, isCompleted: !item.isCompleted } : item
        );
        setTodoList(updatedList)
    }

    return (
        <div className='container'>
            <div className='d-flex flex-column align-items-center mt-5 vh-100'>
                <h1 className='text-'>TO-DO-LIST</h1>
                <form onSubmit={handleAdd} className='d-flex flex-column justify-content-center align-items-center'>
                    <div className="d-flex gap-1">
                        <input type="text" value={list} onChange={(e) => setList(e.target.value)} className='form-control' />
                        <button type='submit' className='btn btn-success'>ADD</button>
                    </div>
                </form>

                {!todoList.length > 0 ? (
                    <div className="alert">
                        <span>Empty List</span>
                    </div>
                ) : (
                    <div className="container mt-5">
                        <div className="d-flex justify-content-center">
                            <div className="col-8">
                                <ol className="list-group list-group-flush">
                                    {todoList.map((item, index) => (
                                        <li
                                            key={index}
                                            className={
                                                `list-group-item user-select-none
                                                ${item.isCompleted && "text-decoration-line-through"}`
                                            }
                                            onDoubleClick={() => handleStrike(index)}
                                        >
                                            {item.list}
                                            <button
                                                className="btn-close float-end text-bg-danger"
                                                aria-label="Remove"
                                                onClick={() => handleRemove(index)}
                                            ></button>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>

                )}


            </div >
        </div >
    )
}

export default ToDo