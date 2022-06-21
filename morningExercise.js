

// let even = outlier.filter(n => n%2 === 0)
// let odd = outlier.filter(n => n % 2 != 0)

// console.log(odd, even)

function outlier(arr) {

let even = []
let odd = []
   
    for (let i=0; i<arr.length; i++){
        let num = arr[i]

        if (num % 2 === 0){
            even.push(arr[i])
        } else if (num % 2 != 0){
            odd.push(arr[i])
        }
    } 
    if (even.length === 1){
        return even
    }  else {
        return odd
    }
}

console.log(outlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))