import ListGroup from './components/ListGroup';

function App() {
	let items = ['Houston', 'New York', 'Chicago', 'Atlanta', 'Cleveland']; // this is moved from the ListGroups component because we added the interface function 

	return (
		<div>
			<ListGroup items={items} heading='Cities' /> {/*this is in response to the interface function added so the item is 'items' and the heading is a string which is 'Cities' */}
		</div>
	); // worth noting each component has it's own state
}

export default App;
