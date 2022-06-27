module.exports = function toReadable(number) {
    let toTwenty = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return "zero";

    if (number.toString().length > 3) return "overflow";

    let numString = ("00" + number).substring(("00" + number).length - 3);
    let numArray = [numString.substring(0, 1), numString.substring(1, 3)];

    let string = "";
    if (numArray[0] != 0) {
        string += toTwenty[Number(numArray[0])] + " hundred";
    } else {
        string += "";
    }

    if (numArray[1] != 0) {
        string += (string != "" ? " " : "") + (toTwenty[Number(numArray[1])] || tens[numArray[1][0]] + (toTwenty[numArray[1][1]] ? " " + toTwenty[numArray[1][1]] : ""));
    } else {
        string += "";
    }

    return string;
};
