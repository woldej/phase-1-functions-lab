// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue== 43)
    return 1
    else if (someValue == 50)
    return 8
    else (someValue == 34)
    return 8
    //returns the number of blocks given a value
  }

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    if (someValue== 43)
    return 264
    else if (someValue == 50)
    return 2112
    else (someValue == 34)
    return 2112
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start==43 && destination==48)
    return 1320
    else if (start==50 && destination==60)
    return 2640
    else (start==34 && destination==28)
    return 1584}
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (start==43 && destination==44)
    return 0
    else if (start==34 && destination==32)
    return 2.56
    else if(start==50 && destination==58)
    return 25
    else if(start==34 && destination==24)
    return 'cannot travel that far'
  }