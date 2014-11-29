
function filter (emailCandidates) {

	var noCandidates = (emailCandidates.length === 0);

	if (noCandidates || invalidMail(emailCandidates[0]))
			return [];

	return emailCandidates;
}


function invalidMail (mailCandidate) {
		if (mailCandidate.indexOf('@') === -1	||
				mailCandidate.indexOf('.') === -1	||
				mailCandidate.indexOf('.') < mailCandidate.indexOf('@'))
			return true;

		return false;
}