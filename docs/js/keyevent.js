var log = document.getElementById("keyLog");
var out = document.getElementById("keyIn");

let output = out,
consoleLog = document.getElementById('keyLog'),
btnClearConsole = document.getElementById('btn-clear-console');

function logMessage(message) {
	log.innerHTML += message + "<br>";
}

btnClearConsole.addEventListener('click', (e) => {
	let child = consoleLog.firstChild;
	while (child) {
		consoleLog.removeChild(child);
		child = consoleLog.firstChild;
	}
});

output.addEventListener('keydown', (e) => {
	if (!e.repeat)logMessage(`${e.key} down`);
	elselogMessage(`${e.key}`);
});

output.addEventListener('keyup', (e) => {
	logMessage(`${e.key} up`);
});
