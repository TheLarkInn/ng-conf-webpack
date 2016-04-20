export class InputComponent {
	constructor() {
		this.element = document.createElement('h3');
		let text = document.createTextNode('I <3 ES6');

		this.element.appendChild(text);
	}

	render() {
		return this.element;
	}
}