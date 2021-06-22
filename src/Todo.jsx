import React from 'react';
import styles from './Todo.css';

const Todo = () => {
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