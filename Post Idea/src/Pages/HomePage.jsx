import React from 'react'
import NewPost from '../Components/NewPost'
import Post from '../Components/Post'

const HomePage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4em]'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default HomePage