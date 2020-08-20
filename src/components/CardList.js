import React from 'react'
import Card from './Card'

const CardList = ({ content }) => {
	const [category, setCategory] = React.useState(content.react.general)

	return (
		<section className="cardlist">
			{
				category.map((item, i) => (
					<Card key={i} {...item} />
				))
			}
		</section>
	)
}

export default CardList