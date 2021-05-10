import React from 'react';

const Input = (props) => {
    const {list, setList} = props;

    let task = {
        name: "",
        isComplete: false
    };
    const onChange = (event) => {
        task.name = event.target.value;
    };

    const onClick = (event) => {
        setList([...list, task]);
        event.target.value = "";
    }

    return(
        <div className="container w-50">
            <input className="form-control" onChange={onChange} type="text" name="task"/>
            <button className="btn btn-primary btn-block mt-1" onClick={onClick}>
                Add Task
            </button>
        </div>
    )
}

export default Input;