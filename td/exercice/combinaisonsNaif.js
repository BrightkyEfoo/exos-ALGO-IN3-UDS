let count = 0
const Factorielle = (n) => {
    count++
    console.log(count)
    if(n <= 1){
        return 1
    }else{
        return n*Factorielle(n-1)
    }
}
const combinaisonFacto = (i,j) => {
    return Factorielle(j)/(Factorielle(i)*Factorielle(j-i))
}

const combinaison = (i , j)=>{
    count++
    console.log(count)
    if(i>j){
        return 0
    }else{
        if(j===0 || i===0){
            return 1
        }else {
            return combinaison(i-1,j-1) + combinaison(i,j-1)
        }
    }
}
const i = 4

const j = 78

console.log(`C(${i},${j}) = ${combinaison(i,j)}`)