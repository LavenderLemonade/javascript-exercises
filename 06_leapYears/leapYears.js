const leapYears = function checkLeap(year) 
{
    if (year % 4 == 0)
    {
        if (year % 400 == 0 && year % 100 == 0)
        {
            return true
        }

        else if (year % 400 == 1 && year % 100 == 0)
        {
            return false
        }

        
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
