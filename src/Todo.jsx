import React, {useState} from 'react';
import styles from './Todo.module.css';

const Todo = () => {
    const [item, setItem] = useState("");
    const [listItem, setListItem] = useState([]);
    const inputEvent = (event) => {
        setItem(event.target.value);
    }

    const addItem = () => {
        setListItem((oldListOfItems) => {
            return [...oldListOfItems, item];
        })

        setItem("");
    }

    const deleteItem = (indexOfItem) => {
        setListItem((oldListOfItems) => {
            return oldListOfItems.filter((arrElement, index)=> {
                return index !== indexOfItem;
            })
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Todo List</h1>
                <input type="text" onChange={inputEvent} value={item} placeholder="Enter Your Task" />
                <button className={styles.btn} onClick={addItem} >Add</button>
                <ul className={styles.list}>
                    {listItem.map((items, indexOfItem) => {
                        return <li id={indexOfItem}> <p onClick={() => deleteItem(indexOfItem)}>&times;</p>{items} </li>;     
                    })}
                </ul>
            </div>

        </div>
    );
}

export default Todo;