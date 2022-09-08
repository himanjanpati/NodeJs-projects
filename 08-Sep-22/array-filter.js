// array filter is used to filter elements in an array

const arr = [1,4,5,6,7,5,3,2,5,4,7,10]

let result = arr.filter((items)=>{
    return items > 5
})
console.log(result)