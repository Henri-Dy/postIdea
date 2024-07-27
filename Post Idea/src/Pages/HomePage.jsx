import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewPost from '../Components/NewPost';
import Post from '../Components/Post';

const HomePage = () => {
  const [postIts, setPostIts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(response => setPostIts(response.data))
      .catch(error => console.error('Erreur lors du chargement des post-its:', error));
  }, []);

  const addPostIt = (newPostIt) => {
    setPostIts([...postIts, newPostIt]);
  };

  return (
    <div className='container mx-auto p-4'>
      <NewPost addPostIt={addPostIt} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4em]'>
        {postIts.map((postIt, index) => (
          <Post key={index} content={postIt.content} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
