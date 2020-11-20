import React, { useState, useEffect } from 'react';

import '../statics/styles/detail.css'

export default function Detail(props){
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	// Since we need to find data from repo/file, 
	// might as well use a loader for future boilerplate
	useEffect(() => {
		const load = async () => {
			const res = await props.data.features.filter(
				(obj) => obj.id === props.match.params.id
			)[0];
			setData(res);
			setIsLoading(false);
		}
		load();
	}, []);

	return isLoading ? (<div>Loading...</div>) 
		: (
			<div className="detail centered">
				<h1>{data.properties.title}</h1>
				<div className="section">
					<dl className="inline">
						<dt>Place</dt>
						<dd>{data.properties.place}</dd>

						<dt>Magnitude</dt>
						<dd>{data.properties.mag}</dd>

						<dt>time</dt>
						<dd>{data.properties.time}</dd>

						<dt>status</dt>
						<dd>{data.properties.status}</dd>

						<dt>tsunami</dt>
						<dd>{data.properties.tsunami}</dd>

						<dt>type</dt>
						<dd>{data.properties.type}</dd>
					</dl>
				</div>
			</div>
		);
}