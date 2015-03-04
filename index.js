console.log("Ein JS Beispiel");
console.log("Ist aber noch nicht fertig");

alert("DO NOT USE IN PRODUCTION!");
alert('BAD THINGS WILL HAPPEN!');

document.body.style.backgroundColor = 'red';

var yes = confirm("Are you sure you dont have this in production?!");
if (!yes) {
	window.close();
}