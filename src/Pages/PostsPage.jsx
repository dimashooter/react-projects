import { Col, Row } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import InputRange from '../Components/InputRange/InputRange';
import Posts from '../Components/Posts';

function PostsPage() {

    const [posts,setPosts] = useState([]);
    const fetchPosts  = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit: postsToShow,
            }
        });
        console.log(response.data);
        setPosts(response.data);
    }
    const [postsToShow,setPoststoShow] = useState(50);

    useEffect(() => {
        fetchPosts();
    },[postsToShow])

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    }


    const handlePostsChange = (value) => {
        setPoststoShow(value)
    }


    return (
        <div>
            <InputRange handlePostsChange={handlePostsChange} postsToShow={postsToShow} />

            {posts.length ? 
                <Row justify="start">
                    {posts.map( post => (
                        <Col span={8} key={post.id} className="col-post">
                            <Posts  {...post} deletePost={deletePost} />
                        </Col>

                    ))}
                </Row>
             :
                <h1>список пуст</h1>
            }
        </div>
    )
}

export default PostsPage
