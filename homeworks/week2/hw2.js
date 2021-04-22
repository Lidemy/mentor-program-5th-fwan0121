function capitalize(str) {
    var char = str[0];
	return char.toUpperCase() + str.slice(1);
}

console.log(capitalize('hello'));
