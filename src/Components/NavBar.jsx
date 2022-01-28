import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<Layout.Header>
			<Menu theme="dark" mode="horizontal" selectable={false}>
				<Menu.Item key={1}>
					<Link to="/posts">Posts</Link>
				</Menu.Item>
				<Menu.Item key={3}>
					<Link to="/products">Product</Link>
				</Menu.Item>
				<Menu.Item key={4}>
					<Link to="/table">Table</Link>
				</Menu.Item>
			</Menu>
		</Layout.Header>
	);
}

export default Navbar;
