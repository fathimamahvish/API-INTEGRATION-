import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      title: '',
      body: '',
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts/1/comments', this.state)
      .then((response) => {
        console.log(response);
        alert('Post submitted successfully!');
      })
      .catch((error) => {
        console.log(error);
        alert('Error submitting post.');
      });
  };

  render() {
    const { userId, title, body } = this.state;

    // Inline styles
    const containerStyle = {
      maxWidth: '500px',
      margin: '40px auto',
      padding: '30px',
      borderRadius: '15px',
      background: '#f9f9f9',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
      fontFamily: 'Arial, sans-serif',
    };

    const inputStyle = {
      width: '100%',
      padding: '12px 15px',
      margin: '10px 0',
      borderRadius: '10px',
      border: '1px solid #ccc',
      fontSize: '16px',
      boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.1)',
      outline: 'none',
      transition: 'all 0.3s ease',
    };

    const buttonStyle = {
      width: '100%',
      padding: '12px',
      marginTop: '10px',
      border: 'none',
      borderRadius: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '18px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 6px 12px rgba(0, 123, 255, 0.3)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    };

    const buttonHoverStyle = {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 16px rgba(0, 123, 255, 0.4)',
    };

    return (
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Submit a Post</h2>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={userId}
              onChange={this.changeHandler}
              style={inputStyle}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.changeHandler}
              style={inputStyle}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              placeholder="Body"
              value={body}
              onChange={this.changeHandler}
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
            onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
