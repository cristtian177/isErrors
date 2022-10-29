let phoneNumber = "11000000010111011010110001110110"
//convert to decimal to obtains the teahcer's number and write in whtasApp "Profe ya acabe" and send a sticker :)

let sum = 0;

for (let i = 0; i < phoneNumber.length; i++) {
    sum += +phoneNumber[i] * 2 ** (phoneNumber.length-1 - i);
}


console.log(sum);