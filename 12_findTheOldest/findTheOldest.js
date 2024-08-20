const findTheOldest = function(people) {
    
    return people.reduce((oldestPerson, currPerson) => {

        const currPersonYearOfDeath = "yearOfDeath" in currPerson ? currPerson.yearOfDeath : new Date().getFullYear();
        const oldestPersonYearOfDeath = "yearOfDeath" in oldestPerson ? oldestPerson.yearOfDeath : new Date().getFullYear();

        if ((currPersonYearOfDeath - currPerson.yearOfBirth) > (oldestPersonYearOfDeath - oldestPerson.yearOfBirth)){
            oldestPerson = currPerson;
        }

        return oldestPerson;
    });
    

};

// Do not edit below this line
module.exports = findTheOldest;
