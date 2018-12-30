const fs = require('fs');

const frequencyFinder = (arr) => { 
    let frequency = 0; 
    arr.forEach((elem) => { 
        frequency += Math.sign(elem) * Number(elem.substring(1));
    });
    return frequency;
}

fs.readFile('./day1-input.txt', 'utf8', (err, data) => {
    if(err) { 
        console.log(err); 
    } else { 
        let arr = data.split('\n');
        console.log(frequencyFinder(arr));
    }
});
