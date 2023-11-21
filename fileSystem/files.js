const fs = require('fs');

//--readFiles---

// fs.readFile('./text/text1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//--writeFile--

// fs.writeFile('./text/text1.txt', 'Writing file to the existing files', () =>{
//     console.log('File written successfully.');
// });

// fs.writeFile('./text/text2.txt', 'New file created', () =>{
//     console.log('File written created successfully.');
// });

//--directory--

// fs.mkdir('./newDir', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder was created')
// });

//delete directory

// fs.rmdir('./newDir', (err) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder deleted')
// });

//check if folder exist

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder was created')
//     });
// }else{
//     fs.rmdir('./assets', (err) =>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted')
//     });
// }

//deleting file

// if(fs.existsSync('./text/text2.txt')){
//     fs.unlink('./text/text2.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted')
//     })
// }