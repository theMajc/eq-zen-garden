import React from 'react';
import {Link} from 'react-router-dom';
import '../statics/styles/home.css';

const DataLogRows = (log) => {
	return log.map( (data) => {
		let date = new Date(data.properties.time);
		let isoTime = date.toISOString();
		let tz = date.getTimezoneOffset() / 60;
		let time = isoTime.slice(0,-5) + (tz>0?'+':'-') + `0${tz}`.slice(-2) + ':00';
		// [YYYY-MM-DDThh:mm:ssTZD](https://www.w3.org/TR/NOTE-datetime)

		return (
			<tr key={data.id}>
				<td className="col-1">
					<Link to={`/detail/${data.id}`}>
						{data.properties.place}
					</Link>
				</td>
				<td className="col-2">
					{data.properties.mag}
				</td>
				<td className="col-3">
					{time}
				</td>
			</tr>
		);
	});
}

export default function Home(props) {
	const {data} = props;
	return (
		<div className="home">
			<h1 className="centered">
				{data.metadata.title ?? "USGS All Earthquakes, Past Hour"}
			</h1>
			<table className="quake-log">
				<thead>
					<tr>
						<th className="col-1">Place</th>
						<th className="col-2">Magnitude</th>
						<th className="col-3">Time</th>
					</tr>
				</thead>
				<tbody>
					{DataLogRows(data.features)}
				</tbody>
			</table>
		</div>
	)
}