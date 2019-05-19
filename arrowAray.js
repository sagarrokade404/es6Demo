let arr1 = ['test1', 'test2', 'test3', 21, 25, 'test2'];

let getArr1 = arr1.map( (val ,index) => ({
                         thevalue: val,
                         theIndex: index 
                     } )
                     );

console.table(getArr1);

let filterArry = arr1.filter(val  => val === 'test2');

console.log('filterArry',...filterArry);