// !=============== Alireza Abbasi ================!

// ************* first problem


function find(str,index) {

    let arr = [97, 101, 105, 111, 117]
    n = str.charCodeAt(index)
    x = arr.map(item => Math.abs(n-item))
    minimum = Math.min(...x)
    return String.fromCharCode(arr[x.indexOf(minimum)])
}

console.log(find('alireza',1))
console.log(find('alireza',5))


// ************* second problem

let list = [
    {name: 'Alireza', age: 31},
    {name: 'Fateme', age: 28},
    {name: 'Mammad', age: 31},
    {name: 'Ahmad', age: 28},
    {name: 'Ali' , age: 29}
]

function sort(arr, property) {
    let result = {}
    for (i = 0; i < arr.length; i++) {
        if (!result[arr[i][property]])
            result[arr[i][property]] = [arr[i]]
        else
            result[arr[i][property]].push(arr[i])
            }
    return console.log(result)
}

sort(list, 'age')


// ************* third problem


// ======= first method :

let arr = [1, 2, 5, 0, 0, 0, 1, -1, 0, 7, 0, 5, 0, 5, 9, 45]

function sortZero(arr) {
    let count = 0
    for (let key of arr) {
        if (key === 0) {
            arr.splice(arr.indexOf(key), 1)
            arr.push(0)
        }
    }
    console.log(arr)
}

sortZero(arr)


// ======= second method :


function sortZero(arr) {
    let count = 0
    for (let key in arr) {
        if (arr[key] === 0) {
            count++
        }
    }
    arr = arr.filter(item => item !== 0)

    for (i = 0 ; i < count ; i++)
        arr.push(0)

    console.log(arr)
}
sortZero(arr)