module.exports = {
	reverseString: function(word)
	{
		if (word == "")
			return null;

		splitWord = word.split("");
		var newWord = [];
		for (i = splitWord.length; i >= 0; i--)
		{
			newWord.push(splitWord[i]);
		}
		reversedWord = newWord.join("");

		if(word == reversedWord)
			return true;
		else
			return reversedWord;

	}
}