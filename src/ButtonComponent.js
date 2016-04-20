module.exports = function() {
	var element = document.createElement("button");
	var messageNode = document.createTextNode("ng-nerd");

	element.appendChild(messageNode);

	element.addEventListener('click', function() {
		alert('Clicked this button');
	})

	return element;
}