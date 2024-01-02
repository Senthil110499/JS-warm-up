/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
	///Your code Starts here 
	let n1 = 0;
	let n2 = 0;
	for (let i = 0; i <= word1.length; i++) {
		n1 = n1 + word1.length;
	}
	for (let j = 0; j <= word2.length; j++) {
		n2 = n2 + word2.length;
	}
	if (n1 == n2) {
		return true;
	} else {
		return false;
	}
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

isSameLength("GUVI", "GEEK");
isSameLength("GUVI", "ZEN");
isSameLength("Hello", "GUVI");
*/