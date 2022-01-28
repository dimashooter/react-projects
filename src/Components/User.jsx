import React from 'react';

const User = ({ el, checkHandler }) => {
	const { name, email, phone, id } = el;

	return (
		<tr key={id} className={el.active ? 'bg-gray active' : 'bg-gray'}>
			<td className="col">{id}</td>
			<td className="col">{name}</td>
			<td className="col">{email}</td>
			<td className="col">{phone}</td>
			<td className="check-box">
				<input className="mr-2 leading-tight" type="checkbox" onChange={() => checkHandler(id)} checked={el.active} />
			</td>
		</tr>
	);
};

export default User;
