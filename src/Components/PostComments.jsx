import { Button } from 'antd';
import React, { useState } from 'react'

function PostComments({createComments}) {

    const [newComment,setNewComment] = useState({email:"",body:""})
    const [error,setError] = useState(false);
    const addNewComment = (e) => {
        e.preventDefault();

        if(newComment.email == "" || newComment.body == ""){
            setError(true);
            return;
        }

        setError(false);

        const newCom = {
            ...newComment, id:Date.now(),
        }

        createComments(newCom)
        setNewComment({email:"",body:""});
    }

    return (
        <div className="form">
             <div className={error ? `errorMessage active` : `errorMessage`}>Заполните поля</div>
            <input type="text" value={newComment.email} onChange={ e => setNewComment({...newComment,email:e.target.value})}/>
            <input type="text" value={newComment.body} onChange={ e => setNewComment({...newComment,body:e.target.value})}/>
          
            <Button type="primary" onClick={addNewComment}>Отправтиь</Button>
        </div>
    )
}

export default PostComments
