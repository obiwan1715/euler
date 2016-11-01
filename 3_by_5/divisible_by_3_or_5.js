var i = 0;
var total = 0

function divisible(limit) {

for (i; i<limit; i++)
	if (i%3 === 0 || i%5 === 0) {
		total = total + i;
	}

document.getElementById('result').innerHTML = total;

}
