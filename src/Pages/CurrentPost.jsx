import { Button, Input, Form } from 'antd';
import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import PostComments from '../Components/PostComments';
import { getTotalPages } from '../utils/getTotalPages';

function CurrentPost() {
	const params = useParams();

	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(2);
	const arrayPages = [];
	for (let i = 0; i < totalPages; i++) {
		arrayPages.push(i + 1);
	}

	const [isAddComment, setIsAddComment] = useState(false);
	const fetchPost = async () => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

		setPost(response.data);
	};

	const fetchPostComments = async () => {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`, {
			params: {
				_limit: limit,
				_page: page,
			},
		});
		const value = response.headers['x-total-count'];
		setTotalPages(getTotalPages(value, limit));
		setComments(response.data);
	};
	useEffect(() => {
		fetchPost();
	}, []);
	useEffect(() => {
		fetchPostComments();
	}, [page]);

	const createComments = newCommetaries => {
		setComments([...comments, newCommetaries]);
	};

	return (
		<div>
			{post && (
				<div class="coments">
					<strong>{post.id} </strong> {post.title}
					<p>{post.body}</p>
					{comments ? (
						comments.map(elem => (
							<div key={elem.id}>
								<strong>{elem.email}</strong>
								<p>{elem.body}</p>
							</div>
						))
					) : (
						<div>'нет комментариев</div>
					)}
					<div className="paginationInner">
						{arrayPages.map(elem => (
							<span class="pagination" onClick={() => setPage(elem)}>
								{elem}
							</span>
						))}
					</div>
					<Button className={isAddComment ? 'btnAddComment hide' : 'btnAddComment'} type="primary" onClick={() => setIsAddComment(true)}>
						Оставить комментарий
					</Button>
					{isAddComment ? <PostComments createComments={createComments} /> : <div></div>}
				</div>
			)}
		</div>
	);
}

export default CurrentPost;
