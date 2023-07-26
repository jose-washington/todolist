import React from 'react';
import Card from './Card'

function DoneImg(props){
    if(props.done){
        return(<img className="btn" alt='done' src='./assets/done.png'></img>)
    }else{
        return(<img className="btn" alt='undone' src='./assets/undone.png'></img>)
    }
}


function List(props){


    return(
        <ul>
            {props.items.map(item => <li key={item.id}>
                <Card className={item.done ? "done item": "item"}>
                    {item.text}

                    <div>
                        <button onClick={()=>{props.onDone(item)}}>
                            <DoneImg done={item.done}></DoneImg>
                        </button>
                        <button onClick={()=>{props.onItemDeleted(item)}}>
                            <img src='./assets/delete.png'></img>
                        </button>
                    </div>
                    
                </Card>
            </li>)}
        </ul>
    )
}

export default List;