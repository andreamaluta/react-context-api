import React from 'react'
import { useContext } from 'react'
import PostContext from '../contexts/PostContext'

const PostsList = () => {

    const { posts } = useContext(PostContext);

    return (
        <div className="container">
            <ul className='list-unstyled'>
                {posts.map((post) => (
                    <li key={post.id} className='my-3'>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title text-center">
                                    <h4>{post.title}</h4>
                                </div>
                                <div className="card-text">
                                    {post.content}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default PostsList
