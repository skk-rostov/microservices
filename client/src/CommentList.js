import React from 'react';

export const CommentList = ({comments}) => {
  


    const renderComments = comments.map(comments => {
        return <li key={comments.id}>{comments.content}</li>
    })


    return (
        <ul>
            {renderComments}
        </ul>
    )
}