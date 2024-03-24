


function ListGroup() {
	let items = ['Houston', 'New York', 'Chicago', 'Atlanta', 'Cleveland'];
    let selectedIndex = 0;
    
   
    // Event handler
    

	return (
		<>
			<h1>List</h1>
			{items.length === 0 && <p>No item found</p>}
			<ul className='list-group'>
				{items.map((item, index) => (
					<li
						className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' }
						key={item}
						onClick={() => { selectedIndex = index; }}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
