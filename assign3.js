const myVal= process.argv

let myArr=[]
myArr.push(Number(myVal[2]))

myArr.push(Number(myVal[3]))
console.log(myArr)

let sum = Number(myArr[0])+  Number(myArr[1])
if(sum <10 ){
    
    console.log(`Sum is less than 10`)
}
else if(sum>10 && sum<100){
      console.log(`Sum is less than 100 but greater than 10`)
}
else if(sum>100 && sum<1000){
      console.log(`Sum is less than 1000 but greater than 100`)
}else{
    console.log(`Sum is  greater than 1000`)
}