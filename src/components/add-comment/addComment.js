import React from 'react';
import './addComment.css';

const AddComment = (props) => {
    return(
        <form 
        className='addComment'
        onSubmit={props.handleSubmit}>
            <input 
                className='addComment__inp addComment__inp--autor'
                type='text' 
                placeholder='Автор'
                value={props.valueAutor}
                onChange={props.handleAutorChange}></input>
            <textarea 
                className='addComment__inp addComment__inp--text'
                placeholder='Комментарий'
                value={props.valueText}
                onChange={props.handleTextChange}></textarea>
            <button className='addComment__btn' type='submit'>Добавить</button>
        </form>
    )
}

export default AddComment;