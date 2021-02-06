import React from 'react';
import './commentsList.css';

const CommentsList = (props) => {
    return (
        <ul className='comments__list'>
            {
                props.comments.map((comment) => {
                    return(
                        <li key={comment.id} className='list__item'>
                            <p className='item__autor'>{comment.author}</p>
                            <p className='item__text'>{comment.text}</p>
                            <p className='item__date'>{comment.date}</p>
                            <button
                            className='item__btn' 
                            onClick={() => {
                                props.removeComment(comment.id)}
                            }>Удалить</button>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default CommentsList;