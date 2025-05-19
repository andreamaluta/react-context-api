import React from 'react'

const PostsList = ({ posts }) => {
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
