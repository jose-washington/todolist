import React, { useState } from 'react';
import './todo.css'
import Item from './componentes/item';
import List from './componentes/List'
import TodoForm from './componentes/TodoForm';

function Todo(){

    const [items,setItems] = useState([]);

    function deleteItem(item){
        let filteredItems = items.filter(it => it.id != item.id)
        setItems(filteredItems)
    }


    function onAddItem(text){

        let it = new Item(text);
        setItems([...items,it])
    }

    function onDone(item){
        let updateItems = items.map(it=>{
            if(it.id === item.id){
                it.done = !it.done;
            }

            return it;
        })

        setItems(updateItems);
    }
   

    return(
        <div className='container'>
            <h1>Lista de Tarefas</h1>
            <TodoForm onAddItem={onAddItem}></TodoForm>

            <List onDone={onDone} onItemDeleted ={deleteItem} items={items}></List>
            
        </div>
    )
}

export default Todo