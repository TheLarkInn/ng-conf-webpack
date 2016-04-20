var HelloWorldComponent = require('./src/HelloWorldComponent.js');
var ButtonComponent = require('./src/ButtonComponent.js');
var ES6StyleInputComponent = require('./src/ES6StyleInputComponent.js'); // Webpack automatically knows imports will work.
var input = new ES6StyleInputComponent.InputComponent;

document.body.appendChild(HelloWorldComponent());
document.body.appendChild(ButtonComponent());

document.body.appendChild(input.render());
