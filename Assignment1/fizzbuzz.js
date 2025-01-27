for(i=1;i<=50;i++){
    if(i%3==0){
        console.log(`Fizz`)
        continue
    }
    else if(i%5==0){
        console.log(`Buzz`)
        continue
    }
   else if(i%3==0 && i%5==0){
        console.log(`${i} is FizzBuzz`)
        continue
    }
    else{
        console.log(`${i}`)
    }

}
