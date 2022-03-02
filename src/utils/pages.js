export const getPagesCount = (totalCount, limit) => Math.ceil(totalCount / limit);

export const getPagesArray = (totalPages, page) => {
	let result = [];

	if (totalPages === 2) {
		if (page === 1) {
			result.push(page, totalPages);
		} else if (page === 2) {
			result.push(page - 1, totalPages);
		}
	} else if (totalPages >= 3) {
		if (page === 1) {
			result.push(page, page + 1, page + 2);
		} else if (page === totalPages) {
			result.push(totalPages - 2, totalPages - 1, totalPages);
		} else if (page > 1 && page < totalPages) {
			result.push(page - 1, page, page + 1);
		}
	} else if (totalPages <= 1) {
		result = [1];
	}

	return result;
};
