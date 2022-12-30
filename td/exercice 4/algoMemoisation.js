let count = 0
const tab = [1,1,1]
const T = (n)=>{
    count++
    console.log(count)
    if(n<=2){
        return tab[n]
    }else {
        if(tab[n]){
            return tab[n]
        }else{
            tab[n] = T(n-1) + 2*T(n-2) + T(n-3)
            return tab[n]
        }
    } 
}
const N = 40

console.log(`T(${N}) = ${T(N)}`)