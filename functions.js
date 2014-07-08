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

exports.show = function(req, res){
    //TODO
    res.send("Hey, we're here!");
}

exports.getInstrument = function(req, res){
    var pid = req.params.pid;
    try {
        validatePoolId(pid);
        res.send("your instrumend id is" + pid);
        //TODO
    } catch (e) {
        res.json(400, {error:e});
    }
}
