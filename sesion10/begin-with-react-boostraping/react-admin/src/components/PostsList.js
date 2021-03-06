import React from 'react'
import PostItem from './PostsItem'

const PostList = (props) => {
    return (
        <table>
            <thead>
                <th>user_id</th>
                <th>id </th>
                <th>title</th>
                <th>body</th>
            </thead>
            <tbody>
                {
                    props.data.map((post) => {
                        return <PostItem data={post} />
                    })
                }
            </tbody>
        </table>
    )
}

export default PostList