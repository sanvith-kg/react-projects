// let a=10
// function outer(){
//     let b=20
//     function inner(){
//         let c=30
//         console.log(b)
//     }
//     inner()
//     console.log(c)
// }
// outer()

// function add(a){
//     return function (b){
//         return a+b
//     }
// }
// let res=add(1)
// console.log(res(1))
// console.log(res(2))
// console.log(res(3))

// function outer(){
//     let count=0
//     return function inner(){
//         count++
//         console.log(count)
//     }
// }
// let res=outer()
// res()
// res()

// let str="i love react"
// console.log(str.split(" ").reverse().join(" "))

// let a=[1,2,3,4,5,6,4,3,2,1]
// for(i=0;i<=a.length-1;i++){
//     if(a[i]>a[i-1]&& a[i]>a[i+1]){
//         console.log(a[i])
//     }
// }

// let a=[1,2,3,4,5,6,4,3,2,1]
// for(i=0;i<=a.length-1;i++){
//     if(a[i]==6){
//         console.log("found")
//     }
// }

let original = { name: "aa", skill: ["a", "b", "c"] };
const shallow={...original}
shallow.name="bb"
shallow.skill.push("d")
console.log(shallow.name)
console.log(shallow.skill)
console.log(original.name)
console.log(original.skill)

const deep=structuredClone(original)
deep.name="bb"
deep.skill.push("d")
console.log(deep.name)
console.log(deep.skill)
console.log(original.name)
console.log(original.skill)