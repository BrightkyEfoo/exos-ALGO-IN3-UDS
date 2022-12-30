const factorielle = (n) => {
    if(n === 0 || n===1){
        return 1
    }else {
        return n*factorielle(n-1)
    }
}
const CombiTab = []
const combi = (p , n) => {
    if(!CombiTab[n]){
        CombiTab[n] = [0]
    }
    if(p===0 || n===0){
        CombiTab[n][p] = 1
    }else {
        if(!CombiTab[n][p]){
            CombiTab[n][p] = combi(p-1,n-1) + combi(p,n-1)
        }
    }
    return CombiTab[n][p]

}
const bell = (n) =>{
    if(n===0 || n===1){
        return 1
    }else{
        let i = 0
        let sum = 0
        for(i = 0 ; i < n ; i++){
            sum += combi(i,n-1)*bell(i)
        }
        return sum
    }
}



console.log(bell(4))
