import Button from './components/Button';

function App() {
	return (
		<div className='btn btn-primary'>
			<Button onClick={() => console.log('Clicked')}>My Button</Button>
		</div>
	);
}

export default App;
