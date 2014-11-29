
function filter (emailCandidates) {

	var noCandidates = (emailCandidates.length === 0);

	if (noCandidates || invalidMail(emailCandidates[0]))
			return [];

	return emailCandidates;
}


function invalidMail (mailCandidate) {

	var atPosition = mailCandidate.indexOf('@'), dotPosition = mailCandidate.indexOf('.');
	var mailHasNotAtSymbol = (dotPosition === -1), mailHasNotDotSymbol = (atPosition === -1);
	var dotBeforeAt = (dotPosition < atPosition);

	if (mailHasNotAtSymbol 	|| mailHasNotDotSymbol	|| dotBeforeAt)
			return true;

	return false;
}