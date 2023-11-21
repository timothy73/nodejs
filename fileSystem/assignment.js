// const num = 17;

// while (num < 54){
//     if(num%2 === 0 && num%5 === 0){
//         console.log('FooBar');
//         break;
//     }else if(num%2 === 0){
//         console.log('Foo');
//         break;
//     }else if(num%5 === 0){
//         console.log('Bar');
//         break;
//     }else{
//         console.log(num);
//         break;
//     }
//         num++;
// }


for(counter = 17; counter < 53; counter++){
    if(counter % 2 === 0 && counter % 5 === 0){
        console.log('FooBar');
    }else if(counter % 2 === 0){
        console.log('Foo');
    }else if(counter % 5 === 0){
        console.log('Bar');
    }else{
        console.log(counter);
    }
}

