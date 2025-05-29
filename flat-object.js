const obj = {
    name: "amit",
    address: {
        city: "Delhi",
        zip: {
            code: 110001,
            area: "Connaught Place",
        },
    },
};

function flattenObject(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        console.log("key=", key);
        if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
        ) {
            flattenObject(obj[key], `${parentKey}${key}.`, result);
        } else {
            result[`${parentKey}${key}`] = obj[key];
            console.log("result=", result);
        }
    }
    return result;
}
// ----------------------------------------------------------------------
const flat = flattenObject(obj);
console.log(flat);

// function flattenObject(obj){
//   // console.log(obj);
//     for(let value in obj){
//       // console.log("key",obj[key]);
//         if(typeof obj[value]==='object' ){
//             console.log(obj[value]);

//             flattenObject(obj[value]);
//         }else{
//             console.log('2',value);
//             obj[value]=78695;
//             //result.push(obj[key]);
//         }
//     }return JSON.stringify(obj);
// }
// console.log(flattenObject({address:{city:"Delhi",{zip:{code:831004}}}}))
