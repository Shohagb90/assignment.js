/**kilometerToMeter*/

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;        //we know, 1km=1000m
    return meter;
}
    var length = kilometerToMeter(1);
    console.log(length);


/** budgetCalculator */

function budgetCalculator(watch, phone, laptop){
    var totalCost = watch*50 + phone*100 + laptop*500;
    return totalCost;
}
    var cost = budgetCalculator(1,1,1);
    console.log(cost);


/**hotelCost */

function hotelCost(days){
    var totalCost = 0;
    if (days <= 10){
        totalCost = 10 * 100;
    }
    else if (days <= 20){
        var firstPart = 10 * 100;
        var remaining = days - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 20 * 80;
        var remaining = days - 20;
        var thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }
        return totalCost;
}
        var stay = hotelCost(21);
        console.log(stay);


       
        /**megaFriend */


function megaFriend(friend){
        var friendName = friend.split(" ");
        var longestName = "";
        for (var friendNames of friendName){
        if (friendNames.length > longestName.length) longestName = friendNames;
    }
    return longestName;
}
console.log(megaFriend("Nasif Pavel Mamun Shohidul Sohel Reshma Riazul"));


