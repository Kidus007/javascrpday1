const birthYear = prompt('Enter Birth Year')
if (birthYear > 18) {
    console.log('you are' + birthYear + 'you are old enough')
} else {
    console.log('you are' + birthYear + 'you will be allowed to drive after 3 years')
}


const num = prompt('Enter Number of years you lived')
num = num * 365 * 24 * 60 * 60
console.log('You have lived' + num + 'seconds')




const currentDate = new Date();
const YY = currentDate.getFullYear();
const MM = currentDate.getMonth();
const DD = currentDate.getDate();
const HH = currentDate.getHours();
const mm = currentDate.getMinutes();

let Time = DD + '-' + MM + '-' + YY + '-' + HH + ':' + mm
let time = DD + '/' + MM + '/' + YY + '/' + HH + ':' + mm
let time = YY + '-' + MM + '-' + DD + '-' + HH + ':' + mm;


console.log(time);