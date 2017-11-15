// recursion

const diamond = function (num, character){
	if (num % 2 === 0){
		num = num+1;
	}

	const number = function(num1, character){
		if(num1 <= 0){
			return "";
		}
		else {
			return character + number(num1 - 1, character);
		}
	};
	const lines = function(line, space, char) {
		if (line === num+1) {
			return;
		}
		console.log(number(space, " ") + number(char, character));
		if(line > num/2) {
			lines(line+1, space+1, char-2);
		} else {
			lines(line+1, space-1, char+2);
		}
	};
	lines(1, (num-1)/2, 1);
};

diamond(20, "*");

// for/while

const diamond1 = function (num, char){
	if (num % 2 === 0){
		num = num+1;
	}

	const number = function(n, character){
		let pic = "";
		for(let i = 0; i < n; i++)	{
			pic = pic + character;
		}
		return pic;
	};
	let space = (num-1)/2;
	let sign = 1;	
	for (let a = 1; a <= num; a++){
		console.log(number(space, " ") + number(sign, char));
		if (a < num/2){
			space = space - 1;
			sign = sign + 2;
		}
		else{
			space = space + 1;
			sign = sign - 2;
		}

	}
};
diamond1(20, '!');