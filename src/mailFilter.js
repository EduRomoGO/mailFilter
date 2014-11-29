
function filter (emailCandidates) {
	if (emailCandidates.length === 0 						||
			emailCandidates[0].indexOf('@') === -1	||
			emailCandidates[0].indexOf('.') === -1	||
			emailCandidates[0].indexOf('.') < emailCandidates[0].indexOf('@'))
		return [];

	return emailCandidates;
}