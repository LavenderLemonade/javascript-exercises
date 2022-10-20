const repeatString = function repeating(word, num) {
    let wordHolder = "";

    if (num < 0)
        {
            return wordHolder = 'ERROR'
        }
        
    for (i = 0; i < num; i++)
    {

        wordHolder += word
        
        
    }

    return wordHolder


};

// Do not edit below this line
module.exports = repeatString;
