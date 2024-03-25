// code starts here

function evaluateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speedLimit >= speed) {
        return "Ok";

    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);

        if (demeritPoints >= 12) {
            return "License  Suspended";
        } else {
            return "points" 
        }
    }
}

