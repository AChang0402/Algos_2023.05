/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */


function buddyStrings (s, goal) {

    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            var arr1 = s.split("")
            console.log(arr1)
            // let temp = arr1[j]
            // arr1[j]=arr1[i]
            // arr1[i]=temp
            [arr1[i], arr1[j]] = [arr1[j], arr1[i]]
            s = arr1.join("") 
            if (s == goal) {
                return true
            }
            var arr2 = s.split("") 
            // temp = arr2[j]
            // arr2[j]=arr2[i]
            // arr2[i]=temp
            [arr2[i], arr2[j]] = [arr2[j], arr2[i]]
            s = arr2.join("")
        }
    }
    return false
};

// buddyStrings("ab", "ba")
console.log(buddyStrings("ab", "ab"))


let x=[5,0];
console.log(x)
[x[0],x[1]]=[x[1],x[0]];


let x = [5,0];

[x[0], x[1]] = [x[1], x[0]];

console.log(x); // [-2,12,55,68,80]

let myArray = [12, -2, 55, 68, 80];

[myArray[0], myArray[1]] = [myArray[1], myArray[0]];

console.log(myArray); // [-2,12,55,68,80]





