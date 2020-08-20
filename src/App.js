import React from 'react';
import CardList from './components/CardList'
import Header from './components/Header'

import flatten from './utils/flatten'

import { data } from './questions'

const App = () => {

	const categories = [...Array.from(Object.keys(data))]
	const subCategories = Object.entries(data).reduce((acc, cur) => (
		{ ...acc, [cur[0]]: [...Array.from(Object.keys(cur[1]))] }
	), {})
	const allQuestions = flatten(
		Object.entries(data).reduce((acc, cur) => [...acc, Object.values(cur[1])], [])
	)

	const [searchQuery, setSearchQuery] = React.useState("");
	const [category, setCategory] = React.useState("");
	const [content, setContent] = React.useState(allQuestions)

	const filterSearch = (query) => {
		setContent(
			allQuestions.filter(el => (el.q.toLowerCase().includes(query) || el.a.toLowerCase().includes(query)))
		)
	}

	return (
		<main className="App">
			<Header
				categories={categories}
				subCategories={subCategories}
				handleSearch={filterSearch} />
			<CardList content={content} />
		</main>
	);
}

export default App;