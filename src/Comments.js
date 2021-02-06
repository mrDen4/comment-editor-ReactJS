import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from './components/comments-list/commentsList';
import AddComment from './components/add-comment/addComment';
import './Comments.css';


class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        {id: 1, author: 'Dennis', text: 'Превосходный комментарий, который хвалит что-то', date: '06.02.2021, 09:30'},
        {id: 2, author: 'Dennis', text: 'Ужасный комментарий, который разносит что-то', date: '06.02.2021, 11:30'},
        {id: 3, author: 'Dennis', text: 'Нейтральный комментарий, которому все подходит', date: '06.02.2021, 12:30'},
        {id: 4, author: 'Dennis', text: 'Комментарий совсем не в тему', date: '06.02.2021, 07:30'}
      ],
      valueAutor: '',
      valueText: ''
    }
  }

  componentDidMount() {
    if(localStorage.getItem('comments')) {
      let comments = JSON.parse(localStorage.getItem('comments'));
      this.setState({comments});
    } 
    else {
      localStorage.setItem('comments', JSON.stringify(this.state.comments));
    }
  }

  removeComment(id) {
    let comments = this.state.comments;
    comments = comments.filter(c => c.id !== id);
    this.setState({comments});
    localStorage.setItem('comments', JSON.stringify(comments));
  }

  handleSubmit(e) {
    const comments = this.state.comments;
    const newComment = {
      id: comments.length + 1,
      author: this.state.valueAutor,
      text: this.state.valueText,
      date: new Date().toLocaleString()
    }

    e.preventDefault();

    if(newComment.author == '' || newComment.text == '') {
      alert('Введены пустые данные');
      return
    }

    comments.push(newComment);
    this.setState({comments});
    this.setState({valueAutor: ''});
    this.setState({valueText: ''});
    localStorage.setItem('comments', JSON.stringify(this.state.comments));
  }

  handleAutorChange(e) {
    this.setState({valueAutor: e.target.value});
  }

  handleTextChange(e) {
    this.setState({valueText: e.target.value});
  }
  render() {
    return (
      <div className='comments'>
        <CommentsList 
          removeComment = {this.removeComment.bind(this)}
          comments = {this.state.comments}/>
        <AddComment 
          valueAutor = {this.state.valueAutor}
          valueText = {this.state.valueText}
          handleSubmit = {this.handleSubmit.bind(this)}
          handleAutorChange = {this.handleAutorChange.bind(this)}
          handleTextChange = {this.handleTextChange.bind(this)}/>
      </div>
    )
  }
}

export default Comments;