import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import DisplayTodos from './Components/DisplayTodos';

const App = () => {
    const user = useSelector(selectUser);
	return (
		<div>
			{user? <DisplayTodos/>:<Login/>}
		</div>        
	);
};

export default App;