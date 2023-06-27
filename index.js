function findMatching(drivers, name){
    return drivers.filter(function (d) {return (d.toUpperCase() == name.toUpperCase())});
}

function fuzzyMatch(drivers, name){
    return drivers.filter(function (d) {return (d.charAt(0) === name.charAt(0))});
}

function matchName(driver, str){
    return driver.filter(function (d) {return (d.name === str)});
}