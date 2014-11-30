
function filter (emailCandidates) {
	return (emailCandidates.length !== 0) ? emailCandidates.filter(isMail) : [];
}

function isMail (mailCandidate) {

	var atPosition = mailCandidate.indexOf('@'), dotPosition = mailCandidate.indexOf('.');
	var mailHasNotAtSymbol = (dotPosition === -1), mailHasNotDotSymbol = (atPosition === -1);
	var dotBeforeAt = (dotPosition < atPosition);

	if (mailHasNotAtSymbol || mailHasNotDotSymbol || dotBeforeAt)
		return false;
	else
		return true;
}