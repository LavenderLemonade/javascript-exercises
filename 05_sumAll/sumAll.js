const sumAll = function bigSum(initNum, numsToSumTo) 
{
    for (i = initNum; i <= numsToSumTo; i++)
    {
        let holder = 0;
        if (i = initNum)
        {
            holder += initNum;

        }
        else
        {
            holder += i
        }
        
    }
    return holder
};

// Do not edit below this line
module.exports = sumAll;
