import { Button } from 'antd';
import React from 'react'
import { useHistory } from 'react-router'

function Posts(props) {
        
    const history = useHistory();

    return (
        <>
        <strong>{props.id}</strong> {props.title}
        <p>{props.body}</p>
        <Button onClick={() => history.push('/posts/' + props.id)} type="primary">Перейти </Button>
        <Button onClick={() => props.deletePost(props.id)} type="primary" danger>Удалить </Button>
        </>
    )
}

export default Posts
