var functions = require('./functions');

module.exports = function(primus){

	primus.on('connection', function(spark){
	  
		spark.on('noise maker join', function(callback){
			spark.join('noiseyRoom', function(){
				callback && callback();
				console.log('noise maker is here!!')
			});
		});

		spark.on('sound board join', function(callback){
			spark.join('soundControlRoom', function(){
				callback && callback();
				console.log('a new sound board joined')
			});
		});

		// spark.on('drumkit increase volume', function(data, callback){
		// 	if(functions.canPlayNow(data.rank)){
		// 		primus.room('noiseyRoom').send('eventName', data);
		// 	}
		// });

	});

	primus.on('disconnection', function(spark){
		//hey let's leave both why not
		spark.leave('soundControlRoom');
		spark.leave('noiseyRoom');
		console.log("somebody's gone! Hope it's not the noise maker.");
	});
};
