
function filter (emailCandidates) {

	var noCandidates = (emailCandidates.length === 0);

	if (noCandidates)
			return [];

	return validMails(emailCandidates);
}

function validMails (emailCandidates) {
	return emailCandidates.filter(checkIsMail);
}

function checkIsMail (candidate){
	if (isMail(candidate))
		return true;
}

function isMail (mailCandidate) {

	var atPosition = mailCandidate.indexOf('@'), dotPosition = mailCandidate.indexOf('.');
	var mailHasNotAtSymbol = (dotPosition === -1), mailHasNotDotSymbol = (atPosition === -1);
	var dotBeforeAt = (dotPosition < atPosition);

	if (mailHasNotAtSymbol || mailHasNotDotSymbol || dotBeforeAt)
			return false;

	return true;
}