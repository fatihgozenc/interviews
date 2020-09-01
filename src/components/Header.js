import React from 'react'

const Header = (props) => {

	return (
		<header>
			<h1>Interview Question Samples</h1>
			<section className="search">
				<input
					type="search"
					placeholder="Search..."
					onChange={(e) => props.handleSearch(e.target.value.toLowerCase())}
				/>
			</section>
			<section className="categories">
				<input
					value="All"
					type="submit"
					onClick={() => props.handleReset()}
					className="categories__setter" />
				{
					props.categories.map((cat, i) => (
						<input
							value={cat}
							type="submit" key={i}
							onClick={(e) => props.handleCategory(e.target.value)}
							className="categories__setter" />
					))
				}
			</section>
		</header>
	)
}

export default Header