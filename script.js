const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");

const RomanNumerals = {};

RomanNumerals.symbols = [
  {symbol: 'M', value: 1000},
  {symbol: 'CM', value: 900},
  {symbol: 'D', value: 500},
  {symbol: 'CD', value: 400},
  {symbol: 'C', value: 100},
  {symbol: 'XC', value: 90},
  {symbol: 'L', value: 50},
  {symbol: 'XL', value: 40},
  {symbol: 'X', value: 10},
  {symbol: 'IX', value: 9},
  {symbol: 'V', value: 5},
  {symbol: 'IV', value: 4},
  {symbol: 'I', value: 1}
];


function visAlgoritmer(){
  document.getElementById("content").style.visibility = "visible";
  document.getElementById("button").style.display = "none";
}


text2.onkeyup = function romanize () {
  let num = text2.value;
  if (text2.value.length === 0){text1.value = ""}
	if (!+num)
		return false;
	var	digits = String(+num).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	text1.value = Array(+digits.join("") + 1).join("M") + roman;
}

text1.onkeyup = function deromanize () {
  let str1 = text1.value;
  if (text1.value.length === 0){text2.value = ""}
	let str = str1.toUpperCase(),
		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		num = 0, m;
	if (!(str && validator.test(str)))
		return false;
	while (m = token.exec(str))
		num += key[m[0]];
  text2.value = num;
}

