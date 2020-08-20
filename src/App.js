import React from 'react';
import CardList from './components/CardList'
import questions from './questions/javascript.json'

const App = () => {
	return (
		<main className="App">
			<CardList content={questions.data} />
		</main>
	);
}

export default App;