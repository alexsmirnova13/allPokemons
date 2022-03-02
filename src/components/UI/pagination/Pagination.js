import React from 'react';
import PropTypes from 'prop-types';

import MyButton from '../button/MyButton';
import {getPagesArray} from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
	const pagesArray = getPagesArray(totalPages, page);
	// Console.log(pagesArray)
	return (
		<div className="pageBar">
			<MyButton onClick={() => changePage(1)}>{'<<<'}</MyButton>
			{pagesArray.map(p =>
				<span
					className={page === p ? 'myBtn currentPage' : 'myBtn'}
					onClick={() => changePage(p)}
					key={p}
				>
					{p}
				</span>)}
			<MyButton onClick={() => changePage(totalPages)}>{'>>>'}</MyButton>
		</div>
	);
};

Pagination.propTypes = {
	totalPages: PropTypes.number,
	page: PropTypes.number,
	changePage: PropTypes.func,
};

export default Pagination;
