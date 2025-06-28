import React, { Component } from 'react';
import axios from 'axios';

class GetApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errormsg: ''
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1/comments') // ❌ note: invalid endpoint for testing error
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errormsg: 'Error retrieving data'
        });
      });
  }

  render() {
    const { posts, errormsg } = this.state;

    // Inline 3D-style CSS
    const containerStyle = {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    };

    const headingStyle = {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '28px',
      color: '#333',
      textShadow: '1px 1px 2px #ccc'
    };

    const cardStyle = {
      background: '#fff',
      marginBottom: '20px',
      padding: '20px',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
      transition: 'transform 0.2s',
    };

    const errorStyle = {
      color: 'red',
      textAlign: 'center',
      marginTop: '20px',
      fontWeight: 'bold'
    };

    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>LIST OF COMPONENTS</h1>
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id} style={cardStyle}>
              <strong>ID:</strong> {post.id}<br />
              <strong>Name:</strong> {post.name}<br />
              <strong>Email:</strong> {post.email}<br />
              <strong>Body:</strong> {post.body}
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>Nothing to display</p>
        )}
        {errormsg ? <div style={errorStyle}>{errormsg}</div> : null}
      </div>
    );
  }
}

export default GetApi;


