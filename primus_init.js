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
			spark.join('soundControlRoom', function(){
				callback && callback();
				console.log('a new sound board joined. Hawt diggity.');
			});
		});

    spark.on('play note', function(data){
      console.log(data);
      if (functions.canPlayNow(data.number)){
        spark.room('noiseyRoom').send('play note', data);
        console.log('play note %d event transmitted from p%d:r%d', data.note, data.instrument, data.number);
      }
    });

	});

	primus.on('disconnection', function(spark){
		//hey let's leave both why not
		spark.leave('soundControlRoom');
		spark.leave('noiseyRoom');
		console.log("somebody's gone! Hope it's not the noise maker.");
	});
};