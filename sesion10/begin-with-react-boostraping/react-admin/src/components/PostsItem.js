import React from 'react'

const PostItem = (props) => {
    return (
        <tr>
            <td>{props.data.userId}</td>
            <td>{props.data.id}</td>
            <td>{props.data.title}</td>
            <td>{props.data.body}</td>
        </tr>
    )
}

export default PostItem