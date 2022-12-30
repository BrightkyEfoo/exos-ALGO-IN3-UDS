let count = 0
const T = (n)=>{
    count++
    console.log(count)
    if(n<=2){
        return 1
    }else{
        return T(n-1) + 2*T(n-2) + T(n-3)
    } 
}
const N = 20

console.log(`T(${N}) = ${T(N)}`)