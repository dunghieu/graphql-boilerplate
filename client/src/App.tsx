import React, {useContext, useEffect} from 'react';
import './App.css';

import {useQuery, useMutation, gql} from '@apollo/client';

const POST = gql`
  query Query($criteria: SearchPostsInput) {
    hostPosts(criteria: $criteria) {
      cursor
      hasMore
      posts {
        id
        createdAt
        updatedAt
        title
        content
        photoThumbnail
        author {
          id
          name
          email
          password
        }
      }
    }
  }
`;

const ADD_POST = gql`
  mutation CreatePost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      code
      success
      message
      post {
        id
        createdAt
        updatedAt
        title
        content
        photoThumbnail
      }
    }
  }
`;

function DisplayPost() {
  const {loading, error, data} = useQuery(POST, {
    variables: {
      criteria: {
        after: null,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.hostPosts.posts.map(({title, content, photoThumbnail, id}) => (
    <div key={id}>
      <h3>{title}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photoThumbnail}`} />
      <br />
      <b>About this location:</b>
      <p>{content}</p>
      <br />
    </div>
  ));
}

function AddPost() {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const contentRef = React.useRef<HTMLInputElement>(null);
  const [addPost, {data, loading, error}] = useMutation(ADD_POST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <form
        style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '400px'}}
        onSubmit={(e) => {
          e.preventDefault();
          addPost({
            variables: {
              createPostInput: {
                title: titleRef.current?.value,
                content: contentRef.current?.value,
                photoThumbnail:
                  'https://i.pinimg.com/564x/2e/39/a2/2e39a21a209ffd1bfb8304e6469907d0.jpg',
              },
            },
          });
        }}
      >
        Title:
        <input ref={titleRef} />
        Content:
        <input ref={contentRef} />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀 </h2>
      <br />
      <AddPost />
      <div style={{display: 'flex', gap: '20px'}}>
        <DisplayPost />
      </div>
    </div>
  );
}

export default App;
