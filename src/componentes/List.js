import React from 'react';
import ListItem from './listItem';



function List(props){


    return(
        <ul>
            {props.items.map(item => <ListItem key={item.id} item={item} onDone={props.onDone} onItemDeleted = {props.onItemDeleted}></ListItem>)}
        </ul>
    )
}

export default List;