let v1 = 12;
var v2 = 13;
let add = 0 ;
 let obj1 = {
     obv1 : 1,
     obv2 : 2
 }


let firsttest = (...args) => {
    add = v1 +v2 ;
    console.log('v1',v1);
    console.log('v2',v2);
    console.log('add',add);
    
    console.log(args);

}

firsttest(obj1);



