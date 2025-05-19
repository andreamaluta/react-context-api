import React from 'react'
import { useContext } from 'react'
import PostContext from '../contexts/PostContext'

const PostsList = () => {

    const { posts } = useContext(PostContext);

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                    <br />
                    {post.content}
                </li>
            ))}
        </ul>
    )
}

export default PostsList
