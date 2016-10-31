var i = 0;
//array = [];
var total = 0

for (i; i<1000; i++)
	if (i%3 === 0 || i%5 === 0) {
		total = total + i;
	}

console.log(total);