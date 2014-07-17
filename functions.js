var currentInstrument = 0
    , currentRank = 0
    , numInstruments= 4;

function moveToNextPosition(){
    if(currentInstrument == numInstruments - 1){
        currentInstrument = 0;
        currentRank++;
    } else {
        currentInstrument++;
    }
}

exports.assign = function(req, res){
    var newPosition = {
        "instrumentNumber": currentInstrument,
        "rank": currentRank
    };
    moveToNextPosition();
    res.json(newPosition);
}

exports.canPlayNow =  function(rank){
    var cycleProgress = Date.now() % (5 * 30000)
        , interval = Math.floor(cycleProgress / 30000);

    //enable for building fun stuff!
    return true;
    // return (rank == interval);
}