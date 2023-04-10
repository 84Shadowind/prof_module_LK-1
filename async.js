console.log('Async')


let promise1 = new Promise(function (resolve, reject) {
let n = Math.random()
if (n>0.5) {
  resolve ('Хлеб был куплен')
} else { reject ('Хлеба на ужин не будет')}
})

let promise2 = new Promise(function(resolve,reject){
let n = Math.random()
if (n>0.25) {
  resolve('Хлеб порезан')
  } else {reject ('Что то пошло не так')}
})
promise1
.then (bread => {
  console.log(bread)
  return promise2
})

.then (result => {
  console.log(result)
})


.catch (err => {
  console.log(err)
})


// console.log(promise)
// promise.then( function(data){
// console.log(data)
// })