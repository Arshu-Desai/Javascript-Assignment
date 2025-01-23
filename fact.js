let fact=1
function fun(num){
    for(i=1;i<=num;i++){
        fact=fact*i
    }
    console.log("Factorial of "+num+" is "+fact)
}
    fun(5)