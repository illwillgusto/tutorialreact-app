import Button from './components/Button';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
	const [alertVisible, setAlertVisibility] = useState(false);

	return (
		<div>
			{ alertVisible && <Alert>My alert</Alert>}
			<Button onClick={() => setAlertVisibility(true)}>My Button</Button>
		</div>
	);
}

export default App;
