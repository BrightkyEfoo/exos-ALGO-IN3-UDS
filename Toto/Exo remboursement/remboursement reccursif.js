let i = 0
const tab = [0 , 0 , 0 , 0]
const monnaies = [10, 5 , 2 , 1]
const rembourse = (n) => {
    console.log(`${++i}}`)
    if(n === 0){
        return tab
    }else if(n>=10){
        tab[0] = tab[0]+(n-n%10)/10
        rembourse(n%10)
        return tab
    }else if(n>=5){
        tab[1] = tab[1] +(n-n%5)/5
        rembourse(n%5)
        return tab
    }else if(n>=2){
        tab[2] = tab[2]+(n-n%2)/2
        rembourse(n%2)
        return tab
    }else if(n>=1){
        tab[3] = tab[3] + n
        rembourse(n-n)
        return tab
    }else {

        return 'erreur' + tab
    }
}
let j = 0
let chaine = ''
rembourse(1177)
for(j=0 ; j<4 ; j++){
    chaine += `${tab[j]} pieces de ${monnaies[j]} Fr, `
}
console.log(`on vous rembourse ${chaine} `)