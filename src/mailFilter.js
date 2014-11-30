
function filter (emailCandidates) {

	var numberOfCandidates = emailCandidates.length;
	var noCandidates = ( numberOfCandidates === 0);
	var mails = [], i;

	if (noCandidates)
			return [];

	for (i=0; i<numberOfCandidates; i++){
		if (isMail(emailCandidates[i]))
			mails.push(emailCandidates[i]);
	}
	
	return mails;

}


function isMail (mailCandidate) {

	var atPosition = mailCandidate.indexOf('@'), dotPosition = mailCandidate.indexOf('.');
	var mailHasNotAtSymbol = (dotPosition === -1), mailHasNotDotSymbol = (atPosition === -1);
	var dotBeforeAt = (dotPosition < atPosition);

	if (mailHasNotAtSymbol || mailHasNotDotSymbol || dotBeforeAt)
			return false;

	return true;
}