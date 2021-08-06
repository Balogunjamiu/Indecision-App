const add = (a, b)=>{
    // console.log(arguments)
    return a + b
}
console.log(add(1230,390, 2))

const user = {
    'cities' : ['Lagos', 'Ilorin', "Portharcort"],
     "name" : "Balogun jamiu",
     prinPlacesLived() {
        return this.cities.map((city)=> this.name + ' has lived in ' + city)
        //  this.cities.forEach((city)=>{
        //     console.log(this.Name + ' has lived in ' + city)
        //  })
     }

}
console.log(user.prinPlacesLived())

const multiplier = {
    "numbers" : [1, 2, 3],
    "multiplyBy" : 2,
    multiply(){
        return this.numbers.map((numbers)=> this.multiplyBy * numbers)
    }

}
console.log(multiplier.multiply())