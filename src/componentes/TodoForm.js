import React, {useState} from 'react';

function TodoForm(props){

    const [text, setText] = useState("");

    function handleChange(event){
        let t = event.target.value
        setText(t);
        //console.log(t)
    }

    function addItem(event){
        //para o evento de enviar do button e recarregar a pagina
        event.preventDefault();
        if(text){
            //setItems([...items,text])
            props.onAddItem(text);
            setText("");
        }
        
    }

    return(
        <form className='formulario'>
            <input onChange={handleChange} type='text' value={text} placeholder='Adicione uma tarefa'></input>
            <button  onClick={addItem}>+</button>
        </form>
    )
}

export default TodoForm;