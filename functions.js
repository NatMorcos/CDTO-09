/**
 * REST API for CDTO-09
 */
var currentPool = 0
    , currentRank = 0
    , numPools= 4;

function validatePoolId(pid) {
    if ([1,2,3,4].indexOf(Number(pid) == -1)) {
        throw 'Invalid Pool Number';
    }
}

function moveToNextPosition(){
    if(currentPool == numPools - 1){
        currentPool = 0;
        currentRank++;
    } else {
        currentPool++;
    }
}

exports.assign = function(req, res){
    var newPosition = {
        "pool": currentPool,
        "rank": currentRank
    };
    moveToNextPosition();
    res.json(newPosition);
}
