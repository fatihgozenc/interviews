import React from 'react'
import Card from './Card'

const CardList = ({ content }) => {

	return (
		<section className="cardlist">
			{
				content.map((item, i) => (
					<Card key={i} {...item} />
				))
			}
		</section>
	)
}

export default CardList