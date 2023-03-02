import React, {useState} from 'react';

type ListElement = {
    name:string,
    desc: string
}

const ToDoList = () => {
    const [name, setName] = useState('')
    const [desc, setdesc] = useState('')
    const [list, setlist] = useState([])

    const AddElements = () => {
        setlist([{
            name:name,
            desc:desc
        }])
    }

    return (
        <div>
            <input
                type="text"
                placeholder={"name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder={"description"}
                value={desc}
                onChange={(e) => setdesc(e.target.value)}

            />

            <div>
                <button onClick={()=>}></button>
            </div>
        </div>
    );
};

export default ToDoList;