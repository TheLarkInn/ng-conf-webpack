module.exports = function() {
	var element = document.createElement('h1');
	var messageNode = document.createTextNode("hellowoooorrrllld");

	element.appendChild(messageNode);

	return element;
}