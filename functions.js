/**
 * REST API for CDTO-09
 */
var currentPool = 0
    , currentRank = 0
    , numPools= 5;


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

exports.canPlayNow =  function(rank){
    var cycleProgress = Date.now() % (5 * 30000)
        , interval = Math.floor(cycleProgress / 30000);

    //enable for building fun stuff!
    //return true;
    return (rank == interval);
}