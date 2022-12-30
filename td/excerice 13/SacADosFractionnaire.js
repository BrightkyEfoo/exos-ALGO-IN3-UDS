const liste = [
    {
        id : 1,
        v : 10,
        w : 15
    },
    {
        id : 2,
        v : 12,
        w : 180
    },
    {
        id : 3,
        v : 300,
        w : 600
    },
    {
        id : 4,
        v : 700,
        w : 2
    },
    {
        id : 5,
        v : 1000,
        w : 2
    },
    {
        id : 6,
        v : 2000,
        w : 5
    },
    {
        id : 7,
        v : 500,
        w : 7
    }
]
const ramasser = (Liste , poidsMax) =>{
    const sac = []
    let i = 0
    let poids = 0
    const l = Liste.map(el =>{
        el.r = el.v/el.w
        return el
    })
    console.log(l)
    l.sort((a,b) => b.r - a.r)
    console.log(l)
    while(poids < poidsMax){
        if(sac.filter(el => el.id))
        sac.push(tab[i])
    }
}

ramasser(liste , 0)