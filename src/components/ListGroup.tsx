function ListGroup() {
	let items = ['Houston', 'New York', 'Chicago', 'Atlanta', 'Cleveland'];
	


	return (
		<>
			<h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
			<ul className='list-group'>
				{items.map((item) => (
					<li className="list-group-item" key={item} onClick={() => console.log("Clicked")}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
