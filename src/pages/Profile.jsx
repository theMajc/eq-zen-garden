import React from 'react';

import '../statics/styles/profile.css';

export default function Profile(props){
	const {data} = props;
	return (
		<div className="profile">
			<h1 className="centered">Profile</h1>
			<div className="section">
				<div className="photo">
					<img src={data.avatarImage} alt="Avatar"/>
				</div>
				<div className="info">
					{/* 
						Compromise of omitting `thead`/`tbody` 
						for using vertical table headings
						*/}
					<table className="vertical">
						<tr>
							<th>first name</th>
							<td>{data.firstName}</td>
						</tr>
						<tr>
							<th>last name</th>
							<td>{data.lastName}</td>
						</tr>
						<tr>
							<th>phone</th>
							<td>{data.phone}</td>
						</tr>
						<tr>
							<th>email</th>
							<td>{data.email}</td>
						</tr>
						<tr>
							<th>bio</th>
							<td>{data.bio}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	);
}