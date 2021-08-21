//1_____________________________________________
let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner'];

const CheckE = arr => arr.filter(val => new RegExp(/^[a-df-z]+$/g).test(val));

//[ 'goal', 'sit' ]
console.log(CheckE(items)); 

//2_____________________________________________
let ip1 = 'They ate 5 apples and 5 oranges'

const Replace5ToFfive = str => str.replace(/5/, 'five');

//"They ate five apples and 5 oranges" 
console.log(Replace5ToFfive(ip1));

//3______________________________________________________________
let ip2 = 'bred red spread credible red;'

const RedToBrown = str => str.replace(/(?<!\w)red(?!\w)/g, 'brown');

//"bred brown spread credible brown"
console.log(RedToBrown(ip2));

//4______________________________________________________________

let str = '(9-2)*5+qty/3';
let str1 = '(9*2)-5+(9/13)+qty/3';

const CalcFunc = str => {
    let newstr = str;
    
    let match = newstr.match(/\(\d*\.?\d+.\d*\.?\d+\)/g);
    
    for(let key in match) {
        newstr = newstr
            .replace(
                match[key],
                Calculation(match[key])
                // OR eval(match[key])
            );
    }

    match = newstr.match(/\d*\.?\d+[\/\*]\d*\.?\d+/g);

    for(let key in match) {
        newstr = newstr
            .replace(
                match[key],
                Calculation(match[key])
                // OR eval(match[key])
            );
    }

    match = newstr.match(/\d*\.?\d+[\+|\-|]{1,2}\d*\.?\d+/g);

    for(let key in match) {
        newstr = newstr
            .replace(
                match[key],
                Calculation(match[key])
                // OR eval(match[key])
            );
    }
   
    match = newstr.match(/\d*\.?\d+[\+|\-|]{1,2}\d*\.?\d+/g);
    
    for(let key in match) {
        newstr = newstr
            .replace(
                match[key],
                Calculation(match[key])
                // OR eval(match[key])
            );
    }
   
    return newstr;

    function Calculation (str){
        
        let match = str.match(/\d*\.?\d+/g);

        if(str.includes('/')) {
            const abs = str.includes('-') ? '-' : '+';
            return +(abs+(+match[0] / +match[1]));
        }
        if(str.includes('*')) {
            const abs = str.includes('-') ? '-' : '+';
            return +(abs+(+match[0] * +match[1]));
        }
        if(str.includes('+') || str.includes('-')) {
            match = str.match(/[+-]{0,2}?\d*\.?\d+/g);
            return +match[0] + +match[1];
        }
        return str;
    }
}
//35+qty/3
console.log(CalcFunc(str));
//13.692307692307692+qty/3
console.log(CalcFunc(str1));