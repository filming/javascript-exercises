const removeFromArray = function(arr, ...args) {
    const finalArray = [];
    const elementsToRemove = new Set(args);

    arr.forEach(currElement => {
        if (!elementsToRemove.has(currElement)){
            finalArray.push(currElement);
        }
    })
    
    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
