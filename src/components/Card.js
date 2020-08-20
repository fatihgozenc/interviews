import React from 'react'

const Card = ({ q, a }) => {
	// q = question, a = answer

	return (
		<article className="card">
			<h4 className="card__question">{q}</h4>
			<p className="card__answer">{a}</p>
		</article>
	)
}

export default Card