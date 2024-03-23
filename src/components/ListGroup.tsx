
function ListGroup() {
    const items = [
        'Houston',
        'New York',
        'Chicago',
        'Atlanta',
        'Cleveland'
    ];

    
    
	return (
        <>
            <h1>List</h1>
		<ul className='list-group'>
			
            {items.map(item => <li>{item}</li>)}

		</ul>
        </>
	);
}

export default ListGroup;
