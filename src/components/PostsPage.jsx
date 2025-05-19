import React from 'react'
import PostsList from './PostsList'

const PostsPage = ({ posts }) => {
    return (
        <div>
            <PostsList posts={posts} />
        </div>
    )
}

export default PostsPage
