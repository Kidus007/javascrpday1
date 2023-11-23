let strw = 'You cannot end a sentence with because because because is a conjunction'
console.log(strw.lastIndexOf('because'))

let word = '30 Days Of JavaScript'
console.log(word.repeat(2))

//ex2

let words = 'I hope this course is not full of jargon. Check if jargon is in the sentence.'
console.log(words.includes('jargon'))

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')
let str = 'You cannot end a sentence with because because because is a conjunction'
console.log(str.substr(32, 23))
let pattern = /because/g
console.log(str.match(pattern).length)