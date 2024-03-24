import { useState } from "react";



function ListGroup() {
	let items = ['Houston', 'New York', 'Chicago', 'Atlanta', 'Cleveland'];
    let selectedIndex = 0;
    
    //this is a hook, a hook is a function that allows us to tap into built-in features in react 
    const [selectedIndex, setSelectedIndex] = useState(-1);
    //these are 2 elements 
    
    
    
    // arr[0] // variable (selectedIndex)
    // arr[1] // updater function, we can update the variable above and react will know to change the state of our component and re-render our component and the DOM will be updated 


    
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
