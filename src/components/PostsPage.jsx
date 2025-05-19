import React from 'react'
import PostsList from './PostsList'

const PostsPage = ({ posts }) => {
    return (
        <div>
            <h1>Lista dei post e dei contenuti</h1>
            <PostsList posts={posts} />
        </div>
    )
}

export default PostsPage
