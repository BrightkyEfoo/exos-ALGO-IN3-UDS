let count = 0
const T = (n)=>{
    count++
    console.log(count)
    let i = 0
    const tab = [1,1,1]
    if(n > 2){
        for(i=3 ; i<=n ; i++){
            count++
            console.log(count)
            tab[i] = tab[i-1] + 2*tab[i-2] + tab[i-3]
        }
    }
    return tab[n]
}
const N = 700

console.log(`T(${N}) = ${T(N)}`)