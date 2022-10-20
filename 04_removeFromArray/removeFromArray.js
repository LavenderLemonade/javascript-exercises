const removeFromArray = function taktItOut(stuff, removal) 
{
    for (i = 0; i < stuff.length; i++)
    {
        if (stuff[i] == removal)
        {
            stuff.splice(i,1)
        }
    }

    return stuff
};

// Do not edit below this line
module.exports = removeFromArray;
