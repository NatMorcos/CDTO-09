/**
 * REST API for CDTO-09
 */

function validatePoolId(pid) {
    if ([1,2,3,4].indexOf(Number(pid) == -1)) {
        throw 'Invalid Pool Number';
    }
}

exports.assign = function(req, res){
    //TODO return a unique pool / rank
    res.send("Heyyyy we'd give you numbers here.")
}
