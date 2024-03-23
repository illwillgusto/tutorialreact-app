function ListGroup() {
	let items = ['Houston', 'New York', 'Chicago', 'Atlanta', 'Cleveland'];
	items = [];

	const getMessage = () => {
		return items.length === 0 ? <p>No item found</p> : null;
	};

	return (
		<>
			<h1>List</h1>
			{getMessage()}
			<ul className='list-group'>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
