//Is Truthy Section ***************************************
const string = "I am a string";

if (string === "I am a string") {
    console.log(true);
}

const boolF = false;
if (boolF === false) {
    console.log("The boolean value false is falsy");
} 

const nully = null;
if (nully === null) {
    console.log("The null value is falsy");
} 

const undefi = undefined;
if (undefi === undefined) {
    console.log("undefined is falsy");
} 

const zero = false;
if (zero === false) {
    console.log("The number 0 is falsy (the only falsy number)");
} 

const emptyString = false;
if (emptyString === false) {
    console.log("The empty string is falsy (the only falsy string)");
} 

//Number Line ***************************************

const num1 = 0;
const num2 = 101;

const sum = num1 + num2;

if (sum > 100) {
    console.log(`${sum} is greater than 100`);
}

const num3 = -2;
const num4 = 99;

const sum1 = num3 + num4;

if (97 > 0) {
    console.log(`${sum1} is greater than 0`);
}

const num5 = 0;
const num6 = 0;

if (0 === 0) {
    console.log("0 is equal to 0");
}

const num7 = -1000;
const num8 = -1000;

if (-1000 === -1000) {
    console.log("-1000 is a negative number");
}

const num9 = -5;
const num10 = 0;

const sum3 = num9 + num10;

if (num9 < num10) {
    console.log("-5 is a negative number");
}

//Greater Than 5 ***************************************

const num11 = 5;
const num12 = 6;

if (num11 <= num12) {
    console.log(true)
}

const num13 = 10;
const num14 = 11;

if (num13 <= num14) {
    console.log(true)
}

const num15 = 0;
const num16 = 0;

if (num11 > num12) {
    console.log(true)
}
else {
    console.log(false)
}

const num17 = 1000;
const num18 = -1000;

if (num17 <= num18) {
    console.log(true)
}
else {
    console.log(false)
}

const num19 = 6;
const num20 = 4;

if (num17 >= num18) {
    console.log(false)
}
else {
    console.log(true)
}

const num21 = 5;
const num22 = 5;

if (num21 >= num22) {
    console.log(true)
}

//Pair & Compare ***************************************

const param1A = "cat";
const param1B = "cat";

const param2A = 6;
const param2B = "6";

if (param1A === param1B || param2A === param2B) {
    console.log(true);
}
else {
    console.log(false)
}

const param1C = "five";
const param1D = 5;

const param2C = "dog";
const param2D = "dawg";

if (param1C === param1D || param2C === param2D) {
    console.log(true);
}
else {
    console.log(false)
}

const param1E = 0;
const param1F = false;

const param2E = "horse";
const param2F = "horse";

if (param1E === param1F || param2E === param2F) {
    console.log(true);
}
else {
    console.log(false)
}

const param1G = "eight";
const param1H = "eight";

const param2G = "ate";
const param2H = "ate";

if (param1G === param1H || param2G === param2H) {
    console.log(true);
}
else {
    console.log(false)
}

const param1I = 11;
const param1J = "eleven";

const param2I = "four";
const param2J = "for";

if (param1I === param1J || param2I === param2J) {
    console.log(true);
}
else {
    console.log(false)
}

const param1K = "cake";
const param1L = "cake";

const param2K = "pie";
const param2L = "pie";

if (param1K === param1L || param2K === param2L) {
    console.log(true);
}
else {
    console.log(false)
}