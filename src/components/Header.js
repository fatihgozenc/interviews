import React from 'react'

const Header = (props) => {

	return (
		<header>
			<section className="search">
				<input
					type="search"
					onChange={(e) => props.handleSearch(e.target.value.toLowerCase())}
				/>
			</section>
			<section className="categories">
				{
					props.categories.map((cat, i) => (
						<button key={i}>{cat}</button>
					))
				}
			</section>
		</header>
	)
}

export default Header