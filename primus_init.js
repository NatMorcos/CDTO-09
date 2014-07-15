var functions = require('./functions');

module.exports = function(primus){

	primus.on('connection', function(spark){
	  
		spark.on('noise maker join', function(callback){
      spark.join('noiseyRoom', function(){
				callback && callback();
				console.log('noise maker is here!!')
			});
		});

		spark.on('soundboard join', function(callback){
      console.log('inside sound board join');
			spark.join('soundControlRoom', function(){
				callback && callback();
				console.log('a new sound board joined. Hawt diggity.');
			});
		});

    //in these, eventually data will contain the pool & rank
    spark.on('play note 1', function(data){
      spark.room('noiseyRoom').send('play note 1', data);
      console.log('play note 1 event received');
    });

	});

	primus.on('disconnection', function(spark){
		//hey let's leave both why not
		spark.leave('soundControlRoom');
		spark.leave('noiseyRoom');
		console.log("somebody's gone! Hope it's not the noise maker.");
	});
};