import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CommentList = ({postId}) => {
    const [comments, setComments] = useState([])
    const fetchData = async () => {
        const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)

        setComments(res.data);
    }

    useEffect(() => {
        fetchData();
    }, [])


    const renderComments = comments.map(comments => {
        return <li key={comments.id}>{comments.content}</li>
    })


    return (
        <ul>
            {renderComments}
        </ul>
    )
}