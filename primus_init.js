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
    spark.on('hit note harder', function(data){
      spark.room('noiseyRoom').send('hit note harder', data);
      console.log('hit note harder event received');
    });

    spark.on('hit note softer', function(data){
      spark.room('noiseyRoom').send('hit note softer', data);
      console.log('hit note softer event received');
    });

    spark.on('increase note', function(data){
      spark.room('noiseyRoom').send('increase note', data);
      console.log('increase note event received');
    });

    spark.on('decrease note', function(data){
      spark.room('noiseyRoom').send('decrease note', data);
      console.log('increase note event received');
    });

	});

	primus.on('disconnection', function(spark){
		//hey let's leave both why not
		spark.leave('soundControlRoom');
		spark.leave('noiseyRoom');
		console.log("somebody's gone! Hope it's not the noise maker.");
	});
};