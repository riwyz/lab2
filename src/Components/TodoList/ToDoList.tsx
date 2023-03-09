import React, {useState} from 'react';
import ToDoListElement from "./ToDoListElement"

type ListElement = {
    name:string,
    desc: string
}

const ToDoList = () => {
    const [name, setName] = useState('')
    const [desc, setdesc] = useState('')

    const [list, setlist] = useState<ListElement[]> ([])

    const AddElements = () => {
        const newList = [...list, {
            name:name,
            desc:desc
        }]
        
        setlist(newList)
        
        setName('')
        setdesc('')
    }

    const DeleteElement = (index: number) => {
        const filter = list.filter((el, i) => i !== index)
        setlist(filter);
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
                <button onClick={()=>AddElements()}> Добавить в список </button>
            </div>

            <div>
                {list.map((el,i)=> <ToDoListElement
                    name = {el.name}
                    desc = {el.desc}
                    onDeleteClick={() => DeleteElement(i)}/>)}
            </div>
        </div>
    );
};

export default ToDoList;