// Add your functions here
function map(src){
  let r = [];
  let ra=[]
  for (let i=0;i <src.length;i++){
    r.push(src[i]*-1)
    ra.push(src[i]*2)
  }
  return r
}


// function map(src){
//   let ra = [];
//   for (let i=0;i<src.length;i++){
//       ra.push(src[i]*2)
//     }
//     return ra
  
// }

// newMapNegative([1,2,3,4,5],fn)

// // console.log(newMap([1,2,4]))
// function newMapOr(src,fn){
//   let r = [];
//   fn = function(){
//     for (let i=0;i<src.length;i++){
//       r.push(src[i])
//     }
//     return r
//   }
  
//   return fn()
// }


// function newMapTwo(src,fn){
//   let r = [];
//   fn = function(){
//     for (let i=0;i<src.length;i++){
//       r.push(2*src[i])
//     }
//     return r
//   }
  
//   return fn()
// }

// function newMapTwo(src,fn){
//   let r = [];
//   fn = function(){
//     for (let i=0;i<src.length;i++){
//       r.push(src[i]*src[i])
//     }
//     return r
//   }
  
//   return fn()
// }